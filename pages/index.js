import { BaseLayout, prefix } from "../components/layout"
import { ContentContainer } from "../components/content"

// import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout>
      <h1 className="sr-only">Reginbrot</h1>

      <div className="absolute top-0 left-0 right-0 h-screen -z-1 overflow-hidden">
        <video
          className="min-w-full min-h-full object-cover"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={`${prefix}/reginbrot.webm`} type="video/webm" />
          <source src={`${prefix}/reginbrot.mp4`} type="video/mp4" />
        </video>
      </div>

      <ContentContainer classes={"rounded-lg p-8 bg-white"}>
        <h2>Geöffnet fast wie immer</h2>
        <p>
          <strong>
            Mo.-Fr. 9 - <span className="text-orange-dark">18:30</span> Uhr, Sa.
            9 - <span className="text-orange-dark">15</span> Uhr
          </strong>
        </p>
        <p>
          Unsere Öffnungszeiten werden an dieser Stelle immer aktuell angezeigt.
        </p>
      </ContentContainer>
    </BaseLayout>
  )
}
