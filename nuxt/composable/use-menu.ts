import { ref, reactive, toRefs, SetupContext } from '@vue/composition-api'

interface Options {
    ctx: SetupContext
}

export default function useMenu({ ctx }: Options) {
    const menu = async ({ $axios }) => {
        const response = await $axios.$get('/wp-json/wuxt/v1/menu')
    }

    return { menu }
}