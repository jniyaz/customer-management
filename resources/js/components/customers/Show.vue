<template>
    <div class="customer-show" v-if="customer">
        <div class="user-img">
            <img class="rounded-circle" src="https://picsum.photos/id/866/160/160" />
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
            </table>
            <div class="text-right">
                <router-link class="btn btn-primary btn-sm" to="/customers">Back to all customers</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'show',
        data() {
            return {
                customer: null
            }
        },
        created() {
            axios.get(`/api/customers/${this.$route.params.id}`, {
                headers: {
                    "Authorization": `Bearer ${this.currentUser.token}`
                }
            })
            .then((res) => {
                this.customer = res.data.customer;
            })
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        }
    }
</script>

<style scoped>
    .customer-show{
        display: flex;
        align-items: center;
    }
    .user-img{
        flex: 1;
    }
    .user-info{
        flex: 3;
    }
    .user-img img{
        max-width: 160px;
    }
</style>