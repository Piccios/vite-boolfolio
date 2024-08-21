<script>
import MainHeader from './components/MainHeader.vue'
import AppMain from './components/AppMain.vue'
import MainFooter from './components/MainFooter.vue'


export default {
  name: "",
  components: {
    MainHeader,
    AppMain,
    MainFooter
  }
}
</script>

<template>
  <header>
    <MainHeader />
  </header>

  <main>
    <AppMain />
  </main>

  <footer>
    <MainFooter />
  </footer>
</template>

<style lang="scss">
  @use "./styles/general.scss";  
  </style>
