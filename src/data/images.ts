const assetVersion = '6'
const base = import.meta.env.BASE_URL
const versioned = (path: string) => `${base}${path.replace(/^\//, '')}?v=${assetVersion}`

export type BrandImage = {
  src: string
  alt: string
  width: number
  height: number
}

export const images = {
  logo: {
    src: versioned('/images/brand/maiz-soul-logo.png'),
    alt: 'Maíz Soul by Tía Yaya logo',
    width: 672,
    height: 672,
  },
  heroPatacones: {
    src: versioned('/images/hero/hero-patacones.jpg'),
    alt: 'Loaded patacones served at Maíz Soul by Tía Yaya',
    width: 2000,
    height: 1333,
  },
  pulledPorkSandwich: {
    src: versioned('/images/food/pulled-pork-sandwich.jpg'),
    alt: 'Pulled pork sandwich served at Maíz Soul by Tía Yaya',
    width: 1194,
    height: 672,
  },
  hamburguesaTiaYaya: {
    src: versioned('/images/food/hamburguesa-tia-yaya.jpg'),
    alt: 'Hamburguesa Tía Yaya served at Maíz Soul by Tía Yaya',
    width: 1200,
    height: 1600,
  },
  restaurantFoodWide: {
    src: versioned('/images/food/maiz-soul-food-wide.jpg'),
    alt: 'Food served at Maíz Soul by Tía Yaya',
    width: 1194,
    height: 672,
  },
  restaurantPlate: {
    src: versioned('/images/food/maiz-soul-plate.jpg'),
    alt: 'A plate of food from Maíz Soul by Tía Yaya',
    width: 1200,
    height: 1600,
  },
  restaurantMeals: {
    src: versioned('/images/food/maiz-soul-meals.jpg'),
    alt: 'Meals served at Maíz Soul by Tía Yaya',
    width: 1200,
    height: 1600,
  },
  restaurantDishes: {
    src: versioned('/images/food/maiz-soul-dishes.jpg'),
    alt: 'Corn-based dishes served at Maíz Soul by Tía Yaya',
    width: 1200,
    height: 1600,
  },
  restaurantDishesApril: {
    src: versioned('/images/food/maiz-soul-dishes-april.jpg'),
    alt: 'Dishes served at Maíz Soul by Tía Yaya',
    width: 1200,
    height: 1600,
  },
  chichaBrandCup: {
    src: versioned('/images/drinks/chicha-brand-cup.jpg'),
    alt: 'Chicha drink in branded Maíz Soul by Tía Yaya cup',
    width: 2880,
    height: 2880,
  },
} satisfies Record<string, BrandImage>

export type GalleryImage = BrandImage & {
  caption: string
  shape: string
}

export const galleryImages: GalleryImage[] = [
  {
    ...images.heroPatacones,
    caption: 'Loaded patacones',
    shape: 'aspect-[4/3]',
  },
  {
    ...images.restaurantFoodWide,
    caption: 'From the Maíz Soul table',
    shape: 'aspect-[16/9]',
  },
  {
    ...images.hamburguesaTiaYaya,
    caption: 'Hamburguesa Tía Yaya',
    shape: 'aspect-[3/4]',
  },
  {
    ...images.restaurantPlate,
    caption: 'A plate from Maíz Soul',
    shape: 'aspect-[4/5]',
  },
  {
    ...images.pulledPorkSandwich,
    caption: 'Pulled pork sandwich',
    shape: 'aspect-[16/9]',
  },
  {
    ...images.restaurantMeals,
    caption: 'Comida criolla',
    shape: 'aspect-[3/4]',
  },
  {
    ...images.restaurantDishes,
    caption: 'Corn & soul plates',
    shape: 'aspect-[4/5]',
  },
  {
    ...images.restaurantDishesApril,
    caption: 'Fresh from the kitchen',
    shape: 'aspect-[3/4]',
  },
  {
    ...images.chichaBrandCup,
    caption: 'Chicha, in our own cup',
    shape: 'aspect-square',
  },
]
