import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const isExternal = id => !id.startsWith('.') && !path.isAbsolute(id)

export default (dirname, { entry, name, es, cjs }) =>
  defineConfig({
    root: dirname,
    plugins: [react(), dts()],
    build: {
      lib: {
        entry: entry,
        name: name,
        formats: ['es', 'umd'],
        fileName: format => (format == 'es' ? es : cjs)
      },
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    }
  })
