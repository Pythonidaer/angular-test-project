import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parserOptions: { ecmaVersion: 'latest' },
    },
    rules: { complexity: ["warn", { max: 10 }] },
  }
);
