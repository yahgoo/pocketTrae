import { defineConfig } from '@lynx-js/rspeedy';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';

export default defineConfig({
  plugins: [pluginReactLynx(), pluginQRCode()],
  source: {
    entry: './src/index.tsx',
  },
  output: {
    distPath: {
      root: './dist',
    },
  },
  server: {
    port: 3001,
    // Bind to all network interfaces for LAN access
    host: '0.0.0.0',
  },
});
