import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function PhotographyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The original site uses proxima-nova (Adobe Fonts, licensed via Squarespace);
  // Montserrat stands in when it is not available on the visitor's system.
  return (
    <div
      style={{
        fontFamily: `proxima-nova, ${montserrat.style.fontFamily}, Helvetica, Arial, sans-serif`,
      }}
    >
      {children}
    </div>
  );
}
