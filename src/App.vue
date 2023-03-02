<script>
import HomeComponent from './components/HomeComponent.vue';
export default {
  name: 'App',
  components: {
    HomeComponent,
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <HomeComponent />
</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
