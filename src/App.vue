<template>
  <div class="header_with_icon">
    <p class="text-title">Truco</p>
    <img
      class="img_card_icon"
      src="./assets/img/card-game.png"
      alt=""
      srcset=""
    />
  </div>
  <router-view />
</template>

<style lang="scss">
@import "./sass/_index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
