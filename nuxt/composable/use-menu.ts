// import { $axios } from '@nuxtjs/axios';
import { reactive, toRefs, ref } from '@vue/composition-api';
export default function useMenu({ ctx }: any) {

    const menuElements = ref({})
    const fetchData = async ({ ctx }: any) => {
        // console.info('ctx', ctx.root.$wp.menu())
        // const res = await ctx.root.$wp.menu().location('main')
        const res = await ctx.root.$axios.get('/wp-json/wuxt/v1/menu')
        console.info('res', res)
        menuElements.value = res
    }

    return { menuElements, fetchData }
}