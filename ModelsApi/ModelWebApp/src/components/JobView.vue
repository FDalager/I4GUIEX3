<template>
    <div class="JobView">
        <h1>{{ msg }}</h1>
        <p>Hej med dig jobview</p>
    </div>
</template>

<script>
    export default {
        name: 'JobView',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>