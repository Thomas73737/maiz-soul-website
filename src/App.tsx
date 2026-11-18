import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BrandIntro } from './components/BrandIntro'
import { FeaturedFood } from './components/FeaturedFood'
import { FoodExperience } from './components/FoodExperience'
import { BreakfastBrunch } from './components/BreakfastBrunch'
import { CoffeeDrinks } from './components/CoffeeDrinks'
import { Desserts } from './components/Desserts'
import { MenuPreview } from './components/MenuPreview'
import { Gallery } from './components/Gallery'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <FeaturedFood />
        <FoodExperience />
        <BreakfastBrunch />
        <CoffeeDrinks />
        <Desserts />
        <MenuPreview />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export default App
