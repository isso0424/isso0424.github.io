import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTSConfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), viteTSConfigPaths(), svgrPlugin()],
});
