import { asset } from '../lib/asset'

export const brand = {
  name: 'CRAVE',
  tagline: 'INDULGENCE, UNFILTERED.',
  territory: 'RIOT CANDY',
  logoLight: asset('brand/pack/logo-starter/CRAVE-primary-logo-starter.svg'),
  logoDark: asset('brand/pack/logo-starter/CRAVE-monochrome-starter.svg'),
  logoLockup: asset('brand/logo/CRAVE_Graffiti_Lockup.webp'),
  logoWordmark: asset('brand/logo/CRAVE_Graffiti_Wordmark.webp'),
  icon: asset('brand/logo/CRAVE_App_Icon_Concept.svg'),
  /* Generated website assets (refs used as art direction only) */
  mascotHero: asset('brand/mascot/generated/campaign-duo.webp'),
  mascotWaitlist: asset('brand/mascot/generated/waitlist.webp'),
  mascotMale: asset('brand/mascot/generated/him-portrait.webp'),
  mascotFemale: asset('brand/mascot/generated/her-portrait.webp'),
  mascotDuo: asset('brand/mascot/generated/campaign-duo.webp'),
  mascotDuoMobile: asset('brand/mascot/generated/duo-mobile.webp'),
  mascotExpressions: asset('brand/mascot/generated/moods-board.webp'),
  mascotMoods: asset('brand/mascot/generated/moods-board.webp'),
  mascotDuoSun: asset('brand/mascot/generated/campaign-duo.webp'),
  mascotDuoLollipop: asset('brand/mascot/generated/gallery-poster.webp'),
  mascotDuoRebellious: asset('brand/mascot/generated/banner-boring.webp'),
  mascotDuoBanner: asset('brand/mascot/generated/banner-boring.webp'),
  mascotDuoBackdrop: asset('brand/mascot/generated/banner-club.webp'),
  mascotDuoFaces: asset('brand/mascot/generated/campaign-duo.webp'),
  mascotDuoGrunge: asset('brand/mascot/generated/gallery-grunge.webp'),
  mascotDuoSunburst: asset('brand/mascot/generated/gallery-grunge.webp'),
  mascotDuoPoster: asset('brand/mascot/generated/gallery-poster.webp'),
  mascotBannerBoring: asset('brand/mascot/generated/banner-boring.webp'),
  mascotBannerClub: asset('brand/mascot/generated/banner-club.webp'),
  mascotGalleryGrunge: asset('brand/mascot/generated/gallery-grunge.webp'),
  mascotGalleryPoster: asset('brand/mascot/generated/gallery-poster.webp'),
  pattern: asset('brand/pack/graphics/riot-dot-pattern.svg'),
  heroBackground: asset('brand/pack/hero/CRAVE-hero-background-abstract.webp'),
  packPattern: asset('brand/pack/graphics/riot-dot-pattern.svg'),
  stickerCrown: asset('brand/pack/graphics/acid-crown-doodle.svg'),
  stickerSplatter: asset('brand/pack/graphics/paint-splatter-pink.svg'),
  logoStarter: asset('brand/pack/logo-starter/CRAVE-primary-logo-starter.svg'),
}

export const navLinks = [
  { href: '#intro', label: 'Our story' },
  { href: '#universe', label: 'The range' },
  { href: '#campaign', label: 'Drops' },
  { href: '#community', label: 'Club' },
  { href: '#waitlist', label: 'Join' },
]

export const categories = [
  {
    id: 'lollipops',
    short: 'TANGY REBEL',
    name: 'Tangy Rebel',
    kind: 'Lollipops',
    blurb: 'Stick it. Lick it. Love it.',
    tease: 'A little stick. A lot of attitude.',
    cta: 'Show me the pops',
    accent: '#FF006E',
    accentAlt: '#D6FF00',
    textOn: '#F8FAFC',
    image: asset('brand/packaging/generated/lollipops.webp'),
    pack: asset('brand/packaging/generated/lollipops.webp'),
    packSvg: asset('brand/pack/packaging/CRAVE-lollipops-front-concept.svg'),
    lines: [
      'Tongue first.',
      'No need to rush, baby.',
      'Keep it between your lips.',
      'A little twist never hurt.',
      'One stick. Endless attitude.',
    ],
  },
  {
    id: 'gummies',
    short: 'SOUR CHAOS',
    name: 'Sour Chaos',
    kind: 'Gummies',
    blurb: 'Chew on something interesting.',
    tease: 'Soft, squishy and absolutely not boring.',
    cta: 'Get chewy',
    accent: '#9700FF',
    accentAlt: '#00DDEB',
    textOn: '#F8FAFC',
    image: asset('brand/packaging/generated/gummies.webp'),
    pack: asset('brand/packaging/generated/gummies.webp'),
    packSvg: asset('brand/pack/packaging/CRAVE-gummies-front-concept.svg'),
    lines: [
      'Chew on me.',
      "It's getting sticky.",
      'Soft spot? We found it.',
      'Good things take a little chewing.',
      'Squish happens, baby.',
    ],
  },
  {
    id: 'hard-candies',
    short: 'MINT MAYHEM',
    name: 'Mint Mayhem',
    kind: 'Hard Candies',
    blurb: 'Hard to get. Harder to resist.',
    tease: 'Make the moment last. No rush, sugar.',
    cta: "Drop it like it's hot",
    accent: '#00DDEB',
    accentAlt: '#9700FF',
    textOn: '#08080B',
    image: asset('brand/packaging/generated/hard-candies.webp'),
    pack: asset('brand/packaging/generated/hard-candies.webp'),
    packSvg: asset('brand/pack/packaging/CRAVE-hard-candies-front-concept.svg'),
    lines: [
      'Take it slow.',
      'Let it melt.',
      'A little hard to handle.',
      "Don't bite off more than you can chew.",
      'Make every second count.',
    ],
  },
  {
    id: 'chocolates',
    short: 'DARK CHAOS',
    name: 'Dark Chaos',
    kind: 'Chocolates',
    blurb: 'Welcome to the dark side, baby.',
    tease: 'A little rich. A little naughty. A whole lot of trouble.',
    cta: 'Take me to the dark side',
    accent: '#FF7B00',
    accentAlt: '#9700FF',
    textOn: '#08080B',
    image: asset('brand/packaging/generated/chocolates.webp'),
    pack: asset('brand/packaging/generated/chocolates.webp'),
    packSvg: asset('brand/pack/packaging/CRAVE-chocolates-front-concept.svg'),
    lines: [
      'Break me off a piece.',
      'Things are about to get melty.',
      'Dark. Rich. Unapologetic.',
      'One bite. Zero regrets.',
      'Indulgence looks good on you.',
    ],
  },
]

export const voiceLines = [
  "WE'RE NOT THE SWEET, INNOCENT TYPE.",
  'WE LIKE ATTENTION.',
  'WE LIKE MAKING A SCENE.',
  'WE LIKE TURNING HEADS.',
  "WE DON'T ASK FOR PERMISSION.",
]

export const attitudes = [
  {
    name: 'The Tease',
    line: "You know exactly what you're doing.",
    accent: '#FF006E',
  },
  {
    name: 'The Rebel',
    line: 'Rules? Never heard of them.',
    accent: '#D6FF00',
  },
  {
    name: 'The Chill',
    line: 'Too cool to care. Too sweet to ignore.',
    accent: '#FF7B00',
  },
  {
    name: 'The Wink',
    line: 'Says less. Means more.',
    accent: '#9700FF',
  },
]

export const marqueeRiot = [
  'BITE ME, BABY.',
  'SUCK IT UP.',
  'TONGUE FIRST. QUESTIONS LATER.',
  'GOOD GIRLS LIKE CANDY TOO.',
  'WE LIKE IT ROUGH. ON THE TASTE BUDS.',
  'TOO HOT TO HANDLE. TOO SWEET TO IGNORE.',
]

export const marqueeAcid = [
  "DON'T PLAY WITH OUR HEART. PLAY WITH YOUR FOOD.",
  'A LITTLE TASTE NEVER HURT.',
  'KEEP YOUR HANDS BUSY.',
  'BAD IDEAS. SWEET CONSEQUENCES.',
  'LESS TALK. MORE LICKING.',
  'COME HERE, SUGAR.',
]

export const marqueeChaos = [
  'SWEET TOOTH. DIRTY MIND.',
  'YOU LOOK LIKE YOU NEED A TREAT.',
  'GET YOUR MOUTH AROUND THIS.',
  'NO STRINGS. JUST LOLLIPOPS.',
  "WE'RE NOT YOUR INNOCENT LITTLE CANDY.",
  'TAKE A BITE. MAKE BAD DECISIONS.',
  'YOUR EX COULD NEVER TASTE THIS GOOD.',
  "DON'T BE SHY. WE DON'T BITE. THE CANDY MIGHT.",
]

export const manifestoLines = [
  'We like attention.',
  'We like making a scene.',
  'We like turning heads.',
  'We like a little drama.',
  'We like things colourful, playful and ridiculously hard to resist.',
  "We don't ask for permission to have fun.",
  "We don't apologise for having a personality.",
  "And we certainly don't believe in behaving all the time.",
]

export const brandStatements = [
  "WE DON'T DO BASIC.",
  "WE DON'T DO BORING.",
  "WE DON'T DO BEHAVING.",
  'WE DO CRAVE.',
]
