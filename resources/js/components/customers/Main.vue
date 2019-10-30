<template>
    <div id="content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-header"><h5>Customers</h5></div>
                        <div class="card-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customers-main',
    }
</script>

<style scoped>
    #content{
        margin-top: 20px;
    }
</style>