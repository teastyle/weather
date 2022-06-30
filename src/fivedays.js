import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./fivedays.css";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import icon5 from "./icon5.svg";

// import "../img/"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Fivedays(props) {
let d = new Date();

let thu = d.getDay();
let days = [
  "Chủ nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
  "Chủ nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];

 const thuu = (index) =>{
  let thuu = 0;
  if (index === 0){
    return thuu = thu +1
  }
  if (index === 1){
    return thuu  = thu +2
  }
  if (index === 2){
    return thuu = thu + 3
  }
  if (index === 3){
    return thuu = thu + 4
  }

}
  
  const urlIcon5day = (index) => {
    const idIcon5day = props.getitems.DailyForecasts[index].Day.Icon;

    if (idIcon5day === 1 || idIcon5day === 2) {
      return icon1;
    }
    if (
      idIcon5day === 3 ||
      idIcon5day === 4 ||
      idIcon5day === 5 ||
      idIcon5day === 6
    ) {
      return icon2;
    }
    if (idIcon5day === 7 || idIcon5day === 8 || idIcon5day === 11) {
      return icon3;
    }
    if (
      idIcon5day === 12 ||
      idIcon5day === 13 ||
      idIcon5day === 14 ||
      idIcon5day === 18
    ) {
      return icon4;
    }
    if (idIcon5day === 15 || idIcon5day > 15) {
      return icon5;
    }
  };

  const SpliceItems = () => {
    const newItems = [...props.getitems.DailyForecasts];

    newItems.splice(0, 1);
   
    return newItems;
  };

  // const SpliceDates = (index) => {
  //   const newDates = [...props.getitems.DailyForecasts[index + 1].Date];
  //   return newDates.splice(0, 10);
  // };

  return (
    <ul className="ul-5day">
      

      {SpliceItems().map((item, index) => (
        <li key={item.Date} className="li-day">
          
          
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <ul className="item">
                  <li className="li-child">
                      <div className="value-t dates">{days[thuu(index)]}</div>
                      {/* {SpliceDates(index)} */}
                      <div className="value-t temperature">
                        <div className="icon-temperature">
                          <img
                            src={urlIcon5day(index)}
                            width="40px"
                            alt="icon"
                          ></img>
                        </div>
                       
                      </div>
                      <div className="temperature-days">
                      <div className="max-value">
                          {item.Temperature.Minimum.Value.toFixed(0)}°
                        </div>
                        /
                        <div className="min-value">
                          {item.Temperature.Maximum.Value.toFixed(0)}°
                        </div>
                      </div>
                    </li>
                  </ul>
                    
                
                </Item>
              </Grid>
            </Grid>
          
        </li>
      ))}
    </ul>
  );
}
