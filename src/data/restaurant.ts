export const restaurant = {
  name: 'Maíz Soul by Tía Yaya',
  shortName: 'Maíz Soul',
  location: 'Smyrna, Tennessee',
  description:
    'Venezuelan and Latin American food, corn-based classics, comforting favorites and specialty drinks in Smyrna, Tennessee.',
  address: {
    line1: '15 N Lowry St',
    line2: 'Smyrna, TN 37167, USA',
    full: '15 N Lowry St, Smyrna, TN 37167, USA',
  },
  phone: {
    display: '+1 615-267-3339',
    href: 'tel:+16152673339',
  },
  instagram: {
    label: '@maizsoultn',
    href: 'https://www.instagram.com/maizsoultn/',
  },
  orderUrl: 'https://maizsoul.square.site/',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=15+N+Lowry+St%2C+Smyrna%2C+TN+37167%2C+USA',
  hours: [
    { day: 'Monday', time: '9 AM – 9 PM' },
    { day: 'Tuesday', time: '9 AM – 9 PM' },
    { day: 'Wednesday', time: '9 AM – 9 PM' },
    { day: 'Thursday', time: '9 AM – 9 PM' },
    { day: 'Friday', time: '9 AM – 10 PM' },
    { day: 'Saturday', time: '9 AM – 10 PM' },
    { day: 'Sunday', time: '9 AM – 9 PM' },
  ],
  hoursVerified: false,
  hoursNote: 'Hours should be confirmed with the restaurant before publishing or visiting.',
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ],
} as const

export const copyrightYear = new Date().getFullYear()
