module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    "plugin:astro/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      // Define the configuration for `.astro` file.
      files: ["*.astro", '.eslintrc.{js,cjs}', '*.mjs'],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        sourceType: 'script',
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"

        "indent": ["error", 4]

      },
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}