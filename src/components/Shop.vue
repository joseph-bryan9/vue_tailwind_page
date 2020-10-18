<template>
    <section class="flex flex-col items-center p-10 py-20 relative" >
        <!-- <div class="absolute w-full h-40 z-10 top-border-2" :style="{ 'background-image': 'url(' + divider + ')'}"></div> -->
        <p class="capitalize text-3xl text-center my-10 lg:text-5xl">{{ title1 }} <span class="text-cust-red">{{ title2 }}</span> </p>
        <div class="grid grid-cols-5 grid-rows-2 gap-3 my-5 px-24">
        <div class="col-span-2 row-start-1 row-end-3 bg-purple-700">
            <img src="../assets/barbershop-1.jpg" alt="barbershop" class="w-full h-40">
        </div>
        <div class="col-span-2 row-start-1 row-end-1 bg-purple-500">
            <img src="../assets/barbershop-2.jpg" alt="barbershop" class="w-full h-full">
        </div>
        <div class="col-span-1 row-start-1 row-end-1 bg-purple-700">
            <img src="../assets/barbershop-3.jpg" alt="barbershop" class="w-full h-full">
        </div>
        <div class="col-span-1 row-start-2 row-end-3 bg-purple-100">
            <img src="../assets/barbershop-4.jpg" alt="barbershop" class="w-full h-full">
        </div>
        <div class="col-span-2 row-start-2 row-end-3  bg-purple-800">
            <img src="../assets/barbershop-5.jpg" alt="barbershop" class="w-full h-full">
        </div>
        
        </div>
    </section>
</template>

<script>
export default {
    name: 'Shop',
    data() {
        return {
            divider: require('../assets/border_1.png'),
            title1: 'our ',
            title2: 'shop',
        }
    }

}
</script>

<style scoped>

p, span {
  font-family: 'Lobster', cursive;
  text-shadow: 0px 4px 6px #000;
}

</style>