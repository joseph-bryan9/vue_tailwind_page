<template>
    <section class="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-fixed top-0 left-0 relative w-full z-10" :style="{ 'background-image': 'url(' + hero + ')'}">
        <div class="absolute inset-0 bg-black opacity-50 h-full z-10"></div>
    <p class="capitalize text-6xl text-cust-white relative z-20"><span class="font-black capitalize text-7xl text-cust-red relative z-20">{{ companyName1 }}</span>{{ companyName2 }}</p>
    <p class="tagline text-2xl text-cust-white relative z-20">{{ tagLine }}</p>
    <!-- <img :src=" logo " alt="the_barber_bros" class="w-3/6"> -->
    </section>
</template>

<script>
export default {
    name: 'Hero-section',
    data() {
        return {
            hero: require('../assets/barber-hero.jpg'),
            logo: require('../assets/thebarberbros_logo.png'),
            companyName1: 'the ',
            companyName2: 'barber bros',
            tagLine: 'For the style and service you deserve!',
        }
    }
}
</script>

<style scoped>
p {
    font-family: 'Lobster', cursive;
}

.tagline {
    font-family: 'Roboto', sans-serif;
}
</style>