import React,{useEffect, useState} from "react";
import styles from "../Countries/Countries.module.css";

const CountryCard = ({name, flagImg, flagalt}) => {
    return(
        <div className={styles.wrapper}>
            <img src={flagImg} alt={flagalt} className={styles.image}/>
            <h2>{name}</h2>
        </div>
    )
}


const Countries = () => {
    const API_URL = "https://restcountries.com/v3.1/all";
    const [country, setCountry] = useState([]);

    useEffect(()=> {
        const fetchCountries = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setCountry(data);
                console.log(data);
            } catch (error) {
                console.log("Error on fetching", error);
            }
        }
        fetchCountries();
    },[])
    

    return(

        <div className={styles.container}>
            {country.map((country)=>(<CountryCard name={country.name.common} flagImg={country.flags.png} flagalt={country.flags.alt}/>))}
        </div>
    )
}

export default Countries;








