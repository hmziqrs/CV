import { defineConfig } from "vite";
import { resolve } from "path";
import pugPlugin from "vite-plugin-pug";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Load data for pug templates
const loadData = () => {
  const data = {};
  const components = [
    "community",
    "contact",
    "development",
    "download",
    "experience",
    "projects",
    "skills",
    "story",
    "summary",
  ];

  for (const component of components) {
    data[component] = require(`./scripts/data/${component}.json`);
  }

  return data;
};

export default defineConfig({
  root: "src",
  build: {
    outDir: "../build",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.pug"),
      },
    },
  },
  plugins: [
    pugPlugin({
      localImports: true,
      pretty: true,
      data: loadData(),
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        quietDeps: true,
      },
    },
  },
});
