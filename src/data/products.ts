export interface Product {
  id: string;
  name: string;
  productNo: string;
  category: 'street-light' | 'floodlight' | 'high-bay' | 'hybrid';
  categoryLabel: string;
  tagline: string;
  powerRange: string;
  voltage: string;
  chips: string;
  lumens: string;
  battery: string;
  solarPanel: string;
  cct: string;
  ipRating: string;
  poleHeight: string;
  chargingTime: string;
  workingTime: string;
  material: string;
  description: string;
  features: string[];
  recommendedUses: string[];
  image: string;
  realImage: string;
  isPopular?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'wa-series',
    name: 'Amaoso WA LED Solar Street Light',
    productNo: 'MSYTHLD-WA',
    category: 'street-light',
    categoryLabel: 'Solar Street Lights',
    tagline: 'Class A Integrated Monocrystalline All-In-One Solar Street Light',
    powerRange: '100W / 120W / 150W / 180W',
    voltage: '3.2V / 6V / 18V',
    chips: 'Bridgelux 3030 / 5050',
    lumens: '200 - 220 lm/W High Lumen Output',
    battery: 'Class A Brand New LiFePO4 Battery (2000 Cycles, 8-10 Years Lifespan)',
    solarPanel: 'Class A High-Efficiency Monocrystalline Solar Panel',
    cct: '3000K - 6500K Pure White / Daylight',
    ipRating: 'IP65 Waterproof',
    poleHeight: '6m - 12m',
    chargingTime: '5 - 6 Hours Full Sunshine',
    workingTime: '12h Bright, 4-5 Nights Rainy Backup Reserve',
    material: 'Aviation Die-Cast Aluminum with SRNE Smart Controller',
    description: 'Equipped with Bridgelux 3030 LED chips delivering 200-220 lm/W. Class A LiFePO4 battery pack with 2000 cycles and multi-protection against overcharge, overdischarge, and short circuits. Dual timer dimming mode and radar sensor mode.',
    features: [
      'Bridgelux 3030 / 5050 high lumen output up to 200-220 lm/W',
      'Class A brand new LiFePO4 battery, 2000-time cycles, lifespan up to 8-10 years',
      'IP65 SRNE smart controller for intelligent lighting management',
      'Multi-protection against overcharge, overdischarge, and short circuit',
      'Timer dimming mode or sensor mode: 12h bright with 4-5 nights backup',
      'Class A high efficiency monocrystalline solar panel'
    ],
    recommendedUses: ['Municipal Highways', 'Residential Estates', 'Federal Trunk Roads', 'University Campuses'],
    image: '/images/wa-series.png',
    realImage: '/images/wa-series-real.jpg',
    isPopular: true
  },
  {
    id: 'wb-series',
    name: 'Amaoso WB LED Solar Street Light',
    productNo: 'MSYTHLD-WB',
    category: 'street-light',
    categoryLabel: 'Solar Street Lights',
    tagline: 'Heavy-Duty Aerodynamic Roadway Luminaire',
    powerRange: '150W / 180W / 200W / 250W',
    voltage: '3.2V / 6V / 18V',
    chips: 'Bridgelux 3030 / 5050',
    lumens: '200 - 220 lm/W',
    battery: 'Class A Brand New LiFePO4 Battery (2000 Cycles, 8-10 Years Lifespan)',
    solarPanel: 'Class A Monocrystalline Solar Panel',
    cct: '4000K - 6000K',
    ipRating: 'IP65 Waterproof',
    poleHeight: '8m - 14m',
    chargingTime: '5 - 7 Hours',
    workingTime: '12h Bright with 4-5 Nights Continuous Reserve',
    material: 'Heavy-Duty Pressure Die-Cast Aluminum (ADC12)',
    description: 'Engineered for wide multi-lane highways and commercial corridors with high-velocity wind resistance and superior thermal convective cooling fins.',
    features: [
      'Bridgelux 3030/5050 high lumen output up to 200-220 lm/W',
      'Class A brand new LiFePO4 battery, 2000-time cycles, lifespan up to 8-10 years',
      'IP65 SRNE smart controller with multi-stage dimming',
      'Multi-protection against overcharge, overdischarge, short circuit',
      '12h bright with 4-5 nights backup reserve',
      'Class A high efficiency monocrystalline solar panel'
    ],
    recommendedUses: ['Expressways', 'Port Logistics Roads', 'Commercial Avenues', 'Airport Access Roads'],
    image: '/images/wb-series.png',
    realImage: '/images/wb-series-real.jpg',
    isPopular: true
  },
  {
    id: 'wk-series',
    name: 'Amaoso WK LED Solar Street Light',
    productNo: 'MSYTHLD-WK',
    category: 'street-light',
    categoryLabel: 'Solar Street Lights',
    tagline: 'Modern Architectural Estate & Community Solar Luminaire',
    powerRange: '60W / 80W / 150W / 200W / 250W',
    voltage: '3.2V / 12.8V',
    chips: 'Bridgelux 3030 / 5050',
    lumens: '200 - 220 lm/W',
    battery: 'Class A LiFePO4 3.2V / 12.8V Battery',
    solarPanel: 'High-Efficiency Monocrystalline Silicon Panel',
    cct: '3000K Warm / 6000K Daylight',
    ipRating: 'IP65 Waterproof',
    poleHeight: '5m - 9m',
    chargingTime: '5 Hours',
    workingTime: '12h Bright, 4-5 Nights Backup',
    material: 'Die-cast Aluminum Housing with Optical UV-proof Lens',
    description: 'Sleek, low-profile solar street light for gated residential estates, educational institutions, and urban streets requiring premium architectural aesthetics.',
    features: [
      'Bridgelux 3030/5050 chips with 200-220 lm/W efficiency',
      'Class A LiFePO4 battery with 2000-cycle lifespan (8-10 years)',
      'Intelligent SRNE IP65 controller with radar detection',
      '4-5 nights rainy day reserve autonomy',
      'High conversion monocrystalline solar panel'
    ],
    recommendedUses: ['Gated Communities', 'Hotels & Resorts', 'Parking Lots', 'Estate Roads'],
    image: '/images/wk-series.png',
    realImage: '/images/wk-series-real.jpg',
    isPopular: true
  },
  {
    id: 'wg-series',
    name: 'Amaoso WG LED Solar Street Light',
    productNo: 'MSYTHLD-WG',
    category: 'street-light',
    categoryLabel: 'Solar Street Lights',
    tagline: 'High-Lumen Highway & Municipal Road Luminaire',
    powerRange: '80W / 150W / 200W',
    voltage: '3.2V',
    chips: 'Bridgelux 3030 / 5050',
    lumens: '200 - 220 lm/W',
    battery: 'Class A Brand New LiFePO4 Battery',
    solarPanel: 'Class A High Efficiency Monocrystalline Solar Panel',
    cct: '4000K / 5700K',
    ipRating: 'IP65 Waterproof',
    poleHeight: '8m - 14m',
    chargingTime: '4 - 6 Hours',
    workingTime: '12h Bright with 4-5 Nights Backup',
    material: 'Aviation Die-Cast Aluminum Alloy',
    description: 'Engineered specifically for public works and federal road electrification tenders with robust ingress protection and oversized solar charging capacity.',
    features: [
      'High lumen output up to 200-220 lm/W with Bridgelux chips',
      'Class A brand new LiFePO4 battery with 8-10 year operational life',
      'IP65 SRNE smart controller with overcharge and temperature safeguards',
      'Set in timer dimming mode or microwave radar sensor mode',
      'Class A monocrystalline solar panel'
    ],
    recommendedUses: ['Interstate Highways', 'Public Infrastructure', 'Industrial Corridors'],
    image: '/images/wg-series.png',
    realImage: '/images/wg-series-real.jpg'
  },
  {
    id: 'wd-series',
    name: 'Amaoso WD LED Solar Street Light',
    productNo: 'MSYTHLD-WD',
    category: 'street-light',
    categoryLabel: 'Solar Street Lights',
    tagline: 'Heavy Industrial 18V High-Voltage Solar Street Luminaire',
    powerRange: '200W / 250W / 300W',
    voltage: '18V High-Voltage System',
    chips: 'Bridgelux 3030 / 5050',
    lumens: '200 - 220 lm/W',
    battery: 'High-Capacity Class A LiFePO4 Battery Pack',
    solarPanel: 'High-Wattage Monocrystalline Panel',
    cct: '5000K - 6500K',
    ipRating: 'IP65 Waterproof',
    poleHeight: '8m - 12m',
    chargingTime: '5 Hours',
    workingTime: '12h Bright, 4-5 Nights Backup',
    material: 'Die-cast Aluminum Housing with Integrated Heat Dissipation',
    description: '18V high-voltage solar luminaire designed for deep transmission efficiency and commercial-scale infrastructure requiring continuous bright coverage.',
    features: [
      '18V high-voltage architectural efficiency',
      'Bridgelux 3030/5050 chips reaching 200-220 lm/W',
      'Class A brand new LiFePO4 battery (2000 cycles, 8-10 years)',
      'IP65 SRNE smart controller with intelligent dimming',
      '4-5 nights rainy day reserve autonomy'
    ],
    recommendedUses: ['Commercial Corridors', 'Industrial Facilities', 'Security Perimeters'],
    image: '/images/wd-series.png',
    realImage: '/images/wd-series-real.jpg'
  },
  {
    id: 'j-floodlight',
    name: 'Amaoso J LED Solar Floodlight',
    productNo: 'MSYTHLD-J',
    category: 'floodlight',
    categoryLabel: 'Commercial Floodlights',
    tagline: 'Solar-Powered Dusk-to-Dawn Commercial & Yard Floodlight',
    powerRange: '100W / 200W / 300W / 500W',
    voltage: '3.2V / 6.4V',
    chips: 'High-Efficiency SMD LED Array',
    lumens: '160 - 180 lm/W',
    battery: 'Class A LiFePO4 High Capacity Battery',
    solarPanel: 'Aluminum Framed Monocrystalline Solar Panel with 5m Cable',
    cct: '6500K Daylight',
    ipRating: 'IP66 Waterproof',
    poleHeight: 'Wall mounted / 4m - 10m Mast',
    chargingTime: '5 - 6 Hours',
    workingTime: '12 - 16 Hours (Dusk-to-Dawn Automatic)',
    material: 'Thickened Die-cast Aluminum + Tempered Glass',
    description: 'Solar-powered, no fuss. Set it up, forget about it, and it just works. Brighten up compounds, warehouses, gardens, and perimeter walls without utility electricity bills.',
    features: [
      'Separate high-efficiency solar panel with 5-meter heavy-gauge cable',
      'Dusk-to-dawn automatic light sensor + wireless remote control',
      'Class A LiFePO4 battery pack with multi-night backup reserve',
      '180-degree adjustable mounting bracket for wall, roof, or pole'
    ],
    recommendedUses: ['Factory Yards', 'Logistics Warehouses', 'Billboard Lighting', 'Compound Perimeter Security', 'Religious Centers'],
    image: '/images/j-floodlight.png',
    realImage: '/images/j-floodlight-real.png',
    isPopular: true
  },
  {
    id: 'ufo-light',
    name: 'Amaoso UFO LED Industrial High Bay Light',
    productNo: 'MSYTHLD-UFO',
    category: 'high-bay',
    categoryLabel: 'Industrial High Bays',
    tagline: 'Extreme-Efficiency Mining & Warehouse High-Bay Luminaire',
    powerRange: '100W / 150W / 200W / 240W',
    voltage: 'AC 100-277V Industrial Driver',
    chips: 'Philips / Bridgelux High-Lumen Chips',
    lumens: '190 - 200 lm/W',
    battery: 'AC Industrial MeanWell Isolated Driver',
    solarPanel: 'Grid Connected / Solar Hybrid Inverter Compatible',
    cct: '4000K / 5000K / 6500K',
    ipRating: 'IP65 Waterproof / IK10 Impact Rated',
    poleHeight: '6m - 18m Ceiling / Truss Suspension',
    chargingTime: 'Instant On',
    workingTime: 'Rated for 60,000h continuous operation @ 55°C ambient',
    material: 'Pure Die-Cast Aluminum Ring with Aerodynamic Convective Fins',
    description: 'Engineered for high-ceiling industrial facilities, manufacturing workshops, aircraft hangars, and processing plants. Built with hollow thermal chimney design.',
    features: [
      'Industrial isolated driver with 6kV surge protection',
      'Patented open-center convective thermal heat sink',
      '60° / 90° / 120° optical beam angle options',
      'Energy savings up to 70% compared to traditional metal-halide lamps'
    ],
    recommendedUses: ['Manufacturing Workshops', 'Distribution Warehouses', 'Sports Arenas', 'Processing Facilities'],
    image: '/images/ufo-light.png',
    realImage: '/images/ufo-light-real.jpg',
    isPopular: true
  },
  {
    id: 'hy-light',
    name: 'Amaoso HY LED Solar Light',
    productNo: 'MSYTHLD-HY',
    category: 'hybrid',
    categoryLabel: 'Solar Systems',
    tagline: 'Commercial Solar System with Dual-Power Hybrid Options',
    powerRange: '100W / 150W / 200W / 300W',
    voltage: 'Solar DC / Dual AC Backup Compatible',
    chips: 'Bridgelux 3030 High-Power LEDs',
    lumens: '180 lm/W',
    battery: 'LiFePO4 Internal Battery Storage',
    solarPanel: 'Monocrystalline Solar Generator',
    cct: '5000K - 6000K Crisp Daylight',
    ipRating: 'IP65 Rated',
    poleHeight: '6m - 10m',
    chargingTime: '5 Hours Sunlight',
    workingTime: 'All-Night Illumination with Multi-Day Backup',
    material: 'Die-cast Aircraft Aluminum Housing',
    description: 'Reliable commercial solar lighting system designed for uninterrupted operation, combining advanced battery storage with high conversion solar capture.',
    features: [
      'High-efficiency monocrystalline solar collection',
      'Long-life LiFePO4 battery storage with intelligent BMS',
      'Automatic optical dusk-to-dawn intelligent lighting control',
      'Corrosion-resistant powder coating for tropical environments'
    ],
    recommendedUses: ['Estate Security', 'Commercial Compounds', 'Facility Walkways'],
    image: '/images/hy-light.jpg',
    realImage: '/images/hy-light-real.jpg'
  }
];

export const COMPANY_INFO = {
  name: 'Lagos Amaoso Solar Technology Co., Ltd.',
  brandName: 'aMaoso',
  tagline: 'Nigeria Professional Street Lighting Solutions for Residential & Engineering Applications',
  parentFounded: 2008,
  solarRndSince: 2012,
  smartIotSince: 2016,
  dailyCapacity: '5,000 – 10,000 Units',
  patentsCount: '100+ Patents',
  housingMoldCount: '70+ Types of Lamp Housings',
  experienceYears: 17,
  certifications: ['ISO 9001:2015', 'CE Certified', 'CB Certified', 'RoHS Compliant', 'SAA Approved', 'IP65 / IP66'],
  phonePrimary: '09020008868',
  phoneSecondary: '08034096635',
  whatsappDirect: '2349020008868',
  email: 'admin@oled-f.com',
  locations: [
    {
      title: 'Lagos Head Office',
      address: 'No 3 Olabisi Close, Off Adebowale Street, Mende, Maryland, Lagos State, Nigeria',
      type: 'Headquarters & Engineering Support',
      phone: '09020008868 / 08034096635'
    },
    {
      title: 'Warri Warehouse',
      address: 'No 64 Airport Road, Opposite Shehu Usman Motors, Effurun, Warri, Delta State, Nigeria',
      type: 'South-South Distribution Depot & Stockroom',
      phone: '08034096635 / 09020008868'
    }
  ],
  exportCountries: ['Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Ghana', 'Tanzania']
};

export const PROJECT_PHOTOS = [
  { id: 1, src: '/images/project-1.jpg', title: 'Amaoso Project 1' },
  { id: 2, src: '/images/project-2.jpg', title: 'Amaoso Project 2' },
  { id: 3, src: '/images/project-3.jpg', title: 'Amaoso Project 3' },
  { id: 4, src: '/images/project-4.jpg', title: 'Amaoso Project 4' },
  { id: 5, src: '/images/project-5.jpg', title: 'Amaoso Project 5' },
  { id: 6, src: '/images/project-6.jpg', title: 'Amaoso Project 6' },
  { id: 7, src: '/images/project-7.jpg', title: 'Amaoso Project 7' }
];

export const FAQS = [
  {
    q: 'Is your company located in Lagos',
    a: 'Yes, our company is located in Lagos. Our office address is: No 3 Olabisi Close, off Adebowale Street, Mende, Maryland, Lagos.'
  },
  {
    q: 'After each product is completed, we conduct strict quality inspections',
    a: 'Lagos Amaoso Solar Technology Co., Ltd. has a complete management system and has passed the ISO9001:2015 quality management system certification. More importantly, our product quality has also passed CB, CE, ROHS, SAA, and other certifications.'
  },
  {
    q: 'Do you provide after-sales service',
    a: 'Yes, we provide a warranty for all the products we sell. If you encounter any after-sales issues due to product quality, please contact us.'
  },
  {
    q: 'What are your production and delivery capabilities?',
    a: 'With a daily production capacity of 5,000 to 10,000 units, we are fully capable of meeting your delivery schedules and quality requirements. Large orders can typically be completed within 15–30 days.'
  }
];
