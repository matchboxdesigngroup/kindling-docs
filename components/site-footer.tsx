export function SiteFooter() {
	const year = new Date().getFullYear();
	return (
		<footer
			className="border-t border-fd-border py-4 text-center text-sm text-fd-muted-foreground"
			role="contentinfo"
		>
			{`Copyright © ${year} Matchbox`}
		</footer>
	);
}
