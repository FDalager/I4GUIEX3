<template>
    <div class="CreateNewJob">
        <h1>{{ msg }}</h1>
        <p>Hej med dig job</p>
    </div>
</template>

<script>
    export default {
        name: 'CreateNewJob',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>