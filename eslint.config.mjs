import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Source-of-truth artifact — not part of the app bundle.
    "RiddorHelper.jsx",
    // Deploy artefacts (Netlify CLI + Capacitor/Xcode build outputs).
    ".netlify/**",
    "ios/App/build/**",
    "ios/App/Pods/**",
  ]),
]);

export default eslintConfig;
