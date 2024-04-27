module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["react", "import", "tailwindcss"],
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.ts",
    },
    next: {
      rootDir: true,
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  rules: {
    // 画像のalt属性を必須とする
    "@next/next/no-img-element": "off",
    // console.log()をエラーとする
    "no-console": "error",
    // 未使用の変数をエラーとする
    "no-unused-vars": "error",
    // リストの各要素にkey属性を付与する
    "react/jsx-key": "error",
  },
};
