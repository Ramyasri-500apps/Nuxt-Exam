// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['assets/css/main.css'],
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Nuxt Exam',
            meta: [
                // <meta name="description" content="My amazing site">
                // { name: 'description', content: 'My amazing site.' }
            ],
            script: [
                {
                    src: 'https://accounts.google.com/gsi/client',
                },
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js'
                },
            ],


        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})