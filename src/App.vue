<template>
  <div class="container">
    <global-header :user="currentUser" />
    <loader v-if="isLoading" />
    <router-view />
    <footer-nav />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader.vue'
import Loader from '@/components/Loader.vue'
import { GlobalDataProps } from './store'
import createMessage from '@/components/createMessage'
import FooterNav from './components/FooterNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader,
    FooterNav
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)
    watch(() => error.value.status, () => {
      const { status, message } = error.value
      // 如果错误存在并且有提示
      if (status && message) {
        createMessage(message, 'error')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style>
</style>
