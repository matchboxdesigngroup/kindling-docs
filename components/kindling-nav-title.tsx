import { KindlingLogo } from '@/components/kindling-logo';

/** Display label for the docs site; change when aligning with a release. */
export const KINDLING_DOCS_VERSION_LABEL = 'v4.0.0-alpha';

export function KindlingNavTitle() {
	return (
		<>
			<KindlingLogo />
			<span className="font-semibold tracking-wider text-xl mx-1">
				Kindling
			</span>
			<span className="ml-1 rounded-full border border-fd-border px-2 py-0.5 font-mono text-xs text-fd-muted-foreground">
				{KINDLING_DOCS_VERSION_LABEL}
			</span>
		</>
	);
}
