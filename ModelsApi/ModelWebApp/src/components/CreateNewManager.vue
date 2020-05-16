<template>
    <div class="CreateNewManager">
        <form @submit.prevent ="createNewManagerFunction">
            <md-card class="">
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