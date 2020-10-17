<template>
    <section class="flex flex-col items-center p-10 py-20 bg-red-900">
        <p class="capitalize text-3xl text-center text-cust-white my-10 lg:text-5xl">{{ barbers }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div>
            <img src="" alt="">
            <p>elmar roys</p>
        </div>
        <div>
            <img src="" alt="">
            <p>elmar roys</p>
        </div>
        <div>
            <img src="" alt="">
            <p>elmar roys</p>
        </div>
        <div>
            <img src="" alt="">
            <p>elmar roys</p>
        </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Team',
    data() {
        return {
            barbers: 'the barbers'
        }
    }
}
</script>

<style scoped>

p {
  font-family: 'Lobster', cursive;
}

</style>