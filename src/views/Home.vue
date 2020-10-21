<template>
  <div class="home">
    <Hero />
    <About />
    <Shop />
    <Appointment />
    <Team />
    <Testimonial />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero-section.vue";
import About from "@/components/About.vue";
import Team from "@/components/Team.vue";
import Shop from "@/components/Shop.vue";
import Testimonial from "@/components/Testimonial.vue";
import Appointment from "@/components/Appointment.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Hero,
    About,
    Team,
    Shop,
    Testimonial,
    Appointment,
    Contact
  },
};
</script>
