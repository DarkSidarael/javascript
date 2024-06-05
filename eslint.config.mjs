import config from "eslint-config-standard";



  export default [
    {
        rules: {
            eqeqeq: "off",
            "no-unused-vars": "error",
            "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
        }
    }
];
