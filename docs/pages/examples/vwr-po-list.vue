<!--
Copyright 2022, 2023 Utrecht University

Licensed under the EUPL, Version 1.2 only
You may not use this work except in compliance with the
Licence.
A copy of the Licence is provided in the 'LICENCE' file in this project.
You may also obtain a copy of the Licence at:

https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12

Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
-->
<script lang="ts" setup>
import Sidebar from "../../components/sidebar";

interface Item {
    id: number;
    title: string;
    applicant: string;
    principal_investigator: string;
    date_start: string;
    status: number;
    faculty: number;
    favorite: boolean;
}

const facultyMap = {
    1: "Geesteswetenschappen",
    2: "REBO",
};
const statusMap = {
    1: "Draft",
    2: "PO aan zet",
    3: "Opgenomen in register",
};

const items = ref<Item[]>([
    {
        id: 1,
        title: "Marketing technieken op Mars",
        applicant: "Doe, E.",
        principal_investigator: "Jansen, A.",
        date_start: "2024-01-01",
        faculty: 1,
        status: 1,
        favorite: false,
    },
    {
        id: 2,
        title: "Anti-autocratische tendensen",
        applicant: "Meritsen, J. de.",
        principal_investigator: "Berkel, F. van",
        date_start: "2022-15-09",
        faculty: 1,
        status: 2,
        favorite: false,
    },
    {
        id: 3,
        title: "Elastisciteit van rigide organisaties",
        applicant: "Doe, K.",
        principal_investigator: "Gerard, A.",
        date_start: "2023-02-01",
        faculty: 2,
        status: 3,
        favorite: false,
    },
    {
        id: 4,
        title: "De taal van loodgieters",
        applicant: "Peter, J.",
        principal_investigator: "Kok, W.",
        date_start: "1970-01-01",
        faculty: 1,
        status: 1,
        favorite: true,
    },
    {
        id: 5,
        title: "Dit is een titel",
        applicant: "Doe, J.",
        principal_investigator: "Doe, J.",
        date_start: "2025-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 6,
        title: "Kleuren in beweging",
        applicant: "Doe, J.",
        principal_investigator: "Doe, J.",
        date_start: "2025-01-01",
        faculty: 1,
        status: 3,
        favorite: false,
    },
    {
        id: 7,
        title: "Kleuren in beweging 2",
        applicant: "Doe, J.",
        principal_investigator: "Doe, J.",
        date_start: "2025-01-01",
        faculty: 1,
        status: 2,
        favorite: true,
    },
    {
        id: 8,
        title: "Effect van lucht op kinderen",
        applicant: "Doe, J.",
        principal_investigator: "Doe, J.",
        date_start: "2025-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 9,
        title: "De wet en hazen",
        applicant: "Doe, J.",
        principal_investigator: "Doe, J.",
        date_start: "2025-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 10,
        title: "Lorem Ipsum",
        applicant: "Dolor, S.",
        principal_investigator: "Doe, J.",
        date_start: "2022-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 11,
        title: "Ik weet echt geen titels meer",
        applicant: "Dolor, S.",
        principal_investigator: "Doe, J.",
        date_start: "1000-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 12,
        title: "A Study in Scarlet",
        applicant: "Watson, J.",
        principal_investigator: "Sherlock, H.",
        date_start: "1887-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 13,
        title: "I like trains",
        applicant: "Loper, K.",
        principal_investigator: "De, W.",
        date_start: "2022-01-01",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 14,
        title: "YKING",
        applicant: "Whinehouse, A.",
        principal_investigator: "N/A",
        date_start: "2007-01-05",
        faculty: 2,
        status: 3,
        favorite: true,
    },
    {
        id: 15,
        title: "De ethiek van de ING",
        applicant: "Donders, A.",
        principal_investigator: "n/a",
        date_start: "2023-04-06",
        faculty: 2,
        status: 2,
        favorite: true,
    },
    {
        id: 16,
        title: "Het effect van vulkanen op Canada",
        applicant: "GI, W.",
        principal_investigator: "n/a",
        date_start: "2001-08-23",
        faculty: 2,
        status: 3,
        favorite: true,
    },
]);

const pageSize = ref(15);
const currentPage = ref(1);

const search = ref("");
const favorites = ref(false);
const statusFilters = ref([]);
const facultyFilters = ref([]);

const filteredItems = computed(() => {
    const searchValue = search.value.toLowerCase();

    return items.value.filter((item) => {
        if (favorites.value && !item.favorite) return false;

        if (statusFilters.value.length !== 0) {
            if (!statusFilters.value.includes(item.status)) return false;
        }

        if (facultyFilters.value.length !== 0) {
            if (!facultyFilters.value.includes(item.faculty)) return false;
        }

        if (search.value) {
            if (
                !item.applicant.includes(searchValue) &&
                !item.title.toLowerCase().includes(searchValue) &&
                !item.principal_investigator.toLowerCase().includes(searchValue)
            )
                return false;
        }

        return true;
    });
});

const sortedItems = computed(() => {
    currentPage.value = 1;
    return filteredItems.value.sort((a, b) => {
        return a.date_start < b.date_start ? 1 : -1;
    });
});

const displayedItems = computed(() => {
    return sortedItems.value.slice(
        (currentPage.value - 1) * pageSize.value,
        pageSize.value * currentPage.value,
    );
});

const totalPages = computed<number>(() => {
    return Math.ceil(filteredItems.value.length / pageSize.value);
});

const pages = computed<number[]>(() => {
    return [...Array(totalPages.value).keys()].map((i) => i + 1);
});

function toggleSelected(list, key: string | number) {
    key = Number(key);
    const curVal = list.value.includes(key);

    if (!curVal) list.value.push(key);
    else {
        const index = list.value.indexOf(key);
        if (index > -1) list.value.splice(index, 1); // 2nd parameter means remove one item only
    }
}

function toggleStatus(key: string | number) {
    toggleSelected(statusFilters, key);
}
function toggleFaculty(key: string | number) {
    toggleSelected(facultyFilters, key);
}

function statusColor(status: number) {
    switch (status) {
        case 1:
            return "var(--bs-blue)";
        case 2:
            return "var(--bs-red)";
        case 3:
            return "var(--bs-green)";
    }
}
</script>

<template>
    <div class="w-100">
        <Head>
            <Title>List | Examples | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero align-items-center">
            <h1>VWR PO list test</h1>
        </div>
        <Sidebar class="compact-sidebar" :sticky-sidebar="true">
            <template #sidebar-button> Filters </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked">Filters</h1>
                <input
                    v-model="search"
                    class="form-control mt-2"
                    placeholder="Zoeken..."
                />

                <div class="mt-3 form-check">
                    <input
                        id="favourite"
                        :value="favorites"
                        type="checkbox"
                        class="form-check-input"
                        @click="favorites = !favorites"
                    />
                    <label class="form-check-label" for="favourite"
                        >Favorieten</label
                    >
                </div>
                <div
                    v-for="(status, id) in statusMap"
                    :key="id"
                    class="mt-2 form-check"
                >
                    <input
                        :id="'status' + id"
                        type="checkbox"
                        class="form-check-input"
                        :value="id"
                        @click="toggleStatus(id)"
                    />
                    <label class="form-check-label" :for="'status' + id">{{
                        status
                    }}</label>
                </div>
                <h3 class="mt-4">Faculteit</h3>
                <div
                    v-for="(faculty, id) in facultyMap"
                    :key="id"
                    class="mt-2 form-check"
                >
                    <input
                        :id="'faculty' + id"
                        type="checkbox"
                        class="form-check-input"
                        :value="id"
                        @click="toggleFaculty(id)"
                    />
                    <label class="form-check-label" :for="'faculty' + id">{{
                        faculty
                    }}</label>
                </div>
            </template>
            <div class="h1 uu-sidebar-header-linked list-controls">
                <div class="col-9 fs-4 text-muted">
                    {{ (currentPage - 1) * pageSize + 1 }} tot
                    {{
                        Math.min(currentPage * pageSize, filteredItems.length)
                    }}
                    van {{ filteredItems.length }} regristraties.
                </div>
                <div class="col-3">
                    <select
                        class="form-select"
                        aria-label="Default select example"
                    >
                        <option selected>Sorteer op...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Projectnaam</th>
                        <th>Indiener</th>
                        <th>PI</th>
                        <th>Status</th>
                        <th>Begindatum</th>
                        <th>Tijd tot begindatum</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in displayedItems"
                        :key="item.id"
                        class="align-middle"
                    >
                        <td>
                            {{ item.title }}
                        </td>
                        <td>
                            {{ item.applicant }}
                        </td>
                        <td>
                            {{ item.principal_investigator }}
                        </td>
                        <td
                            :style="
                                'border-left: 4px solid ' +
                                statusColor(item.status)
                            "
                        >
                            {{ statusMap[item.status] }}
                        </td>
                        <td class="text-center">
                            {{ item.date_start }}
                        </td>
                        <td>&nbsp;</td>
                        <td>…</td>
                    </tr>
                </tbody>
            </table>
            <ul
                class="pagination justify-content-center mt-4"
                role="navigation"
                aria-label="pagination"
            >
                <li
                    class="page-item page-button"
                    :class="currentPage === 1 ? 'disabled' : ''"
                >
                    <a class="page-link" @click="currentPage = currentPage - 1">
                        Previous
                    </a>
                </li>
                <li
                    v-for="item in pages"
                    :key="item"
                    class="page-item"
                    :class="item === currentPage ? 'active' : ''"
                >
                    <a class="page-link" @click="currentPage = item">
                        {{ item }}
                    </a>
                </li>
                <li
                    class="page-item page-button"
                    :class="currentPage === totalPages ? 'disabled' : ''"
                >
                    <a class="page-link" @click="currentPage = currentPage + 1">
                        Next
                    </a>
                </li>
            </ul>
        </Sidebar>
    </div>
</template>

<style scoped lang="scss">
.compact-sidebar {
    --bs-uu-sidebar-width: 250px;
    --bs-uu-sidebar-gap: 40px;
}
select {
    margin-bottom: -1px;
}
.list-controls {
    align-items: end;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    margin-top: -20px;
    padding-top: 20px;
    background: white;
    z-index: 100;
}

.table {
    --bs-table-bg: white;
    position: relative;
}

thead {
    position: sticky;
    top: 71px;
    border-bottom: 1px solid var(--bs-table-border-color);
}
</style>
