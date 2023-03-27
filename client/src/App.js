import {Route, Routes} from 'react-router-dom'

import { Catalog } from "./components/Catalog/Catalog";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Register } from './components/Register/Register';
import styles from './app.css';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div style={styles}>
       <Header />
       <main id="main-content">
        <Routes>
           <Route path='/login' element={<Login />} />
           <Route path='/catalog' element={<Catalog />} />
           <Route path='/register' element={<Register />} />
           <Route path='/' element={<Home />} />
        </Routes>
       </main>
       <Footer />
    </div>
  );
}

export default App;
