<template>
    <div class="CreateNewManager">
        <form @submit ="createNewManagerFunction">
            <md-card>
                    <md-card-header>
                        <div class="md-title">Create New Manager</div>
                    </md-card-header>
                    <md-content>
                        <md-field>
                            <label for="firstname">First Name</label>
                            <md-input type="text" class="form-group"
                                      v-model="model.firstname" :md-options="countries"
                                      id="firstname" />
                        </md-field>

                        <md-field>
                            <label for="lastname">Last Name</label>
                            <md-input type="text" class="form-group"
                                      v-model="model.lastname"
                                      id="lastname" />
                        </md-field>

                        <md-field>
                            <label for="email">Email</label>
                            <md-input type="text" class="form-group"
                                      v-model="model.email"
                                      id="email" />
                        </md-field>
                     </md-content>
           </md-card>
        </form> 
    </div>
</template>

<script>
    export default {
        name: 'CreateNewManager',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>