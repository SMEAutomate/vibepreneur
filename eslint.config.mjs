import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = [
  { ignores: ["remotion/**", ".next/**"] },
  ...nextConfig,
  prettierConfig,
];

export default eslintConfig;
