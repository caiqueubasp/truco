<template>
  <div>
    <div class="blue_team_container">
      <h1>Blue Team</h1>
      <h3>Placar: {{ blue_team.points }}</h3>
      <br />
      <button class="button" @click="plus(1)">+</button>
      <button class="button" @click="removePoint">-</button>
      <br />
      <br />
      <button class="button_number" @click="plus(3)">+3</button>
      <button class="button_number" @click="plus(6)">+6</button>
      <button class="button_number" @click="plus(9)">+9</button>
      <br />
      <br />
      <button class="zero_button" @click="setZero(0)">Zerar</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "BlueTeam",
  components: {},
  computed: {
    ...mapState({
      blue_team: (state) => state.blue_team,
    }),
    ...mapMutations([]),
  },
  methods: {
    plus(num) {
      this.$store.commit("SET_BLUE_POINT", num);
    },
    removePoint() {
      this.$store.commit("REMOVE_BLUE_POINT", 1);
    },
    setZero(num) {
      this.$store.commit("SET_BLUE_POINT_ZERO", num);
    },
  },
};
</script>
