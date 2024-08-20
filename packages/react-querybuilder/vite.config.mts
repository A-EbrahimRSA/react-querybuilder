import vitePluginReact from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginReact()],
  resolve: {
    alias: {
      'react-querybuilder': path.resolve(import.meta.dir, './src'),
      '@rqb-devapp': path.resolve(import.meta.dir, '../../utils/devapp'),
      '@rqb-parsecel': path.resolve(import.meta.dir, './src/utils/parseCEL'),
      '@rqb-parsejsonata': path.resolve(import.meta.dir, './src/utils/parseJSONata'),
      '@rqb-parsejsonlogic': path.resolve(import.meta.dir, './src/utils/parseJsonLogic'),
      '@rqb-parsemongodb': path.resolve(import.meta.dir, './src/utils/parseMongoDB'),
      '@rqb-parsespel': path.resolve(import.meta.dir, './src/utils/parseSpEL'),
      '@rqb-parsesql': path.resolve(import.meta.dir, './src/utils/parseSQL'),
      '@rqb-utils': path.resolve(import.meta.dir, './src/utils'),
    },
  },
  server: {
    port: 3100,
  },
});
