<template>
  <nav>
    <ul class="flex justify-between capitalize ">
      <li v-for="navList in navLists" :key="navList.id" class="text-xl">
        <router-link :to="navList.to">{{ navList.menu }}</router-link>
      </li>
    </ul>
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
