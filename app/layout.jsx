import Link from "next/link";
import Image from "next/image";
import "./globals.css";
const Links = [
  {
    label: "Home",
    route: "/",
  },

  {
    label: "Intinerario",
    route: "/ejemplo",
  },
  {
    label: "Por què Elegir GM!",
    route: "/post",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <nav>
            <ul>
              {Links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
