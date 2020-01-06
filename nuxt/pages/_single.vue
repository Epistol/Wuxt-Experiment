<template>
  <div>
    <nav class="header__nav">
      <template v-for="menuElement in menuElements">
        <nuxt-link :key="menuElement.id" :to="menuElement.url">{{menuElement.title}}</nuxt-link>
      </template>
    </nav>

    <Page v-if="single.type === 'page'" :page="single" />
    <Post v-else :post="single" />
  </div>
</template>

<script>
import Page from '~/components/templates/Page'
import Post from '~/components/templates/Post'

export default {
  async asyncData(context) {
    const { route, app, error } = context

    try {
      const single = await app.$wp.slug().name(route.params.single)
      const menuElements = await app.$wp.menu().location('main')
      return { single, menuElements }
    } catch (e) {
      error(e)
    }
  },

  components: {
    Page,
    Post
  }
}
</script>
