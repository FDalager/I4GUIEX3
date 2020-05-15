<template>
    <div class="CreateNewModel">
        <h1>{{ msg }}</h1>
        <p>Hej med dig</p>
    </div>
</template>

<script>
   
    export default {
        name: 'CreateNewModel',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>