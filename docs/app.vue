<script setup lang="ts">
import { ThemeSettingsKey } from "~/theme_settings";
import ThemeSettingsModal from "~/components/ThemeSettingsModal.vue";

const themeSettings = ref({
    header: 'classic',
    showSettings: false,
    unifiedHeaderSettings: {
        spaced: true,
        app_name: true,
        menuLocation: 'right',
    }
});

provide(ThemeSettingsKey, themeSettings);

</script>

<template>
    <div>
        <ThemeSettingsModal :active="themeSettings.showSettings"  />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
