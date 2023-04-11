import { getPackages } from '@lerna/project'
import { exec } from 'child_process'
import { build as esbuild } from 'esbuild'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function main() {
	console.log('Indexing packages.\n')
	const projects = await getPackages(__dirname)
	projects.forEach(pkg => {
		const pkgPath = pkg.location
		const { name, dependencies, peerDependencies, esbuildOptions } = pkg.toJSON()
		console.log(`Running EsBuild for package: ${name}`)
		try {
			esbuild({
				bundle: true,
				minify: true,
				sourcemap: true,
				absWorkingDir: pkgPath,
				jsx: 'automatic',
				target: 'es2020',
				entryPoints: [join(pkgPath, 'src/index.ts')],
				external: Object.keys(dependencies ?? {}).concat(Object.keys(peerDependencies ?? {})),
				outfile: join(pkgPath, 'dist/index.js'),
				format: 'esm',
				...esbuildOptions
			})
		} catch (error) {
			throw new Error(`ESBuild error in package: ${name}\n${error}`)
		}

		console.log(`Generating .d.ts files for package: ${name}`)
		try {
			exec(`pnpm --filter ${name} exec tsc`)
		} catch (error) {
			throw new Error(`Typescript error in package: ${name}\n${error}`)
		}
	})
	console.log('Success.')
}

main()
