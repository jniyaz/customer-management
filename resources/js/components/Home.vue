<template>
    <div id="content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-header">Dashboard</div>
                        <div class="card-body">
                            <h6 class="text-center">{{ welcome }}..</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            welcome() {
                return this.$store.state.welcome;
            }
        }
    }
</script>

<style scoped>
    #content{
        margin-top: 20px;
    }
</style>