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
import { ThemeSettings, ThemeSettingsKey } from "~/theme_settings";

const themeSettings = inject<ThemeSettings>(ThemeSettingsKey);

const menuClasses = computed(() => {
    switch (themeSettings?.value.unifiedHeaderSettings?.menuLocation) {
        case "left":
            return "me-auto";
        case "right":
            return "ms-auto";
        case "center":
            return "ms-auto me-auto";
        default:
            return "ms-auto";
    }
});

const headerClasses = computed(() => {
    let classes = "";

    if (themeSettings?.value.unifiedHeaderSettings.spaced) classes += "uu-unified-header ";
    else classes += "uu-fullwidth-unified-header ";

    return classes;
});
</script>

<template>
    <div class="navbar" :class="headerClasses">
        <div class="uu-unified-header-container">
            <div class="navbar-brand uu-brand">
                <NuxtLink href="http://www.uu.nl/" target="_blank" class="uu-logo">
                    <img v-if="themeSettings.dark_theme" src="~/assets/uu-logo-en-w.svg" />
                    <img v-else src="~/assets/uu-logo-en.svg" />
                </NuxtLink>
            </div>

            <div
                v-if="themeSettings.unifiedHeaderSettings.app_name"
                class="navbar-text fs-4 text-black d-none d-lg-flex text-nowrap pe-4"
            >
                Bootstrap theme
            </div>
            <div id="unified-header-nav" class="collapse navbar-collapse me-md-2">
                <navbar-items :class="menuClasses" />
            </div>

            <div
                class="navbar-text border-left ms-3 px-3 text-muted text-uppercase cursor-pointer text-center"
                @click="themeSettings.showSettings = !themeSettings.showSettings"
            >
                Theme Settings
            </div>
            <div class="navbar-text border-left">
                <NuxtLink
                    class="text-muted text-uppercase text-decoration-none"
                    to="https://github.com/DH-IT-Portal-Development/bootstrap-theme"
                    target="_blank"
                >
                    GitHub
                </NuxtLink>
            </div>
            <button
                class="navbar-toggler border-left ms-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#unified-header-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
        </div>
    </div>
</template>
