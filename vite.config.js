import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import {extractorSvelte} from '@unocss/core'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  plugins: [
    Unocss({
      extractors: [extractorSvelte],
      presets: [presetAttributify(), presetUno()],
    }),
    svelte(),
  ],
})
