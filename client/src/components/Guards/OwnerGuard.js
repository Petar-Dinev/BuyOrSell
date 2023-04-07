import { Navigate, Outlet, useParams } from "react-router-dom";
import { useCarAdContext } from "../../contexts/CarAdContext";
import { useAuthContext } from "../../contexts/AuthContext";

const OwnerGuard = ({ children }) => {
  const { carAdId } = useParams();
  const { getCarAd } = useCarAdContext();
  const { userId } = useAuthContext();

  const currentCarAd = getCarAd(carAdId);

  if(currentCarAd && currentCarAd._ownerId === userId) {
    return <Navigate to={`/cars/${carAdId}`} replace />
  }

  return children ? children : <Outlet />
};

export default OwnerGuard;
