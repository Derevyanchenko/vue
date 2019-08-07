<template>
    <div class="car">
        <h1>brand: {{ carName }}</h1>
        <p>Year: {{ carYear }} </p>
    </div>
</template>


<script>

export default {
    data() {
        return {
            // carName: "bmv",
            // carYear: 2016
        }
    },
    props: ['carName', 'carYear'], 
}

</script>

<style>

    .car {
        border: 1px dashed green;
        padding: 10px;
    }

    .car h3 {
        margin-bottom: 10px;
    }

</style>


