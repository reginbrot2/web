import { BaseLayout } from "../components/layout"
import { ContentContainer } from "../components/content"
// import Image from "next/image";

export default function Page() {
  return (
    <BaseLayout active={"Aktuelles"}>
      <ContentContainer>
        <h1>Neuigkeiten und Stellenangebote</h1>
        <article>
          <h2>Lebensmittelhandwerker (d/w/m)</h2>
          <p>Wir möchten demnächst eine Stelle in der Produktion besetzen.</p>
          <p>Was Sie mitbringen sollten:</p>
          <ul>
            <li>
              Deutschkenntnisse auf C1-Level oder höher in Sprache und Schrift
            </li>
            <li>
              abgeschlossene Ausbildung im Lebensmittelhandwerk (Bäckerei,
              Konditorei, Metzgerei o.a.)
            </li>
          </ul>
          <p>Was wir bieten:</p>
          <ul>
            <li>übertarifliche Bezahlung</li>
            <li>einen Arbeitsplatz in der Konstanzer Innenstadt</li>
            <li>frühester Arbeitsbeginn 4:00 Uhr</li>
          </ul>
        </article>
        <article>
          <h2>Das Bürle im Akzent</h2>
          <a href="/buerle_im_akzent.gif">
            <img className="max-h-96" src="/buerle_im_akzent.gif" />
          </a>
        </article>
        <article>
          <h2>Unser aktuelles Öko-Zertifikat</h2>
          <a href="/oeko_zert.jpeg">
            <img src="/oeko_zert.jpeg" />
          </a>
        </article>
      </ContentContainer>
    </BaseLayout>
  )
}
