<script>
export default {
    data() {
        return {
            //navlinks
            navLinkNames: [
                {
                    label: "Homepage",
                    name: 'home',
                },
                {
                    label: "Projects",
                    name: 'projects',
                },
                {
                    label: "About",
                    name: 'about',
                }
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><h1>Boolfolio</h1></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="navItem in navLinkNames">
                        <router-link class="nav-link" :to="{name: navItem.name}">
                            {{navItem.label}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    margin-left: 10px;
    color: #000; 
    font-weight: bold; 
}

.nav-link:hover {
    color: #007bff; 
    text-decoration: underline; 
}
</style>
