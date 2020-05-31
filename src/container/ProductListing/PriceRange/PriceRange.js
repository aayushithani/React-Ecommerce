import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import classes from './PriceRange.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(4),
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const classesRoot = useStyles();
  const [value, setValue] = React.useState([2500, 4000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.PriceRange}>
      <div className={classesRoot.root}>
        <Typography id="discrete-slider-always" gutterBottom>
          <div className={classes.PriceText}>Price Range(₹)</div>
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          aria-labelledby="range-slider"
          step={500}
          defaultValue={100}
          valueLabelDisplay="on"
          min={100}
          max={5000}
          
        />
      </div>
    </div>
  );
}
