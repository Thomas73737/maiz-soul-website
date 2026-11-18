export type MenuItem = {
  name: string
  description?: string
}

export type MenuCategory = {
  id: string
  title: string
  shortTitle: string
  items: MenuItem[]
  note?: string
}

export type PriceConflict = {
  item: string
  observed: string[]
}

export const menuMeta = {
  title: 'Full Menu Preview',
  intro:
    'A look at the kinds of dishes and drinks you will find at Maíz Soul. The Square storefront is the source of truth for what is available today.',
  pricingNote:
    'Public listings disagree on some prices and several items have no published price, so prices are intentionally not shown here.',
  actionLabel: 'See the live menu on Square',
}

export const priceVerification = {
  pricesDisplayed: false,
  verifiedOn: '2026-11-18',
  conflicts: [
    {
      item: 'Cachapa + Queso',
      observed: ['$19.50 (public menu listing)', '$18.75 (aggregated menu listing)'],
    },
    {
      item: 'Cachapa Especial',
      observed: ['$20.50 (public menu listing)', 'No price published on Square'],
    },
    {
      item: 'Patacón Tía Yaya',
      observed: ['$26.00 (public menu listing)', 'No price published on Square'],
    },
  ] satisfies PriceConflict[],
  unverifiedNote:
    'Menu listings may be out of date. Confirm items, availability and pricing with the restaurant or on Square before publishing.',
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'arepas',
    title: 'Arepas',
    shortTitle: 'Arepas',
    items: [
      {
        name: 'Reina Pepiada Arepa',
        description: 'Chicken, avocado, mayo mix.',
      },
      {
        name: 'Bacon, Egg & Cheese Arepa',
        description: 'Bacon, scrambled eggs and American cheese.',
      },
      {
        name: 'Peruchos',
        description:
          'Crispy, battered, deep fried arepas filled with mortadella, cabbage, grated cheese, ketchup, garlic-cilantro mayo, and a choice of protein.',
      },
      {
        name: 'Soul Corn Arepas',
        description: 'Choice of protein, cabbage, garlic-cilantro mayo, ketchup, grated cheese.',
      },
      {
        name: 'Puerco + Queso Frito',
        description: 'Pulled pork, cabbage, garlic-cilantro mayo, ketchup, fried cheese, grated cheese.',
      },
      {
        name: 'Arepa Bowl',
        description:
          'Fried arepa pieces with shredded beef, shredded chicken and pulled pork, cabbage, sliced boiled egg, garlic-cilantro mayo, ketchup, grated cheese.',
      },
    ],
  },
  {
    id: 'empanadas-fried-snacks',
    title: 'Empanadas & Fried Snacks',
    shortTitle: 'Empanadas & Snacks',
    items: [
      { name: 'Empanada', description: 'Made with corn dough.' },
      { name: 'Pabellón', description: 'Shredded beef, fried plantain, black beans, cheese.' },
      { name: 'Pastel', description: 'Made with wheat dough.' },
      { name: 'Mandocas', description: 'Sweet cornmeal and cheese ring.' },
      {
        name: 'TequeYoyos',
        description: 'Ripe fried plantain, ham and cheese wrapped in pastry dough and deep fried.',
      },
      {
        name: 'Stuffed TequeYoyos',
        description:
          'A tequeyoyo stuffed with a choice of protein, topped with cabbage, garlic-cilantro mayo, ketchup and parmesan cheese.',
      },
    ],
  },
  {
    id: 'venezuelan-specialties',
    title: 'Venezuelan Specialties',
    shortTitle: 'Specialties',
    items: [
      {
        name: 'Cachapa + Queso',
        description: 'Sweet corn pancake filled with soft white cheese, melted cheese, grated cheese and sour cream.',
      },
      {
        name: 'Cachapa Especial',
        description: 'Sweet corn pancake filled with soft white cheese and a choice of protein.',
      },
      {
        name: 'Patacón Tía Yaya',
        description:
          'Fried plantain sandwich with cabbage, yellow shredded cheese, ham, garlic-cilantro mayo, ketchup and parmesan cheese.',
      },
      { name: 'Pollo con Crema' },
      { name: 'Pan de Jamón' },
    ],
  },
  {
    id: 'breakfast-brunch',
    title: 'Breakfast & Brunch',
    shortTitle: 'Breakfast',
    items: [
      {
        name: 'Avocado Mozzarella',
        description: 'Homemade avocado mash, arugula, tomato, mozzarella, balsamic, on sourdough toast.',
      },
      { name: 'Bacon, Egg & Cheese Croissant', description: 'Bacon, scrambled eggs and American cheese.' },
      {
        name: 'Queen Tostada',
        description: 'Reina pepiada mix of shredded chicken, avocado and mayo on sourdough toast.',
      },
      {
        name: 'Avocado Toast',
        description: 'Avocado mash, arugula, mozzarella, balsamic and a choice of prosciutto or fried egg.',
      },
      {
        name: 'Egg Festival',
        description: 'Scrambled eggs with tomato and onion, served on two sourdough toasts or two arepas.',
      },
      {
        name: 'Desayuno Criollo',
        description: 'Black beans, shredded beef, avocado and one grilled arepa.',
      },
    ],
  },
  {
    id: 'burgers-hot-dogs',
    title: 'Burgers & Hot Dogs',
    shortTitle: 'Burgers & Dogs',
    items: [
      {
        name: 'Indiomara Hot Dog',
        description: 'Cabbage, potato sticks, garlic-cilantro mayo, ketchup and parmesan cheese.',
      },
      { name: 'Indiomara Recargado Hot Dog', description: 'Indiomara hot dog with a choice of protein.' },
      {
        name: 'Maracaibo Hot Dog',
        description: 'Cabbage, potato sticks, garlic-cilantro mayo, ketchup, parmesan and soft white cheese.',
      },
      {
        name: 'Pan Con Huevo',
        description: 'Sliced boiled egg, potato sticks, cabbage, ketchup, garlic-cilantro mayo and parmesan on a hot dog bun.',
      },
      {
        name: 'Hamburguesa Tía Yaya',
        description:
          'Tenderloin, grilled chicken, smoked pork chop, fried cheese, cheddar, bacon, ham, cabbage, potato sticks, garlic mayo and ketchup on artisan bread.',
      },
      { name: 'Soul Hot Dog', description: 'Soft bun, sausage, corn and onion.' },
    ],
  },
  {
    id: 'appetizers-sides',
    title: 'Appetizers & Sides',
    shortTitle: 'Sides',
    items: [
      { name: 'Soul Desgranado', description: 'Corn, melted cheese, sour cream and grated cheese.' },
      { name: 'Corn Ribs', description: 'Fried seasoned corn, melted cheese and sour cream.' },
    ],
    note: 'Ask the team about current sides and daily specials.',
  },
  {
    id: 'desserts-bakery',
    title: 'Desserts & Bakery',
    shortTitle: 'Desserts',
    items: [
      { name: 'Nutella Pancakes', description: 'Three pieces.' },
      { name: 'Churro Pancakes', description: 'Three pieces.' },
      { name: 'Guava + Cheese Pancakes', description: 'Three pieces.' },
      { name: 'Pistachio Pancakes', description: 'Three pieces.' },
      { name: 'Plain Pancakes', description: 'Three pieces.' },
      { name: 'Churros', description: 'Five pieces, 10 inch, with Nutella and dulce de leche.' },
      { name: 'Muffins' },
    ],
  },
  {
    id: 'coffee-specialty-drinks',
    title: 'Coffee & Specialty Drinks',
    shortTitle: 'Coffee',
    items: [
      { name: 'Cappuccino' },
      { name: 'Signature Dulce de Leche Cappuccino' },
      { name: 'Signature Pistachio Cappuccino' },
      { name: 'Chocolate Dubai' },
      { name: 'Cortado' },
      { name: 'Latte' },
      { name: 'Strawberry Matcha' },
      { name: 'Parcha Matcha' },
      { name: 'Mora Matcha' },
      { name: 'Hot Chocolate' },
    ],
  },
  {
    id: 'juices-cold-drinks',
    title: 'Juices & Cold Drinks',
    shortTitle: 'Cold Drinks',
    items: [
      { name: 'Chicha', description: 'Milk, rice, condensed milk, evaporated milk, sugar and cinnamon.' },
      { name: 'Guanábana Juice' },
      { name: 'Guava Juice' },
      { name: 'Passion Fruit Juice' },
      { name: 'Pineapple Juice' },
      { name: 'Orange Juice' },
      { name: 'Jamaica (Hibiscus)' },
      { name: 'Strawberry Lemonade' },
      { name: 'Malta' },
      { name: 'Sweet Tea (Nestea)' },
    ],
  },
]
