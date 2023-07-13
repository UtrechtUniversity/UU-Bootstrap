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
const range = ref([...Array(5).keys()]);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>Tiles | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Tiles</h1>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th />
                            <th v-for="name in ['xs', 'sm', 'md', 'lg', 'xl']">
                                {{ name }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                Default tiles per row
                            </th>
                            <td v-for="i in [2, 4, 5, 6, 7]">
                                {{ i }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                CSS class
                            </th>
                            <td v-for="name in ['xs', 'sm', 'md', 'lg', 'xl']">
                                .tiles-n-{{ name }}-{i}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="uu-container flex-nowrap">
            <div class="tiles">
                <a v-for="i in range" :key="i" class="tile">
                    <strong class="mb-auto">Tile {{ i }}</strong>
                    <span>Something </span>
                </a>
            </div>
        </div>
    </div>
</template>
