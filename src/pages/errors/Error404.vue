<template>
    <div class="error-page">
        <img src="./error404.png" alt="Error 404" class="error-image">
        <h1>Oops! Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <router-link to="/" class="home-link">Go back to Homepage</router-link>
    </div>
</template>
  
<script>
    export default {
        name: 'Error404'
    }
</script>

    <style scoped>
    .error-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        background-color: #f8f9fa; 
    }

    .error-image {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
        
    h1 {
        font-size: 2.5rem;
        color: #343a40; 
        margin-bottom: 10px;
    }
        
    p {
        font-size: 1.2rem;
        color: #6c757d; 
        margin-bottom: 20px;
    }
    
    .home-link {
        font-size: 1.2rem;
        color: #007bff; 
        text-decoration: none;
    }
    
    .home-link:hover {
        text-decoration: underline;
    }
    </style>
    