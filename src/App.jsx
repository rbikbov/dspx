import { MainContent } from '@/components/MainContent/MainContent'
import { MainNav } from '@/components/MainNav/MainNav'
import { ActiveFlatContextProvider } from '@/components/ContextProviders/ActiveFlatContextProvider'

function App() {
  return (
    <ActiveFlatContextProvider>
      <MainNav />
      <MainContent />
    </ActiveFlatContextProvider>
  )
}

export default App
