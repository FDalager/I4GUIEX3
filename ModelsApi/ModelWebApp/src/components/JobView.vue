<template>
    <div class="md-layout">
        <md-card>
            <md-card-header>
             <div class="md-title">Job liste</div>
             </md-card-header>
        
            <md-card-content>
                <md-table>
                    <md-table-row>
                        <md-table-head>Customer</md-table-head>
                        <md-table-head>Start date</md-table-head>
                        <md-table-head>Days</md-table-head>
                        <md-table-head>location</md-table-head>
                        <md-table-head>Comments</md-table-head>
                    </md-table-row>


                    <md-table-row v-for="job in jobs" v-bind:key="job.efJobId">
                        <md-table-cell >{{Job.Costumer}}</md-table-cell>
                        <md-table-cell>{{Job.StartDate}}</md-table-cell>
                        <md-table-cell>{{Job.Days}}</md-table-cell>
                        <md-table-cell>{{Job.Location}}</md-table-cell>
                        <md-table-cell>{{Job.Comments}}</md-table-cell>
                    </md-table-row>
                </md-table>
            </md-card-content>

        </md-card>
    </div>
</template>

<script>
    export default {
        name: 'JobView',
        data: () => ({
            jobs: null,
            models: null
        }),

        mounted() {
            this.loadJobs();
        },

        methods: {

            loadJobs() {
                fetch("https://localhost:44368/api/jobs", {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => { this.jobs = data })
                    .catch(error => alert("Error!!! " + error));
            }
        }
    };
</script>

<style scoped>
    .md-layout {
        position: relative;
        height: 400px;
        width: 400px;
    }
</style>