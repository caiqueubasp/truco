import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    blue_team: {
      state: () => ({
        points: 0,
      }),
      mutations: {
        SET_BLUE_POINT(state, payload) {
          state.points =
            state.points + payload >= 12 ? 12 : (state.points += payload);
        },
        REMOVE_BLUE_POINT(state, payload) {
          state.points = state.points == 0 ? 0 : (state.points -= payload);
        },
        SET_BLUE_POINT_ZERO(state, payload) {
          state.points = payload;
        },
      },
      actions: {},
      getters: {},
    },
    red_team: {
      state: () => ({
        points: 0,
      }),
      mutations: {
        SET_RED_POINT(state, payload) {
          state.points =
            state.points + payload >= 12 ? 12 : (state.points += payload);
        },
        REMOVE_RED_POINT(state, payload) {
          state.points = state.points == 0 ? 0 : (state.points -= payload);
        },
        SET_RED_POINT_ZERO(state, payload) {
          state.points = payload;
        },
      },
      actions: {},
      getters: {},
    },
  },
});
