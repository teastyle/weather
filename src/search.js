import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState,  } from "react";
import CircularColor from "./loading";
import "./search.css";
import debounce from 'lodash.debounce';
import axios from "axios";
// import { debounceTime } from 'rxjs/operators';

export default function Search(props) {
  const [error, setError] = useState(null);
 
  const [isLoaded, setIsLoaded] = useState(false);
  const [citys, setCitys] = useState([]);
  const [keyInput, setKeyInput] = useState("a");
  // const [valueInput, setValueInput] = useState("")
  
  const urlCity =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" +
    props.api +
    "&q=";
  const keyCity = keyInput + "&language=vi";

    const handleOnClick = (index,e) => {    
      props.setkey(citys[index].Key);
      props.setkeyname(citys[index].LocalizedName);
      document.querySelector(".list-city").style.display = "none";
      // setValueInput ("")
      setKeyInput("a");
    };



  const handleOnFocus = () => {
    document.querySelector(".list-city").style.display = "block";
  };

  const handleOnChange = debounce((event) => {
    const e = event.target.value;
    if (e === "") {
      // setValueInput("")
      setKeyInput("a");
    } else {
      // setValueInput(e);
      setKeyInput(e);

    }
  },500)
  
  const handleOnBlur = () => {
    document.querySelector(".list-city").style.display = "none";
  };

  useEffect(() => {
    axios
    .get(urlCity + keyCity)
    .then((res) => {
      setIsLoaded(true);
      setCitys(res.data);
    })
    .catch((error) => {
      setIsLoaded(false);
      setError(error);
      console.log(error);
    });

  }, [keyInput]);

  if (error) {
    return (
      
      console.log("res lỗi")
    )
  } else if (!isLoaded) {
    return(<CircularColor/>)

  } else {
    return (
      <div className="search">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 600,
          }}
        >
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon color="success"/>
          </IconButton>
          <InputBase
       
            id="input-city"
            type="JSON"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a location"
            inputProps={{ "aria-label": "search google maps" }}
            onFocus={() => handleOnFocus()}
            onChange={(event) => handleOnChange(event)}
            onBlur={() => handleOnBlur()}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <div className="list-city">
            {citys.map((city, index) => (
              <div
                key={city.Key}
                className="city"
                onMouseDown={() => handleOnClick(index)}
              >
                {city.LocalizedName}
              </div>
            ))}
          </div>
          
        </Paper>
        <div className="div-hr"> <div className="hr-search"></div></div> 
      </div>
      
    );
  }
}
