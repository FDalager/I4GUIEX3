<template>
    <div class="md-layout-item">
        <form
                @submit.prevent="createmodel">
            <md-header>
                <div class="md-title">Create New Model</div>
            </md-header>
            <md-content>
                <md-field>
                    <label>First Name</label>
                    <md-input v-model="model.firstname" :md-options="countries"/>
                </md-field>

                <md-field>
                    <label>Last Name</label>
                    <md-input v-model="model.lastname"/>
                </md-field>

                <md-field>
                    <label>Email</label>
                    <md-input v-model="model.email"/>
                </md-field>

                <md-field>
                    <label>Phone Number</label>
                    <md-input v-model="model.phoneno"/>
                </md-field>

                <md-field>
                    <label>Addres Line 1</label>
                    <md-input v-model="model.addresline1"/>
                </md-field>

                <md-field>
                    <label>Addres Line 2</label>
                    <md-input v-model="model.addresline2"/>
                </md-field>

                <md-field>
                    <label>Zip</label>
                    <md-input v-model="model.zip"/>
                </md-field>

                <md-field>
                    <label>City</label>
                    <md-input v-model="model.city"/>
                </md-field>

                <md-field>
                    <label>Country</label>
                    <md-input v-model="model.country"/>
                </md-field>

                <md-field>
                    <label>Birthdate</label>
                    <md-input v-model="model.birthdate"/>
                </md-field>

                <md-field>
                    <label>Nationality</label>
                    <md-input v-model="model.nationality"/>
                </md-field>

                <md-field>
                    <label>Height</label>
                    <md-input v-model="model.height"/>
                </md-field>

                <md-field>
                    <label>Shoesize</label>
                    <md-input v-model.number="model.shoesize"/>
                </md-field>

                <md-field>
                    <label>Haircolor</label>
                    <md-input v-model="model.haircolor"/>
                </md-field>

                <md-field>
                    <label>Eyecolor</label>
                    <md-input v-model="model.eyecolor"/>
                </md-field>

                <md-field>
                    <label>Comment</label>
                    <md-textarea v-model="model.comment"/>
                </md-field>

            </md-content>
            <md-action>
                <md-button type="submit">Add New Model</md-button>
            </md-action>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'CreateNewModel',
        data: () => ({
            model: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                addresLine1: "",
                addresLine2: "",
                zip: "",
                city: "",
                country: "",
                birthDate: "",
                nationality: "",
                height: "",
                shoeSize: 0,
                hairColor: "",
                eyeColor: "",
                comments: "",
            }
        })
    }


</script>

<style scoped>

</style>