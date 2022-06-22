import { useState, useEffect } from "react";
import CircularColor from "./loading";

export default function Today() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const city = [353412, 352954, 353981];
  

    useEffect(() => {
      fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/353981?apikey=NTRAHa3qpl5nGvB4TItlKGsD4nr4Bkx0&language=vi&details=true&metric=true")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return < CircularColor/>
    } else {
      return (
    // <ul>
    //     {items.DailyForecasts.map((item, index) => (
    //       <li key={item.Dailyforecasts[index]}>
    //          
    //       </li>
    //     ))}
    // </ul>
    console.log(items.DailyForecasts)
        
      )
    }
    
  }