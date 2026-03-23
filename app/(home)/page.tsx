import Link from 'next/link';

export default function HomePage() {
	return (
		<div className="flex flex-1 flex-col justify-center px-4 py-16 md:px-6 md:py-24">
			<div className="mx-auto max-w-2xl text-center">
				<h1 className="text-3xl font-semibold text-fd-foreground md:text-4xl">
					Kindling Docs
				</h1>
				<p className="mt-4 text-base leading-relaxed text-fd-muted-foreground md:text-lg">
					The Kindling Docs encompasses the tools and best practices{' '}
					<a
						className="text-fd-primary hover:underline"
						href="https://matchboxdesigngroup.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Matchbox
					</a>{' '}
					uses to build client websites.
				</p>
				<div className="mt-8">
					<Link
						href="/docs"
						className="inline-flex items-center justify-center tracking-wider rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:opacity-90"
					>
						Browse documentation
					</Link>
				</div>
			</div>
		</div>
	);
}
