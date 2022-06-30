import { useState, useEffect } from "react";

import Fivedays from "./fivedays";
import CircularColor from "./loading";
import Search from "./search";
import Todayyy from "./todayyyy";
import "./getAPI.css";
import axios from "axios";

export default function getApi(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [items, setItems] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [keyLocation, setKeyLocation] = useState(353981);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  const api = "9TEGb7Gdy1v7LtP64q8Isu2HGkNhmwQm";

  const urlApi = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const keyApi =
    keyLocation + "?apikey=" + api + "&language=vi&details=true&metric=true";


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nameCity, setNameCity] = useState("Thành Phố Hồ Chí Minh");

  const handleLocation = (value) => {
    setKeyLocation(value);
  };
  const handleNameLocation = (value) => {
    setNameCity(value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(urlApi + keyApi)
      .then((res) => {
        setIsLoaded(true);
        setItems(res.data);
      })
      .catch((error) => {
        setIsLoaded(false);
        setError(error);
        console.log(error);
      });

    // fetch(urlApi + keyApi)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  }, [keyLocation]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularColor />;
  } else {
    return (
      <div  className="all">
        <Search
          setkey={handleLocation}
          setkeyname={handleNameLocation}
          api={api}
        />

        <div className="content">
          <Todayyy
            getitems={items}
            geterror={error}
            getload={isLoaded}
            getnamecity={nameCity}
          />
          <Fivedays getitems={items} />
       </div>
      </div>
    );
  }
}
