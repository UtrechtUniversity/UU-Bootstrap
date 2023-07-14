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
import { Ref } from "vue";
import Sidebar from "../../components/sidebar";
import data from "@/assets/MOCK_DATA.json";

interface Item {
    id: number,
    first_name: string,
    last_name: string,
    title: string,
    description: string,
    status: number,
    faculty: number,
    favorite: boolean,
}

const facultyMap = {
    1: "Humanities",
    2: "Law and Organisation",
    3: "Science",
    4: "Social Sciences",
    5: "Trains",
};
const statusMap = {
    1: "Draft",
    2: "Submitted",
    3: "Under review",
    4: "Reviewed",
    5: "Completed",
};

const items = ref<Item[]>(data.slice(0, 150));
const pageSize = ref(15);
const currentPage = ref(1);

const search = ref("");
const favorites = ref(false);
const statusFilters = ref<(string|number)[]>([]);
const facultyFilters = ref<(string|number)[]>([]);

const filteredItems = computed(() => {
    const searchValue = search.value.toLowerCase();

    return items.value.filter((item) => {
        if (favorites.value && !item.favorite)
            return false;

        if (statusFilters.value.length !== 0) {
            if (!statusFilters.value.includes(item.status))
                return false;
        }

        if (facultyFilters.value.length !== 0) {
            if (!facultyFilters.value.includes(item.faculty))
                return false;
        }

        if (search.value) {
            const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();

            if (!fullName.includes(searchValue) && !item.title.toLowerCase().includes(searchValue) && !item.description.toLowerCase().includes(searchValue))
                return false;
        }

        return true;
    });
});

const sortedItems = computed(() => {
    currentPage.value = 1;
    return filteredItems.value.sort((a, b) => {
        return a.first_name > b.first_name ? 1 : -1;
    });
});

const displayedItems = computed(() => {
    return sortedItems.value.slice(
        (currentPage.value - 1) * pageSize.value,
        pageSize.value * currentPage.value
    );
});

const totalPages = computed<number>(() => {
    return Math.ceil(filteredItems.value.length / pageSize.value);
});

const pages = computed<number[]>(() => { return [...Array(totalPages.value).keys()].map(i => i + 1); });

function toggleSelected (list: Ref<(string|number)[]>, key: string|number) {
    key = Number(key);
    const curVal = list.value.includes(key);

    if (!curVal)
        list.value.push(key);
    else {
        const index = list.value.indexOf(key);
        if (index > -1)
            list.value.splice(index, 1); // 2nd parameter means remove one item only
    }
}

function toggleStatus (key: string|number) {
    toggleSelected(statusFilters, key);
}
function toggleFaculty (key: string|number) {
    toggleSelected(facultyFilters, key);
}
</script>

<template>
    <div class="w-100">
        <Head>
            <Title>List | Examples | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>List example</h1>
        </div>
        <Sidebar>
            <template #sidebar-button>
                Filters
            </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked">
                    Filters
                </h1>
                <input v-model="search" class="form-control mt-2" placeholder="Search..." />

                <div class="mt-3 form-check">
                    <input
                        id="favourite"
                        :value="favorites"
                        type="checkbox"
                        class="form-check-input"
                        @click="favorites = !favorites"
                    />
                    <label class="form-check-label" for="favourite">Favourites</label>
                </div>
                <div v-for="(status, id) in statusMap" :key="id" class="mt-2 form-check">
                    <input
                        :id="'status' + id"
                        type="checkbox"
                        class="form-check-input"
                        :value="id"
                        @click="toggleStatus(id)"
                    />
                    <label class="form-check-label" :for="'status' + id">{{ status }}</label>
                </div>
                <h3 class="mt-4">
                    Faculty
                </h3>
                <div v-for="(faculty, id) in facultyMap" :key="id" class="mt-2 form-check">
                    <input
                        :id="'faculty' + id"
                        type="checkbox"
                        class="form-check-input"
                        :value="id"
                        @click="toggleFaculty(id)"
                    />
                    <label class="form-check-label" :for="'faculty' + id">{{ faculty }}</label>
                </div>
            </template>
            <h1 class="uu-sidebar-header-linked">
                Items
            </h1>
            <div v-for="item in displayedItems" :key="item.id" class="border-bottom mt-2">
                <h4>{{ item.title }}</h4>
                <p class="text-muted mb-1">
                    {{ item.description }}
                </p>
            </div>
            <ul class="pagination justify-content-center mt-4" role="navigation" aria-label="pagination">
                <li
                    class="page-item page-button"
                    :class="currentPage === 1 ? 'disabled' : ''"
                >
                    <a
                        class="page-link"
                        @click="currentPage = (currentPage - 1)"
                    >
                        Previous
                    </a>
                </li>
                <li
                    v-for="item in pages"
                    :key="item"
                    class="page-item"
                    :class="(item === currentPage ? 'active' : '')"
                >
                    <a
                        class="page-link"
                        @click="currentPage = item"
                    >
                        {{ item }}
                    </a>
                </li>
                <li
                    class="page-item page-button"
                    :class="currentPage === totalPages ? 'disabled' : ''"
                >
                    <a
                        class="page-link"
                        @click="currentPage = (currentPage + 1)"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </Sidebar>
    </div>
</template>
