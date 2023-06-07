import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  server: {
    port: 4000,
    open: false,
    proxy: {
      "/api": {
        target: "http://182.109.88.32:99",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:4000",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
      },
    },
  },
};
