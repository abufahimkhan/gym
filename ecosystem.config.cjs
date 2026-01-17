module.exports = {
    apps: [
        {
            name: "rasel-power-gym",
            script: "build/index.js",
            watch: false,
            env: {
                NODE_ENV: "production",
                PORT: 7000,
            }
        },
    ],
};