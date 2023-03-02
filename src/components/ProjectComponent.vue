<script>
import axios from 'axios';

export default {
  name: 'ProjectComponent',
  data() {
    return {
      projects: [],
      url: 'http://127.0.0.1:8000/api/projects',
    }
  },
  methods: {
    getProjects() {
      axios.get(this.url, {
        params: {
          // 
        }
      })
        .then((response) => {
          this.projects = response.data.results.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

  },
  created() {
    this.getProjects();
  }
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Projects</h1>
      </div>
      <div class="col-12">
        <div class="cards-container d-flex gap-2">

          <div class="card" style="width: 18rem;" v-for="project in projects">
            <img :src="project.preview" class="card-img-top" :alt="project.name">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Name: {{ project.name }}</h5>
              <p class="card-text">{{ project.description.substr(0, 150) }}...
              </p>
            </div>
            <div class="justify-content-end p-3"><a href="#" class="btn btn-primary disable">Open</a></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
