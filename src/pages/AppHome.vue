<template>
    <div class="card project-card">
        <img :src="project.image" class="card-img-top" alt="Project image">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary" target="_blank">View on GitHub</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.project-card {
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    .card-img-top {
        height: 180px;
        object-fit: cover;
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