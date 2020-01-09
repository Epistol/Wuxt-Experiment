<template>
  <div>
    <nav class="header__nav">
      <Menu></Menu>
    </nav>

    <Page v-if="single.type === 'page'" :page="single" />
    <Post v-else :post="single" />
  </div>
</template>

<script>
import Page from '~/components/templates/Page'
import Post from '~/components/templates/Post'
import Menu from '~/components/templates/Menu'

export default {
  components: {
    Page,
    Post,
    Menu
  }
}
</script>
