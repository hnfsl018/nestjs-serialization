export default () => ({
    name: require("../../package.json").name,
    title: require("../../package.json").title,
    description: require("../../package.json").description,
    version: require("../../package.json").version,
    port: parseInt(process.env.PORT, 10) || 3333,
})