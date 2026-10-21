import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-audio',
    name: 'Audio',
    slug: 'audio',
    count: 14,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=85',
    subtitle: 'Studio fidelity & adaptive noise isolation',
    tag: 'Flagship Sound'
  },
  {
    id: 'cat-smartwatches',
    name: 'Smartwatches',
    slug: 'smartwatches',
    count: 8,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=85',
    subtitle: 'Ultra-AMOLED biometric monitors',
    tag: 'Precision Craft'
  },
  {
    id: 'cat-phones',
    name: 'Phones',
    slug: 'phones',
    count: 6,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85',
    subtitle: 'Titanium chassis & computational optics',
    tag: 'Next Genesis'
  },
  {
    id: 'cat-accessories',
    name: 'Accessories',
    slug: 'accessories',
    count: 19,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=800&q=85',
    subtitle: 'GaN chargers & magnetic braided cables',
    tag: 'High Velocity'
  },
  {
    id: 'cat-gaming',
    name: 'Gaming',
    slug: 'gaming',
    count: 7,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=85',
    subtitle: 'Hall-effect triggers & sub-1ms polling',
    tag: 'Apex Control'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-headphones-apex',
    name: 'ODDA-1 Apex Studio Headphones',
    category: 'Audio',
    tagline: 'Precision 40mm Beryllium Drivers with 48dB Hybrid ANC',
    price: 389,
    originalPrice: 449,
    badge: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Forged from aircraft-grade aluminum and wrapped in breathable botanical memory foam, the ODDA-1 Apex delivers uncompromised reference-grade audio. Featuring our bespoke 40mm Beryllium diaphragms and real-time environment adaptive acoustic modeling.',
    specs: {
      'Acoustic Architecture': 'Custom 40mm Beryllium Diaphragm',
      'Noise Cancellation': 'Triple-Mic Hybrid ANC (-48dB)',
      'Battery Performance': '62 Hours (ANC On) / 78 Hours (ANC Off)',
      'Connectivity': 'Bluetooth 5.4 LE Audio & Low-latency 2.4GHz',
      'Weight': '268g Titanium-reinforced',
      'Fast Charge': '15 min charge = 10 hours playback'
    },
    features: [
      'Lossless LDAC & aptX Adaptive streaming codec support',
      'Dual-cavity acoustic chamber tuned for expansive 3D soundstage',
      'Rotary haptic crown with tactile bronze accent',
      'Ergonomic memory foam cushions with passive thermo-regulation'
    ],
    inStock: true,
    color: 'Forest Obsidian',
    availableColors: [
      { name: 'Forest Obsidian', hex: '#0a1d14' },
      { name: 'Warm Bronze', hex: '#b38b57' },
      { name: 'Matte Onyx', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'prod-earbuds-pod',
    name: 'Vortex Pods True Wireless Earbuds',
    category: 'Audio',
    tagline: 'Spatial Audio with Ceramic Transducers & Wireless Qi Case',
    price: 179,
    originalPrice: 219,
    badge: 'NEW',
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Compact acoustic supremacy. Vortex Pods feature high-rigidity ceramic drivers tuned for crystalline highs and thunderous sub-bass. The bespoke charging cradle boasts a luminous lime battery ring and rapid Qi wireless induction charging.',
    specs: {
      'Driver Type': '11mm Ceramic-composite dynamic drivers',
      'Battery Life': '9h earbuds / 36h total with charging case',
      'Water Resistance': 'IPX7 certified sweat & storm proof',
      'Microphones': '6-mic array with AI beamforming noise isolation',
      'Charging': 'USB-C fast charge + Qi Wireless induction'
    },
    features: [
      'Zero-latency gaming mode with sub-35ms transmission',
      'True multipoint seamless switching between phone and laptop',
      'Squeeze-gesture responsive stems with haptic feedback',
      'Antimicrobial silicone tips in 4 tailored ear sizes'
    ],
    inStock: true,
    color: 'Ceramic Ivory',
    availableColors: [
      { name: 'Ceramic Ivory', hex: '#f0f2f0' },
      { name: 'Midnight Emerald', hex: '#0d2218' },
      { name: 'Neon Lime', hex: '#b8e938' }
    ]
  },
  {
    id: 'prod-smartwatch-chrono',
    name: 'Chrono-Matrix AMOLED Smartwatch',
    category: 'Smartwatches',
    tagline: 'Titanium Grade 5 Case with Sapphire Glass & ECG Biosensor',
    price: 329,
    originalPrice: 380,
    badge: 'FEATURED',
    rating: 4.9,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A monument to micro-engineering on your wrist. Featuring a 1.43-inch 60Hz LTPO display capable of 2,000 nits peak brightness, housed inside a sandblasted Grade-5 titanium bezel. Medical-grade biosensors track stress, HRV, and sleep architecture.',
    specs: {
      'Display': '1.43" LTPO AMOLED 466x466, 2000 nits, Always-On',
      'Bezel Material': 'Sandblasted Grade 5 Titanium + Sapphire Crystal',
      'Water Depth': '10 ATM (100 meters dive rating)',
      'Battery Duration': 'Up to 14 days standard usage',
      'Sensors': 'Optical heart rate, SpO2, ECG, skin temperature, barometer'
    },
    features: [
      'Bespoke ODDA minimalist watchfaces with dark green neon complications',
      'Dual-frequency GPS (L1+L5) with offline topographic map support',
      'NFC contactless payments and cryptographic car digital key support',
      'Fluorocarbon waterproof sports strap with bronze deployment clasp'
    ],
    inStock: true,
    color: 'Titanium Smoke',
    availableColors: [
      { name: 'Titanium Smoke', hex: '#2b302c' },
      { name: 'Deep Bronze', hex: '#b38b57' },
      { name: 'Stealth Black', hex: '#111311' }
    ]
  },
  {
    id: 'prod-phone-infinity',
    name: 'ODDA Horizon 1 Flagship Smartphone',
    category: 'Phones',
    tagline: 'Quad-Curved 144Hz OLED with Hasselblad-Calibrated Optics',
    price: 999,
    originalPrice: 1150,
    badge: 'LIMITED',
    rating: 5.0,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Formed from frosted dark emerald glass and aerospace titanium alloys, the Horizon 1 blends timeless industrial symmetry with blistering performance. Features our proprietary computational low-light sensor and a zero-compromise ceramic vapor cooling engine.',
    specs: {
      'Processor': 'Octa-Core 3.4GHz 3nm HyperThread Architecture',
      'Display': '6.8" Quad-Curved OLED, 1-144Hz LTPO, 2800 nits',
      'Camera Array': '50MP 1-inch sensor + 50MP Ultra-wide + 64MP 5x Periscope',
      'Battery & Charging': '5,400mAh, 120W HyperCharge (0-100% in 18 min)',
      'OS Experience': 'ODDA Clean OS — Zero bloatware, 5 years security'
    },
    features: [
      'Frosted matte finish with oleophobic nano-coating resistant to fingerprints',
      'Dedicated tactile hardware action slider with customized vibration modes',
      'Ultrasonic under-screen fingerprint sensor with instant wet-finger recognition',
      'Symmetric stereo acoustic chambers tuned by world-renowned audio engineers'
    ],
    inStock: true,
    color: 'Forest Emerald',
    availableColors: [
      { name: 'Forest Emerald', hex: '#0f291e' },
      { name: 'Bronze Metallic', hex: '#b38b57' },
      { name: 'Dark Slate', hex: '#1f2421' }
    ]
  },
  {
    id: 'prod-powerbank-flux',
    name: 'MagFlux 140W GaN Portable Power Station',
    category: 'Accessories',
    tagline: '27,000mAh Laptop Power Bank with Smart OLED Telemetry',
    price: 139,
    originalPrice: 169,
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=1000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'The ultimate power companion. Delivers a continuous 140W Power Delivery 3.1 output to charge MacBook Pros, cameras, and phones simultaneously. The high-contrast lime OLED display provides real-time voltage, current, temperature, and battery health readouts.',
    specs: {
      'Capacity': '27,600mAh / 99.8Wh (TSA Carry-On Approved)',
      'Max Output': '140W single port / 210W total combined',
      'Ports': '2x USB-C PD 3.1, 1x USB-A QC 4.0, MagSafe Qi pad',
      'Telemetry': 'Real-time color OLED display showing Watts & Time remaining',
      'Enclosure': 'Anodized unibody aerospace aluminum alloy'
    },
    features: [
      'Ultra-dense EV-grade 21700 battery cells with 1,000+ full cycle lifespan',
      'Thermal-Shield active monitoring cycles 200 times per second to prevent heating',
      'Pass-through charging capability: charge power bank and devices simultaneously',
      'Includes 240W braided kevlar USB-C cable with neon silicone tie'
    ],
    inStock: true,
    color: 'Anodized Matte Green',
    availableColors: [
      { name: 'Anodized Matte Green', hex: '#163124' },
      { name: 'Space Gray', hex: '#26292b' }
    ]
  },
  {
    id: 'prod-gaming-controller',
    name: 'Vanguard Pro Wireless Hall-Effect Controller',
    category: 'Gaming',
    tagline: 'Zero-Drift Magnetic Hall Sticks with 1000Hz Polling Rate',
    price: 149,
    originalPrice: 179,
    badge: 'NEW',
    rating: 4.9,
    reviewsCount: 53,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Engineered for tournament champions and demanding gamers. Incorporates electromagnetic Hall-Effect joysticks and triggers guaranteed for zero deadzone stick drift. Features 4 remappable rear mechanical paddles and customizable RGB neon lighting accents.',
    specs: {
      'Sticks & Triggers': 'Hall-Effect Electromagnetic Non-Contact sensors',
      'Polling Rate': '1,000Hz wired / 1,000Hz 2.4GHz wireless dongle',
      'Vibration': 'Dual asymmetric HD linear resonant haptic actuators',
      'Switches': 'Micro-switch mechanical D-pad and face buttons (0.3mm travel)',
      'Battery Life': '42 hours continuous wireless gaming'
    },
    features: [
      'Interchangeable convex and concave magnetic thumbsticks',
      'Quick-trigger stop toggles for lightning-fast hair-trigger actuation',
      'Ergonomic micro-textured laser-etched silicone grip panels',
      'Multi-platform compatibility: PC, Mac, Switch, iOS, Android'
    ],
    inStock: true,
    color: 'Tactical Moss & Lime',
    availableColors: [
      { name: 'Tactical Moss & Lime', hex: '#172f22' },
      { name: 'Obsidian Black', hex: '#141414' }
    ]
  }
];

export const TRUST_INDICATORS = [
  {
    id: 'trust-1',
    title: 'Premium Quality',
    subtitle: 'Aerospace materials & acoustic precision',
    iconName: 'ShieldCheck'
  },
  {
    id: 'trust-2',
    title: '1 Year Warranty',
    subtitle: 'Comprehensive replacement coverage',
    iconName: 'Award'
  },
  {
    id: 'trust-3',
    title: 'Free Shipping $50+',
    subtitle: 'Complimentary expedited global delivery',
    iconName: 'Truck'
  },
  {
    id: 'trust-4',
    title: 'Secure Payments',
    subtitle: '256-bit encrypted checkout',
    iconName: 'Lock'
  }
];

export const BRAND_PRINCIPLES = [
  {
    number: '01',
    title: 'Designed with Purpose',
    description: 'We reject unnecessary embellishments. Every curve, tactile dial, and chamfered edge exists to serve a genuine human interaction.'
  },
  {
    number: '02',
    title: 'Built for Everyday Life',
    description: 'From sandblasted titanium to IPX-rated enclosures, our hardware is torture-tested to withstand real-world adventures without faltering.'
  },
  {
    number: '03',
    title: 'Made to Move You Forward',
    description: 'High-efficiency battery architecture and lossless wireless protocols ensure your focus stays entirely in the moment.'
  }
];
