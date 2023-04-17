import { basename, dirname } from 'path'

export default {
	resolveSnapshotPath: (testPath: string) => `${dirname(testPath)}/${basename(testPath).split('.').shift()}.snap.js`,

	resolveTestPath: (snapshotFilePath: string) => `${dirname(snapshotFilePath)}/${basename(snapshotFilePath).split('.').shift()}.spec.tsx`,
	testPathForConsistencyCheck: 'components/test/src/Component.spec.tsx'
}
