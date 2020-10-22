<template>
    <!-- <section class="flex flex-col items-center p-10 py-20"> -->
    <section class="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-fixed top-0 left-0 relative w-full z-10" :style="{ 'background-image': 'url(' + hero + ')'}">
        <div class="absolute inset-0 bg-black opacity-75 z-10"></div>
        <p class="capitalize text-3xl text-center text-cust-white my-10 relative z-20 lg:text-5xl">{{ barbers1 }} <span class="text-cust-red">{{ barbers2 }}</span> </p>
            <div class="grid grid-cols-1 md:grid-cols-4 my-5 relative z-20">
                <div class="flex flex-wrap justify-center" v-for="staff in staffs" :key="staff.id">
                    <div class="w-6/12 sm:w-4/12 px-1">
                        <img :src="staff.img" alt="barber" class="rounded-full-rounded shadow-xl hover:shadow-2xl" />
                        <p class="text-center text-xl text-cust-white my-5 w-full tracking-wide">{{ staff.name }}</p>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    name: 'Team',
    data() {
        return {
            barbers1: 'the ',
            barbers2: 'barbers',
            hero: require('../assets/barber-hero2.jpg'),
            staffs: [
                { id: 1, img: require('../assets/barber-1.jpg', ), name: 'Elbert Owen' },
                { id: 2, img: require('../assets/barber-2.jpg', ), name: 'Ray Phillips' },
                { id: 3, img: require('../assets/barber-3.jpg', ), name: 'Dean Wilson' },
                { id: 4, img: require('../assets/barber-4.jpg', ), name: 'Justin Cain' },
            ]
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