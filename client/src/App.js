import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { CarAdProvider } from "./contexts/CarAdContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import CreateCarAd from "./components/CreateCarAd/CreateCarAd";
import CarDetails from "./components/CarDetails/CarDetails";
import EditCarAd from "./components/EditCarAd/EditCarAd";
import NotFound from "./components/NotFound/NotFound";
import RouteGuard from "./components/Guards/RouteGuard";
import OwnerGuard from "./components/Guards/OwnerGuard";
import Catalog from "./components/Catalog/Catalog";
import AboutPage from './components/AboutPage/AboutPage'

function App() {
  return (
    <AuthProvider>
      <CarAdProvider>
    
      <div>
        <Header />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />}  />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:carAdId" element={<CarDetails />} />
          <Route element={<RouteGuard />}>
            <Route path="/catalog/createAd" element={<CreateCarAd />} />
            <Route
              path="/catalog/:carAdId/edit"
              element={
                <OwnerGuard>
                  <EditCarAd />
                </OwnerGuard>
              }
            />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>

        <Footer />
      </div>
      </CarAdProvider>
    </AuthProvider>
  );
}

export default App;
