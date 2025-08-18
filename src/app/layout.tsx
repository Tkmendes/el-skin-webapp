import type { Metadata } from 'next';
import { Providers } from './providers';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'AL Skin',
  description: 'AL Skin - Skincare Products',
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Providers>{children}</Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}