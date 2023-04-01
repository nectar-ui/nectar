import { NectarConfig } from '@nectar-ui/core'
import { useNectar } from './useNectar'

interface WithNectarProps {
	nectar: NectarConfig
}

export function withNectar<T extends WithNectarProps = WithNectarProps>(WrappedComponent: React.ComponentType<T>) {
	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

	const ComponentWithNectar = (props: Omit<T, keyof WithNectarProps>) => {
		const nectarProps = useNectar()
		return <WrappedComponent {...nectarProps} {...(props as T)} />
	}

	ComponentWithNectar.displayName = `withNectar(${displayName})`

	return ComponentWithNectar
}
