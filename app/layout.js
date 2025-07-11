import { Outfit, Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit'
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-ovo'
});

export const metadata = {
  title: "Obchodné priestory | Nové Mesto nad Váhom",
  description: "Ponúkame na prenájom lukratívne obchodné priestory v centre Nového Mesta nad Váhom na ul. Hurbanova v blízkosti parkoviska pre návštevníkov. Budova je dvojpodlažná a disponuje dvoma zásobovacími vstupmi po stranách s parkovacou plochou.",
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} font-Outfit antialiased 
      leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

