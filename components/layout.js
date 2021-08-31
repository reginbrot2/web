import Head from "next/head"
import Link from "next/link"
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Mail as MailIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
} from "@material-ui/icons"
import { useState } from "react"

export const prefix = "/web"

export const BaseLayout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{props.active ? `${props.active} - ` : ""}Reginbrot</title>
        <meta name="description" content="Die Bio-Bäckerei in Konstanz." />
      </Head>

      <Header active={props.active} />

      <main className="flex-auto container mx-auto p-4 my-4">
        {props.children}
      </main>

      <Footer />
    </div>
  )
}

export const Header = ({ active }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)

  return (
    <header>
      <nav className="container w-full flex justify-between mx-auto p-4 text-shadow-white">
        <div>
          <Link href="/">
            <a title="Zur Starseite">
              <img
                src={`${prefix}/reginbrot_100.png`}
                height="80"
                width="198"
                alt="Reginbrot Logo"
              />
              <span className="sr-only">Zur Startseite</span>
            </a>
          </Link>
        </div>
        <div className="flex">
          <button
            className={menuExpanded ? "hidden" : "md:hidden"}
            onClick={() => {
              setMenuExpanded(true)
            }}
          >
            <MenuIcon fontSize="large" />
            <span className="sr-only">Menü aufklappen</span>
          </button>
          <button
            className={menuExpanded ? "block z-50" : "hidden"}
            onClick={() => {
              setMenuExpanded(false)
            }}
          >
            <CloseIcon fontSize="large" />
            <span className="sr-only">Menü schliessen</span>
          </button>

          <Navigation
            active={active}
            classes={
              menuExpanded
                ? "absolute z-40 bg-white top-0 left-0 w-full h-full flex flex-col text-center pt-32"
                : "hidden md:flex"
            }
          />
        </div>
      </nav>
    </header>
  )
}

export const Navigation = ({ active, classes }) => {
  return (
    <ul className={`gap-10 my-auto ${classes ? classes : ""}`}>
      <MenuItem url={"/aktuelles"} title={"Aktuelles"} active={active} />
      <MenuItem url={"/brote"} title={"Brote"} active={active} />
    </ul>
  )
}

export const MenuItem = ({ title, url, active }) => {
  return (
    <li>
      <Link href={url}>
        <a
          className={`text-orange-dark py-2 liant text-3xl border-b border-transparent ${
            active === title
              ? "border-orange-dark"
              : "hover:border-orange-dark focus:border-orange-dark"
          }`}
          title={title}
        >
          {title}
        </a>
      </Link>
    </li>
  )
}

export const Footer = () => {
  return (
    <footer className="mt-16 bg-orange-dark">
      <div className="footer-border"></div>
      <div className="my-8 text-2xl liant flex justify-around mx-auto flex-col text-white gap-4">
        <div className="text-bold text-center flex flex-col">
          <div className="flex mx-auto gap-4">
            <div itemProp="openingHours" content="Mo-Fr 09:00-18:30">
              Mo-Fr: 9-18:30 Uhr
            </div>
            <div itemProp="openingHours" content="Sa 09:00-15:00">
              Sa: 9-15 Uhr
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col md:flex-row flex-wrap md:gap-8 mx-auto">
          <a href="https://goo.gl/maps/QR6yLgHXneYYmh8x6">
            <span itemProp="address" content="Münzgasse 16, 78462 Konstanz">
              <LocationOnIcon /> Münzgasse&nbsp;16, 78462&nbsp;Konstanz
            </span>
          </a>
          <a href="tel:+49753123963">
            <span itemProp="telephone" content="+49753123963"></span>
            <PhoneIcon /> 07531 / 23963
          </a>
          <a href="mailto:info@reginbrot.de">
            <MailIcon /> info@reginbrot.de
          </a>
        </div>
        <Link href="/kontakt">
          <a className="text-center" title="Kontakt und Impressum">
            Kontakt und Impressum
          </a>
        </Link>
      </div>
    </footer>
  )
}
