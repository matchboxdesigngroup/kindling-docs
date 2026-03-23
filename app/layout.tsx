import { SiteFooter } from '@/components/site-footer';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
});

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={lexend.className} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<RootProvider>
					<div className="flex min-h-screen flex-1 flex-col">
						<div className="flex min-h-0 min-w-0 flex-1 flex-col">
							{children}
						</div>
						<SiteFooter />
					</div>
				</RootProvider>
			</body>
		</html>
	);
}
