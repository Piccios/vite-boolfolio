<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],

        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {

                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch((error) => {
                    this.projects.push({name: "404-not-found"})
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects()
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="row  d-flex justify-content-center" v-if="projects.length">
            <div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
                <div class="card project-card">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.nome }}</h4>

                        <a :href="project.url_repository" class="btn btn-primary" target="_blank">View on GitHub</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <p>Loading projects...</p>
        </div>
    </div>
</template>

<style lang="scss">
.project-card {
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    .card-title {
        font-weight: 600;
        color: #343a40;
    }

    .card-text {
        color: #6c757d;
    }

    .btn-primary {
        background-color: #007bff;
        border-color: #007bff;

        &:hover {
            background-color: #0056b3;
            border-color: #004085;
        }
    }
}
</style>
