<template lang="">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :class="this.$route.name === 'home' ? 'active' : '' " aria-current="page" :to="{name: 'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="this.$route.name === 'projects' ? 'active' : '' " aria-current="page" :to="{name: 'projects'}">Projects</router-link>
                        </li>
                    </ul>
    
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',


}
</script>
<style lang="scss"></style>