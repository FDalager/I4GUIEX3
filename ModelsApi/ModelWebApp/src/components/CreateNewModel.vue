<template>
    <div class="md-layout-item">
        <h1>Create New Model!</h1>
        <form id="m-app"
              @submit="checkForm">

            <md-autocomplete>
                <p>
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-group"
                           v-model="model.firstname" :md-options="countries"
                           id="firstname">
                </p>
            </md-autocomplete>

            <div class="form-group">
                <p>
                    <label for="lastname">Last Name</label>
                    <input type="text" class="form-group"
                           v-model="model.lastname"
                           id="lastname">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="email">Email</label>
                    <input type="text" class="form-group"
                           v-model="model.email"
                           id="email">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="phoneno">Phone Number</label>
                    <input type="text" class="form-group"
                           v-model="model.phoneno"
                           id="phoneno">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="addresline1">Addres Line 1</label>
                    <input type="text" class="form-group"
                           v-model="model.addresline1"
                           id="addresline1">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="addresline2">Addres Line 2</label>
                    <input type="text" class="form-group"
                           v-model="model.addresline2"
                           id="adressline2">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="zip">Zip</label>
                    <input type="text" class="form-group"
                           v-model="model.zip"
                           id="zip">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="city">City</label>
                    <input type="text" class="form-group"
                           v-model="model.city"
                           id="city">
                </p>
            </div>
                <div class="form-group">
                <p>
                    <label for="country">Country</label>
                    <input type="text" class="form-group"
                           v-model="model.country"
                           id="country">
                </p>
            </div>

                <div class="form-group">
                <p>
                    <label for="birthdate">Birthdate</label>
                    <input type="text" class="form-group"
                           v-model="model.birthdate"
                           id="birthdate">
                </p>
            </div>

                <div class="form-group">
                <p>
                    <label for="nationality">Nationality</label>
                    <input type="text" class="form-group"
                           v-model="model.nationality"
                           id="nationality">
                </p>
            </div>

                <div class="form-group">
                <p>
                    <label for="height">Height</label>
                    <input type="text" class="form-group"
                           v-model="model.height"
                           id="height">
                </p>
            </div>

                <div class="form-group">
                <p>
                    <label for="shoesize">Shoesize</label>
                    <input type="text" class="form-group"
                           v-model.number="model.shoesize"
                           id="shoesize">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="haircolor">Haircolor</label>
                    <input type="text" class="form-group"
                           v-model="model.haircolor"
                           id="haircolor">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="eyecolor">Eyecolor</label>
                    <input type="text" class="form-group"
                           v-model="model.eyecolor"
                           id="eyecolor">
                </p>
            </div>

        <div class="form-group">
                <p>
                    <label for="comment">Comment</label>
                    <input type="text" class="form-group"
                           v-model="model.comment"
                           id="comment">
                </p>
            </div>
        <button class="btn btn-primary" type="submit">Add New Model</button>
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