declare module '*.png';

declare module '*.svg' {
	import { ReactElement, SVGProps } from 'react'
	const ReactComponent: ( props: SVGProps<SVGElement> ) => ReactElement
	export { ReactComponent }
}

declare module '*.jpeg';

declare module '*.jpg';

declare module '*.gif';

declare module '*.webp';

declare module '*.ttf';

declare module '*.woff';

declare module '*.woff2';
