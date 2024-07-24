module.exports = {
    apps: [
        {
            name: "gamiqo-test",
            exec_mode: "cluster",
            instances: "1",
            script: "./node_modules/nuxt/bin/nuxt.js",
            max_memory_restart: "512M",
            args: "start",
        },
    ],
};