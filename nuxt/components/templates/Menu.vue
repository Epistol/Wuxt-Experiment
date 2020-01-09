<template name="component-name">
  <div class="header__nav">
    <template v-for="menuElement in menuElements">
      <a :key="menuElement.id" :href="menuElement.url">{{menuElement.title}}</a>
    </template>
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    const { route, app, error } = context

    try {
      const single = await app.$wp.slug().name(route.params.single)
      menuElements = await app.$wp.menu().location('main')
      return { single, menuElements }
    } catch (e) {
      error(e)
    }
  }
}
</script>