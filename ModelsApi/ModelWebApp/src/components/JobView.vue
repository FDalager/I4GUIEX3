<template>
    <div>
        <md-card>
            <md-card-header>
             <div class="md-title">Job liste</div>
             </md-card-header>
        
            <md-card-content>
                <md-table>
                <md-table-row>
                    <md-table-head>Customer</md-table-head>
                    <md-table-head>Start date</md-table-head>
                    <md-table-head>Number of days</md-table-head>
                    <md-table-head>location</md-table-head>
                    <md-table-head>Comment</md-table-head>
                </md-table-row>
                </md-table>
            </md-card-content>

        </md-card>
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