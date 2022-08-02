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
