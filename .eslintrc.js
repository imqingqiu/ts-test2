module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        // parser: 'babel-eslint'
        parser: '@typescript-eslint/parser'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
        // 'plugin:@typescript-eslint/recommended'
        // '@nuxtjs/eslint-config-typescript'
    ],
    plugins: ['prettier', '@typescript-eslint'],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': [
            0,
            {
                vars: 'loca', // 允许声明未使用变量
                args: 'none' // 参数不检查
            }
        ],
        indent: ['error', 4] // 4个空格缩进
    }
}
