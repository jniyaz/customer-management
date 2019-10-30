<template>
    <div>
        <h4>Detail View</h4>
    </div>
</template>

<script>
    export default {
        name: 'show',
        mounted() {
            this.$store.dispatch('getCustomers');
        },
        computed: {
            customers() {
                return this.$store.getters.customers;
            }
        }
    }
</script>

<style scoped>
</style>