<template>
  <div>
    <div class="red_team_container">
      <h1>Red Team</h1>
      <h3>Placar: {{ red_team.points }}</h3>
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
  name: "RedTeam",
  components: {},
  computed: {
    ...mapState({
      red_team: (state) => state.red_team,
    }),
    ...mapMutations([]),
  },
  methods: {
    plus(num) {
      this.$store.commit("SET_RED_POINT", num);
    },
    removePoint() {
      this.$store.commit("REMOVE_RED_POINT", 1);
    },
    setZero(num) {
      this.$store.commit("SET_RED_POINT_ZERO", num);
    },
  },
};
</script>
