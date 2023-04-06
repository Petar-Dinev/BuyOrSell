import { Route, Routes } from "react-router-dom";

import Cars from "./components/CarsList/CarsList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import AuthProvider from "./contexts/AuthContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Logout from "./components/Logout/Logout";
import CreateCarAd from "./components/CarsList/CreateCarAd";
import CarDetails from "./components/CarsList/CarDetails";
import EditCarAd from "./components/CarsList/EditCarAd";

function App() {

  return (
    <AuthProvider>
      <div>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cars" element={<CarsList />} />
            <Route path="/createCarAd" element={<CreateCarAd />} />
            <Route path="/cars/:carId" element={<CarDetails />} />
            <Route path="/cars/:carId/edit" element={<EditCarAd />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
