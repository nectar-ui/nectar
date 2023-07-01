import { UserConfigExport } from 'vite'

interface Build {
  [index: string]: string
}

export default function createConfig(
  dirname: string,
  build: Build
): UserConfigExport
