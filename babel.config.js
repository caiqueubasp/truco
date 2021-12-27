module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/_index.scss";`,
      },
    },
  },
};
