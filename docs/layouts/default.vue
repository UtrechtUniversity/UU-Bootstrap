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

const currentYear = ref(new Date().getFullYear());
const themeSettings = inject<ThemeSettings>(ThemeSettingsKey);

</script>
<template>
    <div class="uu-root-container" style="flex-basis: 100%">
        <ClassicHeader v-if="themeSettings.header === 'classic'" />
        <UnifiedNavbar v-else />
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
                    DH-IT Faculty Portal Development<br/>
                    Utrecht University &copy; {{ currentYear }}
                </p>
            </div>
        </footer>
    </div>
</template>
