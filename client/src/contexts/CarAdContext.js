import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {create, edit, getAll} from '../services/carAdService'

const CarAdContext = createContext();

export const CarAdProvider = ({
    children
}) => {
    const [carAds, setCarAds] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getAll()
        .then(result => {
            setCarAds(result)
        })
    }, []);

    const getCarAd = (carAdId) => {
        return carAds.find(carAd => carAd._id === carAdId);
    };

    const onCreateCarAdSubmit = async (data) => {
        const newCarAd = await create(data)

        setCarAds(state => ({...state, newCarAd}))

        navigate("/cars")
    }

    const onCarAdEditSubmit = async (values) => {
        const result = await edit(values.id, values);

        setCarAds(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/cars/${values._id}`);
    }

    const deleteCarAd = async (carAdId) => {
        await deleteCarAd(carAdId);
        setCarAds(state => state.filter(carAd => carAd._id !== carAdId));
    }

    const contextValues = {
        carAds,
        onCreateCarAdSubmit,
        onCarAdEditSubmit,
        getCarAd,
        deleteCarAd
    }

    return (
        <CarAdContext.Provider value={contextValues}>
            {children}
        </CarAdContext.Provider>
    );
};

export const useCarAdContext = () => {
    const context = useContext(CarAdContext);

    return context;
}