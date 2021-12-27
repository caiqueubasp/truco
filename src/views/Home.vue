<template>
  <div class="home">
    <BlueTeam />
    <br />
    <br />
    <RedTeam />
  </div>
  <Footer />
</template>

<script>
import BlueTeam from "@/components/BlueTeam.vue";
import RedTeam from "@/components/RedTeam.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: {
    BlueTeam,
    RedTeam,
    Footer,
  },
};
</script>
