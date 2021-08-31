import { BaseLayout } from "../components/layout"
import { ContentContainer } from "../components/content"

// import Image from "next/image";

export default function Page() {
  return (
    <BaseLayout active={"Kontakt"}>
      <ContentContainer>
        <h1>Kontakt und Impressum</h1>
        <h2>Kontakt</h2>
        <p>
          Email an Reginbert Keller{" "}
          <a href="mailto:info@reginbrot.de">info@reginbrot.de</a>
        </p>
        <h2>Verantwortliche</h2>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                Reginbrot,
                <br />
                Reginbert Keller
              </td>
            </tr>
            <tr>
              <td>Anschrift</td>
              <td>
                Münzgasse 16
                <br />
                D-78462 Konstanz
              </td>
            </tr>
            <tr>
              <td>Telefon</td>
              <td>0 75 31/2 39 63</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:info@reginbrot.de">info@reginbrot.de</a>
              </td>
            </tr>
            <tr>
              <td>Vertretungs&shy;berechtigte</td>
              <td>
                Reginbert Keller
                <br />
                Hiltrud Schmid
              </td>
            </tr>
            <tr>
              <td>Anschrift</td>
              <td>
                Münzgasse 16
                <br />
                D-78462 Konstanz
              </td>
            </tr>
            <tr>
              <td>Telefon</td>
              <td>0 75 31/2 39 63</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:info@reginbrot.de">info@reginbrot.de</a>
              </td>
            </tr>
            <tr>
              <td>Ust. - Id Nr.</td>
              <td>DE 142 275 312</td>
            </tr>
          </tbody>
        </table>
        <h2>Haftungshinweis</h2>
        <p>
          Haftungshinweis Trotz sorgfältiger inhaltlicher Kontrolle übernehmen
          wir keine Haftung für die Inhalte externer Links. Für den Inhalt der
          verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <h2>Datenschutzhinweis</h2>
        <p>
          Zu keiner Zeit werden personbezogene Daten erhoben oder gespeichert.
          Es findet keine Weitergabe an Dritte statt und es werden keinerlei
          Cookies gesetzt.
        </p>
        <h2>Gestaltung</h2>
        <p>Videos von Merit Fakler.</p>
      </ContentContainer>
    </BaseLayout>
  )
}
