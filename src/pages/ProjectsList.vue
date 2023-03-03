<script>
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';

export default {
    name: "ProjectComponent",
    data() {
        return {
            projects: [],
            url: "http://127.0.0.1:8000/api/projects",
        };
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
    },
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Projects</h1>
            </div>
        </div>
        <div class="row">
            <CardComponent v-for="project in projects" :project="project" />
        </div>
    </div>
</template>

<style scoped></style>
