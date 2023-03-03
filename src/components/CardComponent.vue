<script>
import { stringifyExpression } from '@vue/compiler-core';

export default {
    name: 'ProjectComponent',
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
    <div class="col-12">
        <div class="cards-container d-flex gap-2">
            <div class="card" style="width: 18rem;" v-for="project in projects">
                <img v-if="!project.preview.endsWith('placeholder-300x300.jpeg')"
                    :src="'http://127.0.0.1:8000/storage/' + project.preview" class="img-fluid" :alt="project.name">
                <img v-else :src="'http://127.0.0.1:8000/storage/img/uploads/placeholder-300x300.jpeg'" class=" img-fluid"
                    :alt="project.name">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: {{ project.name }}</h5>
                    <p class="card-text">Description: {{ project.description.substr(0, 150) }}...</p>
                </div>
                <div class="justify-content-end p-3"><a href="#" class="btn btn-primary disable">Open</a></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
