<template lang="">
    
    <div class="row">
        <div class="col-12">
            <h1>Single page: {{this.$route.params.id}}</h1>
            <CardComponent :project="project"/>
        </div>
    </div>
</template>
<script>
import CardComponent from '../components/CardComponent.vue';
import axios from 'axios';
export default {
    name: 'ProjectPage',
    components: {
        CardComponent,
    },
    data() {
        return {
            project: null,
            url: "http://127.0.0.1:8000/api/projects",
        };
    },
    methods: {
        getProject() {
            axios.get(`${this.url}/${this.$route.params.id}`,
                {
                    params: {

                    }
                })
                .then((response) => {
                    this.project = response.data.results;
                    console.warn(this.project)

                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
    },
    created() {
        this.getProject();
    },

}

</script>
<style lang="scss" scoped></style>