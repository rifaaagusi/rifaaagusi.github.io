export default defineNuxtConfig({
  modules: ['motion-v/nuxt'],
  compatibilityDate: '2024-11-01',
  // Devtools off in production — avoids Windows path.relative() build errors
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  ignoreOptions: {
    allowRelativePaths: true,
  },
  experimental: {
    appManifest: false
  },

  ssr: false,
  nitro: {
    preset: 'github-pages'
  },

  app: {
    head: {
      title: 'Rifa Agus Iftinan — Visual Designer & Video Editor',
      meta: [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gloock&family=Inter:wght@300;400;500&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%230e0e0d%22%20rx%3D%224%22/%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2230%22%20height%3D%2230%22%20rx%3D%223%22%20fill%3D%22none%22%20stroke%3D%22%23ff5c1a%22%20stroke-width%3D%221.5%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2222%22%20font-family%3D%22serif%22%20font-size%3D%2214%22%20font-weight%3D%22bold%22%20fill%3D%22%23ff5c1a%22%20text-anchor%3D%22middle%22%3ERA%3C%2Ftext%3E%3C%2Fsvg%3E" }
      ]
    }
  },

  css: ['~/assets/css/main.css', '~/assets/css/animations.css'],
  vite: {
    optimizeDeps: {
      include: ['page-flip']
    }
  }
})
