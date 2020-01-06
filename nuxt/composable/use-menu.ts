// import { $axios } from '@nuxtjs/axios';
import { reactive, toRefs, ref } from '@vue/composition-api';
export default function useMenu({ ctx }: any) {

  let menuElements = ref({})
  const fetchData = async ({ ctx }: any) => {
    const { app, error } = ctx
    try {
      const menu = await app.$wp.menu().location('main')
      console.info('menu', menu)
      return { menu }
    } catch (e) {
      error(e)
    }

    return { menuElements }
  }

  menuElements.value = fetchData({ ctx })

  return { fetchData, menuElements }
}