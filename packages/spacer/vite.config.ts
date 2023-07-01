import createConfig from '@nectar-ui/vite-config'
import { fileURLToPath } from 'url'
import packageJson from './package.json'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default createConfig(__dirname, packageJson.build)
