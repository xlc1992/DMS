<template>
  <div
    class="sidebar-logo-container"
    :class="{'collapse':collapse}"
    id="sidebar-logo-container"
  >
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          v-if="logo"
          :src="logo"
          class="sidebar-logo"
        >
        <!-- <h1
          v-else
          class="sidebar-title"
        >{{ title }} </h1> -->
      </router-link>
      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          v-if="logo1"
          :src="logo1"
          class="sidebar-logo"
        >
        <!-- <h1 class="sidebar-title">{{ title }} </h1> -->
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: this.$store.state.styleSheets.logo.logoName,
      logo: require("@/assets/login/" +
        this.$store.state.styleSheets.logo.logoLittle),
      logo1: require("@/assets/login/" +
        this.$store.state.styleSheets.logo.logoBig)
    };
  }
};
</script>

<style lang="scss" scoped>
// .sidebarLogoFade-enter-active {
//   transition: opacity 1.5s;
// }

// .sidebarLogoFade-enter,
// .sidebarLogoFade-leave-to {
//   opacity: 0;
// }
</style>
