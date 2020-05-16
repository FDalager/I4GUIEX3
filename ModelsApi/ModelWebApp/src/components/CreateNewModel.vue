<template>
    <div class="md-layout-item">
        <form id="m-app"
              @submit="checkForm">
        <md-card>
            <md-ripple>
            <md-card-header>
                <div class="md-title">Create New Model</div>
            <md-content>
            <md-field>
                    <label for="firstname">First Name</label>
                    <md-input type="text" class="form-group"
                           v-model="model.firstname" :md-options="countries"
                           id="firstname"/>
            </md-field>

            <md-field>
                    <label for="lastname">Last Name</label>
                    <md-input type="text" class="form-group"
                           v-model="model.lastname"
                           id="lastname"/>
            </md-field>

            <md-field>
                    <label for="email">Email</label>
                    <md-input type="text" class="form-group"
                           v-model="model.email"
                           id="email"/>
            </md-field>

            <md-field>
                    <label for="phoneno">Phone Number</label>
                    <md-input type="text" class="form-group"
                           v-model="model.phoneno"
                           id="phoneno"/>
            </md-field>

            <md-field>
                    <label for="addresline1">Addres Line 1</label>
                    <md-input type="text" class="form-group"
                           v-model="model.addresline1"
                           id="addresline1"/>
            </md-field>

            <md-field>
                    <label for="addresline2">Addres Line 2</label>
                    <md-input type="text" class="form-group"
                           v-model="model.addresline2"
                           id="adressline2"/>
            </md-field>

            <md-field>
                    <label for="zip">Zip</label>
                    <md-input type="text" class="form-group"
                           v-model="model.zip"
                           id="zip"/>
            </md-field>

            <md-field>
                    <label for="city">City</label>
                    <md-input type="text" class="form-group"
                           v-model="model.city"
                           id="city"/>
            </md-field>

            <md-field>
                    <label for="country">Country</label>
                    <md-input type="text" class="form-group"
                           v-model="model.country"
                           id="country"/>
            </md-field>

            <md-field>
                    <label for="birthdate">Birthdate</label>
                    <md-input type="text" class="form-group"
                           v-model="model.birthdate"
                           id="birthdate"/>
            </md-field>

            <md-field>
                    <label for="nationality">Nationality</label>
                    <md-input type="text" class="form-group"
                           v-model="model.nationality"
                           id="nationality"/>
            </md-field>

            <md-field>
                    <label for="height">Height</label>
                    <md-input type="text" class="form-group"
                           v-model="model.height"
                           id="height"/>
            </md-field>

            <md-field>
                    <label for="shoesize">Shoesize</label>
                    <md-input type="text" class="form-group"
                           v-model.number="model.shoesize"
                           id="shoesize"/>
            </md-field>

            <md-field>
                    <label for="haircolor">Haircolor</label>
                    <md-input type="text" class="form-group"
                           v-model="model.haircolor"
                           id="haircolor"/>
            </md-field>

            <md-field>
                    <label for="eyecolor">Eyecolor</label>
                    <md-input type="text" class="form-group"
                           v-model="model.eyecolor"
                           id="eyecolor"/>
            </md-field>

            <md-field>
                    <label for="comment">Comment</label>
                    <md-input type="text" class="form-group"
                           v-model="model.comment"
                           id="comment"/>
            </md-field>
            </md-content>
            <md-card-action>
                <md-button type="submit">Add New Model</md-button>
            </md-card-action>
            </md-ripple>
        </md-card>
        </form>    
    </div>
</template>

<script>
   
    export default {
        data() {
            return {
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
            }
        }
    }

</script>

<style scoped>

</style>