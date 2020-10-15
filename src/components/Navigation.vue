<template>
  <nav>
    <div class="grid grid-cols-2 p-10 mx-40">
      <img src="../assets/thebarberbros_logo.png" alt="thebarberbros" class="w-40">
      <ul class="flex justify-around items-center capitalize">
        <li v-for="navList in navLists" :key="navList.id" class="text-xl">
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
