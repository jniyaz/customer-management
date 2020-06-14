<template>
    <div class="new-customer">
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }}
                </li>
            </ul>
        </div>
        <form @submit.prevent="addCustomer">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name" />
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" class="form-control" v-model="customer.email" placeholder="Customer Email" />
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Customer Phonenumber" />
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Website" />
                    </td>
                </tr>
                <tr>
                    <td colspan="5" class="text-center">
                        <input type="submit" class="btn btn-primary" value="Create" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/customers" class="btn btn-warning">Cancel</router-link>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    import validate from 'validate.js';

    export default {
        name: 'new',
        data() {
            return {
                customer: {
                    name: '',
                    email: '',
                    phone: '',
                    website: ''
                },
                errors: null
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        },
        methods: {
            addCustomer() {
                this.errors = null;
                
                const constraints = this.getConstraints();

                const errors = validate(this.$data.customer, constraints);

                if(errors) {
                    this.errors = errors;
                    return;
                }

                // send the data to BE api
                axios.post('/api/customers/new', this.$data.customer)
                .then((response) => {
                    this.$router.push('/customers');
                })

            },

            getConstraints() {
                return {
                    name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'Must be at least 3 characters long'
                        }
                    },
                    email: {
                        presence: true,
                        email: true
                    },
                    phone: {
                        presence: true,
                        numericality: true,
                        length: {
                            minimum: 10,
                            message: 'Must be at least 10 digits long'
                        }
                    },
                    website: {
                        presence: true,
                        url: true
                    }
                }
            }
        }
    }
</script>

<style scoped>
.errors{
    background: lightcoral;
    border-radius: 7px;
    padding: 20px 0 2px 0;
}
</style>