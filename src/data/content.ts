import { images, type BrandImage } from './images'

export type FeaturedDish = {
  name: string
  category: string
  description?: string
  image: BrandImage
}

export const featuredDishes: FeaturedDish[] = [
  {
    name: 'From the Maíz Soul Table',
    category: 'Real from the kitchen',
    description: 'A real plate photographed at Maíz Soul by Tía Yaya.',
    image: images.restaurantFoodWide,
  },
  {
    name: 'Hamburguesa Tía Yaya',
    category: 'Burgers & Hot Dogs',
    image: images.hamburguesaTiaYaya,
  },
  {
    name: 'A Plate from Maíz Soul',
    category: 'Real from the kitchen',
    description: 'Comfort food, served the way Maíz Soul does.',
    image: images.restaurantPlate,
  },
  {
    name: 'Pulled Pork Sandwich',
    category: 'From the kitchen',
    description: 'A real sandwich photographed at Maíz Soul by Tía Yaya.',
    image: images.pulledPorkSandwich,
  },
]

export const experienceHighlights = [
  { number: '01', title: 'Arepas', text: 'Corn cakes, grilled or fried, filled to order.' },
  { number: '02', title: 'Empanadas', text: 'Savory fillings tucked into corn dough.' },
  { number: '03', title: 'Cachapas', text: 'Sweet corn pancakes with soft white cheese.' },
  { number: '04', title: 'Tequeños', text: 'Golden, fried and made for sharing.' },
  { number: '05', title: 'Plantain dishes', text: 'From loaded patacones to ripe plantain favorites.' },
  { number: '06', title: 'Corn specialties', text: 'Soul Desgranado, Corn Ribs and more.' },
]

export const drinkHighlights = [
  'Specialty cappuccinos',
  'Dulce de Leche Cappuccino',
  'Pistachio Cappuccino',
  'Chocolate Dubai',
  'Matcha drinks',
  'Chicha',
  'Fresh juices',
]

export const dessertHighlights = [
  { name: 'Nutella Pancakes', note: 'Three pieces' },
  { name: 'Churros', note: 'Nutella & dulce de leche' },
  { name: 'Bakery options', note: 'Ask what is fresh today' },
]

export const copy = {
  intro: {
    label: 'Our story',
    title: 'More Than a Meal. A Taste of Venezuela.',
    body: 'Maíz Soul brings Venezuelan and Latin American food culture to Smyrna through corn-based specialties, comforting favorites, creative drinks and café staples. It is food made to bring people together — familiar, vibrant and full of soul.',
    pillars: [
      {
        number: '01',
        title: 'Corn at the center',
        text: 'Arepas, empanadas and cachapas start with the ingredient that gives our kitchen its name.',
      },
      {
        number: '02',
        title: 'Comfort food',
        text: 'Generous plates, plantain-based favorites and the dishes people come back for.',
      },
      {
        number: '03',
        title: 'A café, too',
        text: 'Specialty coffee, creative sips and something sweet whenever the moment calls for it.',
      },
    ],
  },
  featured: {
    label: 'On the table',
    title: 'Made to Be Loved.',
    body: 'A closer look at a few things on the menu — photographed in the kitchen, exactly as they are.',
    cta: 'Explore Full Menu',
  },
  experience: {
    label: 'Our roots',
    title: 'The Venezuelan Table.',
    body: 'Corn is more than an ingredient here. It is the starting point for the flavors we grew up with: arepas, empanadas and cachapas, alongside plantains, tequeños and the kind of food meant to be shared.',
    closing: 'Come hungry. Leave with a new favorite.',
  },
  breakfast: {
    label: 'Breakfast & brunch',
    title: 'Slow Mornings, Good Food.',
    body: 'Ease into the day with breakfast and brunch at Maíz Soul — Venezuelan favorites alongside café classics, served with the warmth that makes a morning feel unhurried.',
    cta: 'View the Breakfast Menu',
  },
  coffee: {
    label: 'Coffee & drinks',
    title: 'Your New Favorite Coffee Spot.',
    body: 'Pull up a chair for a carefully made cappuccino, a matcha with a twist, or a cup of chicha in our own branding. The drink menu is as expressive as the food.',
    note: 'More real drink photography coming soon.',
  },
  desserts: {
    label: 'Desserts & bakery',
    title: 'A Little Something Sweet.',
    body: 'Save room for the final course. Pancakes, churros and bakery favorites make the perfect ending — or the reason to stop by in the first place.',
    cta: 'See the Dessert Menu',
  },
  menu: {
    label: 'The menu',
  },
  gallery: {
    label: 'Gallery',
    title: 'Straight from the Table.',
    body: 'A small collection of real photographs from Maíz Soul — no styled stand-ins, just the food and drinks we serve.',
  },
  visit: {
    label: 'Visit us',
    title: 'Find Us in Smyrna.',
    body: 'Good food, strong coffee and a warm welcome — right here on North Lowry Street.',
  },
}
