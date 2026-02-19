import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TeleBoost - Portfolio OS',
  description: 'A unique portfolio website that looks and feels like a desktop operating system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

