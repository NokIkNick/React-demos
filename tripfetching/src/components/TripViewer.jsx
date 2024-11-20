import { fetchApi } from '../services/apifacade.js';
import { useEffect, useRef, useState} from 'react';

export const TripViewer = () => {
    const [trips, setTrips] = useState([]);
    const selectRef = useRef();
    const [filteredTrips, setFilteredTrips] = useState([]);


    useEffect(() => {
        fetchApi().then((data) => {
            setTrips(data)
        });
    }, []);

    useEffect(() => {
        console.log(trips);
        setFilteredTrips(trips);
    }, [trips])
    

    const handleClick = () => {

    }

    const filterCategories = (category) => {
        setFilteredTrips(trips.filter((trip) => {
            if(trip.category == category){
                return trip;
            }
        }))
    }

    return ( 
        <>
            <select onChange={(e) => {filterCategories(e.target.value)}} ref={selectRef}>
                <option value={"CITY"}>CITY</option>
                <option value={"SNOW"}>SNOW</option>
            </select>
            <ul>
            {trips && filteredTrips.map((trip) => (
                <li key={trip.id} value={trip.name} onClick={handleClick}>
                    <h3>{trip.name}</h3>
                    <h4>Start date: {new Date(trip.starttime).toLocaleDateString()}</h4>
                    <h4>End date: {new Date(trip.endtime).toLocaleDateString()}</h4>
                    <h4>Price: {trip.price} DKK</h4>
                    <h4>Duration: {Math.floor(Math.abs(new Date(trip.starttime) - new Date(trip.endtime)) / (1000 * 60 * 60 * 24))} days / {Math.floor(Math.abs(new Date(trip.starttime) - new Date(trip.endtime)) / 3600000)} hours</h4>
                </li>
            ))}
            </ul>
        </>
    )
}