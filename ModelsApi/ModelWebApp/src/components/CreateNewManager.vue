<template>
    <div class="CreateNewManager">
        <h1>{{ msg }}</h1>
        <p>Hej med dig manager</p>
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