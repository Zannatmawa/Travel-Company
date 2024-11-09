import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import NavigationBar from '../src/components/Header/NavigationBar.js'
import AboutDetails from './components/Body/AboutDetails.js';
import BookOnline from './components/Body/BookOnline.js';
import CardGrp from './components/Body/CardGrp.js';


function App() {
  return (
    <div className="App">
       <NavigationBar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about-details' element={<AboutDetails />}/>
        <Route path='/book-online' element={<BookOnline />}>
          {/* <Route path='/card-grp' element={<CardGrp />} /> */}
        </Route>
      </Routes>
         
    </div>
  );
}

export default App;
