import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Color(props) {
  const { colorData, setColor } = props;

  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <ul className="colors ps-0">
        {/* console.log(colorData); */}
        {colorData &&
          colorData?.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setColor(item?._id);
                  handleItemClick(item);
                }}
                key={index}
                style={{
                  backgroundColor: item?.title,
                  // outline: selected === true ? "2px solid black" : "none",
                  // outlineOffset: "2px",
                }}
                className={`color-item ${
                  selectedItem === item ? "selected" : ""
                }`}
              ></li>
            );
          })}
      </ul>
    </>
  );
}

export default Color;
