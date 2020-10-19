<template>
    <section class="flex flex-col items-center p-10 py-48 bg-gradient-to-b from-red-900 to-red-800">
        <p class="capitalize text-3xl text-center my-10 lg:text-5xl text-cust-red tracking-wide">{{ title1 }} <span class="text-cust-white">{{ title2 }}</span></p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-20 my-5 px-64">
        <div v-for="testimonial in testimonials" :key="testimonial.id">
            <h2 class="text-cust-white tracking-wider leading-7 text-base relative"><span class="text-6xl text-cust-red absolute top-apostrophe-top left-apostrophe-left">{{ testimonial.initialLetter }}</span>{{ testimonial.message }}</h2>
            <p class="text-center capitalize mt-5 text-cust-white text-xl tracking-wider">{{ testimonial.clientFirstname }}<span class="text-cust-red">{{ testimonial.clientSurname }}</span></p>
        </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Testimonial',
    data() {
        return {
            title1: 'our clients ',
            title2: 'says it all',
            testimonials: [
                { id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae id earum repudiandae reprehenderit sunt adipisci possimus? Nemo, saepe minus! Sit quidem veritatis quas obcaecati temporibus, voluptate veniam placeat non cupiditate.', initialLetter: '" ', clientFirstname: 'ron ', clientSurname: 'seth' },
                { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae id earum repudiandae reprehenderit sunt adipisci possimus? Nemo, saepe minus! Sit quidem veritatis quas obcaecati temporibus, voluptate veniam placeat non cupiditate.', initialLetter: '" ', clientFirstname: 'ron ', clientSurname: 'seth' },
                { id: 3, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae id earum repudiandae reprehenderit sunt adipisci possimus? Nemo, saepe minus! Sit quidem veritatis quas obcaecati temporibus, voluptate veniam placeat non cupiditate.', initialLetter: '" ', clientFirstname: 'ron ', clientSurname: 'seth' },
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

h2 { 
  font-family: 'Roboto', sans-serif;
}

h2 > span { 
  font-family: 'Lobster', cursive !important;
}

</style>