<template>
  <nav class="z-20 absolute w-full">
    <div class="grid p-5 pt-10 sm:mx-0 lg:mx-0 xl:mx-32 bg-transparent">
      <!-- <a href="#"><img src="../assets/thebarberbros_logo.png" alt="thebarberbros" class="w-40"></a> -->
      <ul class="hidden lg:flex justify-around items-center capitalize">
        <li v-for="navList in navLists" :key="navList.id" class="text-2xl text-cust-white tracking-wide hover:underline">
          <router-link :to="navList.to">{{ navList.menu }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navLists: [
        { id: 1, menu: "home", to: "/" },
        { id: 2, menu: "about us", to: "/about" },
        { id: 3, menu: "services", to: "/service" },
        { id: 4, menu: "appointments", to: "/appointment" },
        { id: 5, menu: "contact us", to: "/contact" },
      ],
    };
  },
};
</script>
