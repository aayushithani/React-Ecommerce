import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import classes from "./MultiSelectFilter.module.css";
import PriceRange from "../PriceRange/PriceRange";

const MutiSelectFilter = () => {
  const sizeList = [
    { label: "28", value: "28" },
    { label: "30", value: "30" },
    { label: "32", value: "32" },
    { label: "34", value: "34" },
    { label: "36", value: "36" },
    { label: "38", value: "38" },
    { label: "40", value: "40" },
  ];

  const brandList = [
    { label: "Addidas", value: "addidas" },
    { label: "Puma", value: "puma" },
    { label: "Nike", value: "nike" },
  ];

  const typeList = [
    { label: "Shirt", value: "Shirt" },
    { label: "Jeans", value: "Jeans" },
    { label: "Shorts", value: "Shorts" },
  ];

  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);
  const [type, setType] = useState([]);

  return (
    <div className={classes.MutiSelectFilter}>
      <h4>Fashion Collection</h4>
      <div className={classes.Filter}>
        <div>
          <h6>Size</h6>
          <MultiSelect
            className={classes.Select}
            options={sizeList}
            value={size}
            onChange={setSize}
            labelledBy={"Size"}
          />
        </div>
        <div>
          <h6>Brand</h6>
          <MultiSelect
            className={classes.Select}
            options={brandList}
            value={brand}
            onChange={setBrand}
            labelledBy={"Brand"}
          />
        </div>
        <div className={classes.PriceRange}>
          <PriceRange />
        </div>
        <div>
          <h6>Type</h6>
          <MultiSelect
            className={classes.Select}
            options={typeList}
            value={type}
            onChange={setType}
            labelledBy={"Type"}
          />
        </div>
        <div>
          <h6>Sort</h6>
          <select className={classes.SortBy}>
            <option  id="highToLow">Price: High to Low</option>
            <option  id="lowToHigh">Price: Low to High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MutiSelectFilter;
