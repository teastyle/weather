import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import icon5 from "./icon5.svg";
import iconhumi from "./humidity.svg"
import AirIcon from '@mui/icons-material/Air';
import "./todayyyy.css";
// import { useState } from "react";


let d = new Date();
let thu = d.getDay();
let timenow = () =>{
  var timenow = new Date();
  var hours = timenow.getHours()
  var ampm = hours >= 12 ? 'PM' : 'AM';
  var minutes = timenow.getMinutes();
  timenow = hours + ':' + minutes + ' '+ ampm
  return timenow;
}
let days = [
  "Chủ nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];


export default function Todayyy(props) {
  // eslint-disable-next-line no-undef
  // console.log(d);
  const idIcon = props.getitems.DailyForecasts[0].Day.Icon;
  const urlIcon = () => {
    if (idIcon === 1 || idIcon === 2) {
      return icon1;
    }
    if (idIcon === 3 || idIcon === 4 || idIcon === 5 || idIcon === 6) {
      return icon2;
    }
    if (idIcon === 7 || idIcon === 8 || idIcon === 11) {
      return icon3;
    }
    if (idIcon === 12 || idIcon === 13 || idIcon === 14 || idIcon === 18) {
      return icon4;
    }
    if (idIcon === 15 || idIcon>15) {
      return icon5;
    }
  };
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="title-today">
          
          <div className="city-name"> {props.getnamecity} </div>
          <div className="time-title">{days[thu]}, {timenow()} </div>
        </Typography>
        <Typography
          className="container-today"
          variant="body2"
          color="text.secondary"
          component="span"
        >
          <div className="left-content">
            {" "}
            <div className="info-temperature">
              <div className="temperature">
                <div className="max-value-today">
                  {props.getitems.DailyForecasts[0].Temperature.Maximum.Value}°C
                </div>
              </div>
              <div className="real-feel">
                {" Feels like "}
                {
                  props.getitems.DailyForecasts[0].RealFeelTemperature.Maximum
                    .Value
                }
                °C
              </div>
              <div className="AirQuality">
                <AirIcon color="primary"/>
              
                {props.getitems.DailyForecasts[0].Day.Wind.Speed.Value} Km/h 
               <img src = {iconhumi} alt="iconhumi" width={"18px"}></img>
                Không khí:{" "}
                {props.getitems.DailyForecasts[0].AirAndPollen[0].Category}
                
            </div>
            </div>
          </div>
          <div className="right-content">
          <div className="icon-today">
              <img src={urlIcon()} alt="weather" width="150px"></img>
            </div>

           
           
          </div>
          
        </Typography>
        <div className="notify">   {props.getitems.Headline.Text} </div>

      </CardContent>
       {/* <hr className="hr-line"></hr> */}
       <div className="hr-line"></div> 

    </Card>
  );
}
