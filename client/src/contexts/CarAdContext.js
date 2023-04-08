import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {create, edit, getAll, deleteCarAd} from '../services/carAdService'

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

    // console.log(carAds);

    if(!Array.isArray(carAds)) {
        setCarAds([]);
    }

    const getCarAd = (carAdId) => {
        return carAds.find(carAd => carAd._id === carAdId);
    };

    const onCreateCarAdSubmit = async (data) => {
        const newCarAd = await create(data)

        setCarAds(state => ([...state, newCarAd]))

        navigate("/catalog")
    }

    const onCarAdEditSubmit = async (values) => {
        const result = await edit(values._id, values);

        setCarAds(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/catalog/${values._id}`);
    }

    const onDeleteCarAd = async (carAdId) => {
        await deleteCarAd(carAdId);
        setCarAds(state => state.filter(carAd => carAd._id !== carAdId));
    }

    const contextValues = {
        carAds,
        onCreateCarAdSubmit,
        onCarAdEditSubmit,
        getCarAd,
        onDeleteCarAd
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