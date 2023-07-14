import type {InjectionKey, Ref} from 'vue';

type _ThemeSettings = {
    header: 'unified' | 'classic';
    showSettings: boolean;
    dark_theme: boolean;
    unifiedHeaderSettings: {
        spaced: boolean;
        app_name: boolean;
        menuLocation: 'left' | 'center' | 'right';
    }
};

type ThemeSettings = Ref<_ThemeSettings>;

const ThemeSettingsKey = Symbol() as InjectionKey<ThemeSettings>;

export { ThemeSettings, ThemeSettingsKey };
