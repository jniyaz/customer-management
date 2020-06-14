<template>
    <div>
        <div class="btn-wrapper text-right">
            <router-link to='/customers/new' class="btn btn-primary btn-sm">New</router-link>
        </div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr><td colspan="5" align="center">No Customers.</td></tr>
                </template>
                <template v-else>
                    <tr v-for="customer in customers" :key="customer.id">
                        <th scope="row">{{ customer.id }}</th>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <router-link class="btn btn-sm btn-warning" :to="`/customers/${customer.id}`">View</router-link>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'list',
        mounted() {
            if(this.customers.length) {
                return;
            }
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
.btn-wrapper{
    margin-bottom:10px;
}
</style>