<template>
    <div class="md-layout-item">
        
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-ripple>
                    <md-card-header>
                        <div class="md-title">Login</div>
                    </md-card-header>

                    <md-content>
                       
                        <md-field md-clearable class="userNameField">
                            <label>UserName</label>
                            <md-input> v-model="UserName"</md-input>
                            <md-option value="center">Center</md-option>
                        </md-field>

                        <md-field class="passwordField">
                            <label>Password</label>
                            <md-input> v-model="Password"</md-input>
                            <md-option value="center">Center</md-option>
                        </md-field>
                        
                    </md-content>

                    <md-card-action>
                        <md-button type="submit" class="md-raised">Login</md-button>
                    </md-card-action>


                </md-ripple>
            </md-card>
        
    </div>
</template>

<script>
    export default {
        name: 'login',
        data: () => ({
            UserName: 'UserName',
            PassWord: 'Password'
        })
    };
</script>

<style scoped>
    
    .passwordField
    {
        position: relative;
    }

    .userNameField
    {
        position: relative;
    }

    /*.md-layout-item 
    {
        position: relative;
        height: 400px;
        width: 400px;
          
    }*/
</style>

