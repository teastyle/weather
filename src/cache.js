import { useState, useEffect } from "react";
import CircularColor from "./loading";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./today.css";
import Day from "./day";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [keyLocation, setKeyLocation] = useState(353981);

  const urlApi = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const keyApi =
    keyLocation +
    "?apikey=U0mG2xRMp2Ndzm44DBvJ589zeJAxUD7F&language=vi&details=true&metric=true";

  var iconID = 1;

  const urlIcon =
    "https://www.accuweather.com/images/weathericons/" +  iconID  + ".svg";

  const changerurl= (a) =>{
    iconID = a;
  }



<ul>
        

        <div> THỜI TIẾT CÁC NGÀY TIẾP THEO </div>

        {items.DailyForecasts.map((item, index) => (
          <li key={item.Date} className="li-day">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Item>
                    <ul>
                      <li className="li-child">
                        <div className="value-t">Thứ X:</div>

                        <div className="value-t">
                          <div>
                          {changerurl(item.Day.Icon)}
                            <img src={urlIcon} width="30px" alt="icon"></img>
                          </div>
                          <div className="max-value">
                            {item.Temperature.Maximum.Value}°
                          </div>
                          /
                          <div className="min-value">
                            {item.Temperature.Minimum.Value}°
                          </div>
                          {/* <img src={urlIcon} width="20px"></img> */}
                        </div>

                        <div className="value-t">{item.Day.LongPhrase}</div>
                      </li>
                    </ul>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </li>
        ))}
      </ul>