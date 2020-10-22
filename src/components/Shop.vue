<template>
    <section class="flex flex-col items-center p-10 py-20 relative border-t" :style="{ 'background-image': 'url(' + bgImage + ')'}">
        <!-- <div class="absolute w-full h-40 z-10 top-border bg-cover bg-center" :style="{ 'background-image': 'url(' + divider + ')'}"></div> -->
        <p class="capitalize text-3xl text-center my-10 lg:text-5xl text-cust-white tracking-wide">{{ title1 }} <span class="text-cust-red">{{ title2 }}</span> </p>
        <div class="grid grid-cols-5 grid-rows-2 gap-5 px-64 pb-20 relative">
        <div class="col-span-2 row-start-1 row-end-3 shadow-xl">
            <img src="../assets/barbershop-1.jpg" alt="barbershop" class="rounded w-full h-full hover:shadow-2xl">
        </div>
        <div class="col-span-2 row-start-1 row-end-1 shadow-xl">
            <img src="../assets/barbershop-2.jpg" alt="barbershop" class="rounded w-full h-full hover:shadow-2xl">
        </div>
        <div class="col-span-1 row-start-1 row-end-1 shadow-xl">
            <img src="../assets/barbershop-3.jpg" alt="barbershop" class="rounded w-full h-full hover:shadow-2xl">
        </div>
        <div class="col-span-1 row-start-2 row-end-3 shadow-xl">
            <img src="../assets/barbershop-4.jpg" alt="barbershop" class="rounded w-full h-full hover:shadow-2xl">
        </div>
        <div class="col-span-2 row-start-2 row-end-3 shadow-xl">
            <img src="../assets/barbershop-5.jpg" alt="barbershop" class="rounded w-full h-full hover:shadow-2xl">
        </div>
        </div>
        <!-- <div class="absolute w-full h-40 z-10 bottom-bottom-2 transform rotate-180 bg-cover bg-center" :style="{ 'background-image': 'url(' + divider + ')'}"></div> -->
    </section>
</template>

<script>
export default {
    name: 'Shop',
    data() {
        return {
            divider: require('../assets/border_1.png'),
            bgImage: require('../assets/pattern.jpg'),
            title1: 'our ',
            title2: 'shop',
        }
    }

}
</script>

<style scoped>

p, span {
  font-family: 'Lobster', cursive;
  text-shadow: 0px 3px 4px #000;
}

</style>