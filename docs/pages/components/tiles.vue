<script lang="ts" setup>
const range = ref([...Array(56).keys()]);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>Tiles | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Tiles</h1>
        </div>
        <div class="uu-container flex-nowrap">
            <div class="tiles">
                <a class="tile" v-for="i in range" :key="i">
                    <strong class="mb-auto">Tile {{i}}</strong>
                    <span>Something </span>
                </a>
            </div>
        </div>
    </div>
</template>
