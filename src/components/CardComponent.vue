<script>
export default {
    name: 'CardComponent',
    data() {
        return {

        }
    },
    props:
    {
        'project': {
            type: Object,
            required: true,
        },
    },
    methods: {

    },
}

</script>

<template>
    <div class="col-sm-12 col-md-4 col-lg-3">
        <div class="cards-container card-deck d-flex gap-2">
            <div class="card" style="width: 18rem; ">
                <div class="images">
                    <img v-if="!project.preview.endsWith('placeholder-300x300.jpeg')"
                        :src="`http://127.0.0.1:8000/storage/${project.preview}`" class="img-fluid" :alt="project.name">
                    <img v-else :src="'http://127.0.0.1:8000/storage/img/uploads/placeholder-300x300.jpeg'"
                        class=" img-fluid" :alt="project.name">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: {{ project.name }}</h5>
                    <p class="card-text">Description: {{ project.description.substr(0, 150) }}...</p>
                </div>
                <div class="justify-content-end p-3">
                    <router-link class="btn btn-primary disable"
                        :to="{ name: 'project', params: { id: project.id } }">Open</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;

.images {
    aspect-ratio: 1;
    border-bottom: 1px solid rgba(96, 96, 96, 0.1);
}
</style>
