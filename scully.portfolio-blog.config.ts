import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'prismjs/components/prism-yaml.js';
setPluginConfig('md',  { enableSyntaxHighlighting: true });
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio-blog",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
