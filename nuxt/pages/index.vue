<template>
  <main class="wp__content">
    <div>
      <header class="header">
        <Logo />

        <nav class="header__nav">
          <template v-for="menu in asyncMenu">
            <nuxt-link :key="menu" :to="menu">{{menu}}</nuxt-link>
          </template>
        </nav>
      </header>
      <nuxt class="container" />
    </div>
    <p>
      <span class="bold">Wuxt</span> combines
      <span class="bold italic">WordPress</span>, the worlds biggest CMS with
      <span class="bold italic">nuxt.js</span>, the most awesome front-end application framework yet.
    </p>
    <p>The goal is to provide a ready to use development environment, which makes the full power of WordPress easily available to your front-and app. Included in Wuxt are:</p>
  </main>
</template>

<script lang="ts">
import {
  computed,
  createComponent,
  ref,
  reactive,
  onMounted
} from '@vue/composition-api'

import Logo from '~/components/Logo'
import useMenu from '~/composable/use-menu'

export default createComponent({
  name: 'layoutDefault',
  components: {
    Logo
  },
  setup(props, ctx) {
    const { asyncMenu } = useMenu({ ctx })
    const { menuItems } = asyncMenu({ ctx })
    console.info('asyncMenu', asyncMenu)

    return {
      asyncMenu
    }
  }
})
</script>

<style lang="scss" scoped>
p {
  &:nth-child(1n + 2) {
    margin-top: 1rem;
  }
}

ul {
  margin-top: 1rem;

  li {
    &:nth-child(1n + 2) {
      margin-top: 1rem;
    }
  }
}

.bold {
  font-weight: 700;
}

.italic {
  font-style: italic;
}

code {
  padding: 3px 10px;

  background-color: #37495c;
  border-radius: 4px;

  color: #fff;
}
</style>
