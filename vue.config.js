module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        ws: true,
        changeOrigin: true
      },
      "/media": {
        target: "http://localhost:7000",
        ws: true,
        changeOrigin: true
      }
    },
    allowedHosts: ["vststudios.ddns.net", "localhost", "0.0.0.0"]
  }
};
