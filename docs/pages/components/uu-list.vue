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
function pickRandom(array: string[] | string[][]) {
    return array[Math.floor(Math.random() * array.length)];
}
const fakeTableData = computed(() => {
    const firstnames = [
        ["Dima", "m"],
        ["Tysha", "m"],
        ["Kyrylo", "m"],
        ["Maksym", "m"],
        ["Dmitro", "m"],
        ["Perun", "m"],
        ["Oleksii", "m"],
        ["Andriy", "m"],
        ["Bohdan", "m"],
        ["Maria", "f"],
        ["Oksana", "f"],
        ["Svetlana", "f"],
        ["Kateryna", "f"],
        ["Anna", "f"],
        ["Kateryna", "f"],
        ["Yulia", "f"],
    ];
    const lastnamesM = [
        "Polishchuk",
        "Maximov",
        "Ivanov",
        "Tykhonov",
        "Tkachuk",
        "Danylo",
        "Kravchenko",
        "Volkov",
        "Chernenko",
    ];
    const lastnamesF = [
        "Dimitrova",
        "Maximova",
        "Kravchenka",
        "Tykhonova",
        "Pavlenka",
        "Sorokina",
        "Sokolovska",
        "Antonova",
        "Chernenka",
    ];

    const data = [];

    for (let i = 0; i < 40; i++) {
        const firstname = pickRandom(firstnames);
        data.push({
            firstname: firstname[0],
            lastname: firstname[1] === "m" ? pickRandom(lastnamesM) : pickRandom(lastnamesF),
            age: Math.floor(Math.random() * 100),
        });
    }

    return data;
});
</script>

<template>
    <div class="uu-content">
        <Head>
            <Title>UU List | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>UU List</h1>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <p>TODO: write docs</p>
            </div>

            <div class="uu-list">
                <div class="uu-list-controls">
                    <div class="uu-list-search-control">
                        <input class="form-control" placeholder="Search" />
                    </div>
                    <div class="uu-list-search-text-control">Showing 0 out of 10000 results</div>
                    <div class="uu-list-order-control">
                        <select class="form-select">
                            <option>Name (asc)</option>
                            <option>Name (desc)</option>
                        </select>
                    </div>
                    <div class="uu-list-page-size-control">
                        <select class="form-select">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
                <div class="uu-list-filters">
                    <div class="uu-list-filter">
                        <div class="uu-list-filter-label">Status</div>
                        <div class="form-check">
                            <input
                                id="id_O_88081c04-634e-4b41-b8bd-d203e77e0464"
                                type="checkbox"
                                class="form-check-input"
                                value="O"
                            />
                            <label
                                class="form-check-label"
                                for="NaN88081c04-634e-4b41-b8bd-d203e77e0464"
                            >
                                Open
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                id="id_R_88081c04-634e-4b41-b8bd-d203e77e0464"
                                type="checkbox"
                                class="form-check-input"
                                value="R"
                            />
                            <label
                                class="form-check-label"
                                for="NaN88081c04-634e-4b41-b8bd-d203e77e0464"
                            >
                                In review
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                id="id_C_88081c04-634e-4b41-b8bd-d203e77e0464"
                                type="checkbox"
                                class="form-check-input"
                                value="C"
                            />
                            <label
                                class="form-check-label"
                                for="NaN88081c04-634e-4b41-b8bd-d203e77e0464"
                            >
                                Concluded
                            </label>
                        </div>
                        <div class="uu-list-filter">
                            <div class="uu-list-filter-label">Born before</div>
                            <div class="uu-list-filter-field">
                                <input type="date" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uu-list-content">
                    <table class="table table-striped table-hover w-100">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="person in fakeTableData">
                                <td>
                                    {{ person.firstname }}
                                </td>
                                <td>
                                    {{ person.lastname }}
                                </td>
                                <td>
                                    {{ person.age }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
