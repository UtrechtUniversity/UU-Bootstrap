<script lang="ts" setup>
const toggle = ref(false);
const currentYear = ref(new Date().getFullYear());
</script>
<template>
    <div class="uu-root-container bg-white" :class="toggle ? 'toggled' : ''" style="flex-basis: 100%">
        <div class="uu-header" @click="toggle = !toggle">
            <div class="uu-header-row justify-content-between">
                <div class="uu-logo">
                    <img src="~/assets/uu-logo-en.svg" />
                </div>
                <div class="text-center uu-header-title text-red">
                    Portaldev Bootstrap theme
                </div>
                <div class="border-left ms-5">
                    <NuxtLink
                        class="text-muted text-uppercase text-decoration-none"
                        to="https://github.com/DH-IT-Portal-Development/bootstrap-theme"
                        target="_blank"
                    >
                        GitHub
                    </NuxtLink>
                </div>
            </div>
        </div>
        <navbar />
        <slot />
        <footer class="uu-footer">
            <div class="col-12 col-md-4">
                <img src="~/assets/uu-logo-en-white.svg" />
            </div>
            <div class="col-12 col-md-8 text-md-end">
                <p>
                    Portaldev Bootstrap Theme
                </p>
                <p>
                    DH-IT Portal Development<br />
                    Utrecht University &copy; {{ currentYear }}
                </p>
            </div>
        </footer>
    </div>
</template>

<style>
.uu-root-container.toggled {
    --bs-uu-container-width: 100%;
    --bs-uu-content-width: calc(100% - 50px);
}
</style>
