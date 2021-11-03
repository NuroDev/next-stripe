import type { Options } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export const tsup: Options = {
  clean: true,
  dts: true,
  entryPoints: ["src/client.ts", "src/server.ts"],
  format: ["cjs", "esm", "iife"],
  minify: isProduction,
  sourcemap: true,
};
