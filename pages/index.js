import { getFeaturedEvents } from '../dummy-data'

const HomePage = () => {
  const getFeaturedEvents = getFeaturedEvents()

  return (
    <div>
      <h1>The home page</h1>
    </div>
  )
}

export default HomePage
