<template>
    <div id="header">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">
                    App Name
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <template v-if="!currentUser">
                            <li class="nav-item">
                                <router-link to="/login" class="nav-link">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/register" class="nav-link">Register</router-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <router-link to="/customers" class="nav-link">Customers</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a id="navbarDropDown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                    {{ currentUser.name }} <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropDown">
                                    <a href="#!" class="dropdown-item" @click.prevent="logout">Logout</a>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'app-header',
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push('/');
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        }
    }
</script>
