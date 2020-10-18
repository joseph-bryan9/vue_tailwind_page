<template>
    <section class="flex flex-col items-center p-10 py-20 bg-red-900">
        <p class="capitalize text-3xl text-center text-cust-white my-10 lg:text-5xl">{{ barbers1 }} <span class="text-cust-red">{{ barbers2 }}</span> </p>
            <div class="grid grid-cols-1 md:grid-cols-4 my-5">
                <div class="flex flex-wrap justify-center" :class="{ 'pt-10': staff.id == 2, 'pt-40': staff.id == 3 }" v-for="staff in staffs" :key="staff.id">
                    <div class="w-6/12 sm:w-4/12 px-1">
                        <img :src="staff.img" alt="barber" class="rounded-full-rounded" />
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
  text-shadow: 0px 4px 6px #000;
}

</style>