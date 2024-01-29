
import './App.css'
import { Route } from "wouter";
import { Home } from './pages/Home/Home';
import { SearchResults } from './pages/SearchResults/SearchResults';
import { Detail } from './pages/Detail/Detail';
import { NotFound } from './pages/NotFound/NotFound';
function App() {

  return (
    <div>
      <section className='main' >

        <h1>Giphy APP</h1>


        <Route
          path='/'
          component={Home}
        />

        <Route
          path='/search/:keyword'
          component={SearchResults}
        />

        <Route
          path='/detail/:id'
          component={Detail}
        />

        <Route path='/404'  component={NotFound}/>

      </section>
    </div>
  )
}

export default App
