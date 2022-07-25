import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    app: {
        buildAssetsDir: '/nuxt/'
    },

    css: [
        "@/../scss/bootstrap.scss"
    ],

    router: {
        options: {
            linkActiveClass: '',
            linkExactActiveClass: 'active',
        }
    },

    vite: {
        css: {
            devSourcemap: true,
        }
    },

    components: {
        dirs: [
            '~/components',
        ]
    },

    typescript: {
        shim: false, // Enable if not running VSCode with Volar Extension or IntelliJ
        strict: true,
        typeCheck: 'build',
    }
})
