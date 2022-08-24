module.exports = {
    env: {
        node: true,
    },
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        withDefaults: "readonly",
    },
    extends: [
        "@vue/typescript/recommended",
        "eslint:recommended",
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/valid-v-model': 'off',
    }
};