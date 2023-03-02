<script>
import ProjectComponent from './components/ProjectComponent.vue';
export default {
  name: 'App',
  components: {
    ProjectComponent,
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <ProjectComponent />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
