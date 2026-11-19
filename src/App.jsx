import { AgeGate } from './components/AgeGate'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MarqueeStrip } from './components/MarqueeStrip'
import { BrandIntro } from './components/BrandIntro'
import { Temptation } from './components/Temptation'
import { ProductUniverse } from './components/ProductUniverse'
import { ProductDiscover } from './components/ProductDiscover'
import { FlavourPlayground } from './components/FlavourPlayground'
import { Ritual } from './components/Ritual'
import { Attitude } from './components/Attitude'
import { Campaign } from './components/Campaign'
import { Social } from './components/Social'
import { BrandStatement } from './components/BrandStatement'
import { Waitlist } from './components/Waitlist'
import { Footer } from './components/Footer'
import { PlayfulCursor } from './components/PlayfulCursor'
import { RiotAtmosphere } from './components/RiotAtmosphere'
import { marqueeAcid, marqueeChaos, marqueeRiot } from './data/site'

export default function App() {
  return (
    <AgeGate>
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-4 focus:border-dark focus:bg-acid focus:px-4 focus:py-2 focus:font-impact focus:text-dark"
      >
        Skip to content
      </a>
      <RiotAtmosphere />
      <PlayfulCursor />
      <Header />
      <main className="relative z-10 max-w-[100vw] overflow-x-clip">
        <Hero />
        <MarqueeStrip items={marqueeRiot} speed="fast" />
        <MarqueeStrip tone="acid" items={marqueeAcid} reverse speed="fast" />
        <BrandIntro />
        <Temptation />
        <MarqueeStrip tone="rebel" items={marqueeChaos} speed="fast" />
        <MarqueeStrip tone="chaos" items={marqueeRiot} reverse speed="fast" />
        <ProductUniverse />
        <ProductDiscover />
        <FlavourPlayground />
        <Ritual />
        <Attitude />
        <Campaign />
        <MarqueeStrip tone="acid" items={marqueeAcid} reverse />
        <MarqueeStrip items={marqueeChaos} speed="fast" />
        <Social />
        <BrandStatement />
        <Waitlist />
        <Footer />
      </main>
    </AgeGate>
  )
}
