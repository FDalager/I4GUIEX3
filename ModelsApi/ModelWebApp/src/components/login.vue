<template>
    <div class="md-layout-item">
        
            <md-card class="md-primary">
                <md-ripple>
                    <md-card-header>
                        <div class="md-title">Login</div>
                    </md-card-header>
                    <md-content>
                        <md-field md-clearable>
                            <label>UserName</label>
                            <md-input> v-model="UserName"</md-input>
                        </md-field>
                        <md-field>
                            <label>Password</label>
                            <md-input> v-model="Password"</md-input>
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
    

    .md-layout-item 
    {
        height: 400px;
        width: 400px;
          
    }
</style>

