import { Navigate, Outlet, useParams } from "react-router-dom";
import { useCarAdContext } from "../../contexts/CarAdContext";
import { useAuthContext } from "../../contexts/AuthContext";

const OwnerGuard = ({ children }) => {
  const { carAdId } = useParams();
  const { getCarAd } = useCarAdContext();
  const { userData } = useAuthContext();

  const currentCarAd = getCarAd(carAdId);

  if(currentCarAd && currentCarAd._ownerId !== userData._id) {
    console.log("hi");
    return <Navigate to={`/catalog/${carAdId}`} replace />
  }

  return children ? children : <Outlet />
};

export default OwnerGuard;
