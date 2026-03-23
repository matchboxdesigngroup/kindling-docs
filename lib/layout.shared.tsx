import { KindlingNavTitle } from '@/components/kindling-nav-title';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/** Repo used for doc-page “view on GitHub” blob URLs (see `app/docs/[[...slug]]/page.tsx`), not the nav icon. */
export const gitConfig = {
	user: 'fuma-nama',
	repo: 'fumadocs',
	branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: <KindlingNavTitle />,
		},
		githubUrl: 'https://github.com/matchboxdesigngroup/kindling/',
	};
}
