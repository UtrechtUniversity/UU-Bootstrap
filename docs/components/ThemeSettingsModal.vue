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

interface Props {
    active: boolean;
}
const props = withDefaults(defineProps<Props>(), {});
const themeSettings = inject<ThemeSettings>(ThemeSettingsKey);

const runtimeConfig = useRuntimeConfig();
</script>

<template>
    <Modal
        size="default"
        :centered="true"
        :active="active"
        @hidden="themeSettings.showSettings = false"
    >
        <template #title> Theme settings </template>

        <!-- Only show dark mode settings if enabled -->
        <template v-if="runtimeConfig.public.dark_mode">
            <div class="fw-bold fs-4">Color mode settings</div>

            <div class="form-check form-switch mt-2">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    name="spaced"
                    v-model="themeSettings.dark_theme"
                />
                <label class="form-check-label" for="spaced">Dark mode</label>
            </div>
        </template>

        <div class="fw-bold fs-4 mt-3">Header settings</div>

        <label for="header" class="form-label">Header</label>
        <select
            v-model="themeSettings.header"
            class="form-select"
            name="header"
        >
            <option value="classic">Classic</option>
            <option value="unified">Unified</option>
        </select>

        <div v-if="themeSettings.header === 'unified'" class="mt-3">
            <div class="fw-bold">Unified header settings</div>

            <label for="unified-menu-alignment" class="form-label"
                >Menu alignment</label
            >
            <select
                v-model="themeSettings.unifiedHeaderSettings.menuLocation"
                class="form-select"
                name="unified-menu-alignment"
            >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
            </select>

            <div class="form-check form-switch mt-2">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    name="spaced"
                    v-model="themeSettings.unifiedHeaderSettings.spaced"
                />
                <label class="form-check-label" for="spaced"
                    >Use spaced layout</label
                >
            </div>
            <div class="form-check form-switch mt-2">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    name="app_name"
                    v-model="themeSettings.unifiedHeaderSettings.app_name"
                />
                <label class="form-check-label" for="app_name"
                    >Show app name block</label
                >
            </div>
        </div>

        <template #footer>
            <button
                class="btn btn-primary"
                @click="themeSettings.showSettings = false"
            >
                Close
            </button>
        </template>
    </Modal>
</template>
