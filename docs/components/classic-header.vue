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
</script>

<template>
    <div class="uu-header">
        <div class="uu-header-row justify-content-between">
            <NuxtLink to="/" class="uu-logo">
                <img v-if="themeSettings.dark_theme" src="~/assets/uu-logo-en-w.svg" />
                <img v-else src="~/assets/uu-logo-en.svg" />
            </NuxtLink>
            <div class="text-center uu-header-title text-red ms-auto">
                Portaldev Bootstrap theme
            </div>
            <div
                class="border-left ms-auto px-3 text-muted text-uppercase cursor-pointer"
                @click="themeSettings.showSettings = true"
            >
                Theme Settings
            </div>
            <div class="border-left ps-3">
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
    <nav class="navbar uu-navbar">
        <div class="uu-navbar-container">
            <a href="https://www.uu.nl" class="navbar-brand">
                <img src="~/assets/uu-logo-en.svg"/>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"/>
            </button>
            <div id="navbar-content" class="collapse navbar-collapse">
                <navbar-items />
            </div>

        </div>
    </nav>
</template>
