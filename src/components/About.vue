<template>
    <section class="flex flex-col items-center p-10 py-20 relative" :style="{ 'background-image': 'url(' + bgImage + ')'}">
        <div class="absolute w-full h-40 z-10 top-border bg-cover bg-center" :style="{ 'background-image': 'url(' + divider + ')'}"></div>
        <img :src="logo" alt="thebarberbros" class="w-56 min-w-40">
        <h1 class="capitalize text-3xl text-center my-10 lg:text-5xl font-black tracking-wide">{{ tagLine }}</h1>
        <p class="text-base text-center w-70 mb-10 leading-8">{{ about1 }}</p>
        <p class="text-base text-center w-70 mb-5 leading-8">{{ about1 }}</p>
        <a href="#" class="w-full text-3xl text-center capitalize my-10 pt-12 bg-no-repeat bg-center bg-contain h-32 text-cust-white min-h-10 table-cell align-middle relative" :style="{ 'background-image': 'url(' + hrefBg + ')'}">{{ href }}</a>
        <!-- <div class="absolute w-full h-40 z-10 bottom-bottom transform rotate-180 bg-cover bg-center" :style="{ 'background-image': 'url(' + divider + ')'}"></div> -->
    </section>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            divider: require('../assets/border_1.png'),
            bgImage: require('../assets/pattern.jpg'),
            logo: require('../assets/thebarberbros_logo.png'),
            tagLine: 'look good, feel good.',
            about1: 'Started in 2009, with the simple idea of bringing back the neighborhood barbershop. A place where you could kick back, get a great haircut and shoot the breeze. We specialize in both classic and modern haircuts as well as hot lather shaves.',
            href: 'get in touch',
            hrefBg: require('../assets/barber-shop.jpg'),
        }
    }
}
</script>

<style scoped>
h1 {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lobster', cursive;
}
</style>