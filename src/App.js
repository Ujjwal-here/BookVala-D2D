import React from "react";
import "./App.css";
import { v4 } from "uuid";
import { AiFillDownCircle } from "react-icons/ai";
import { MdClear } from "react-icons/md";

function App() {
  const [clr, setClr] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHover, setIsHover] = React.useState(0);
  const colors = [
    { id: v4(), name: "Red", bg: "#FFCCCC", clr: "#FF3333" },
    { id: v4(), name: "Green", bg: "#CFE6C8", clr: "#80BD6C" },
    { id: v4(), name: "Blue", bg: "#B9CDF6", clr: "#1247B3" },
    { id: v4(), name: "Yellow", bg: "#FCFDCC", clr: "#F5F833" },
    { id: v4(), name: "Slate", bg: "#DCDDDE", clr: "#73757A" },
    { id: v4(), name: "Orange", bg: "#FFD4C9", clr: "#FF8B6E" },
    { id: v4(), name: "Ocean", bg: "#E6FBFC", clr: "#3AE1E8" },
    { id: v4(), name: "Silver", bg: "#FAFAFA", clr: "#D9D9D9" },
    { id: v4(), name: "Forest", bg: "#D0DFCF", clr: "#417D3D" },
  ];

  console.log(isHover);

  const onSelectHandler = (name, id, bg, textColor) => {
    const exist = clr.find((item) => item.name === name);
    if (exist === undefined) {
      setClr((prev) => [...prev, { name, id, bg, textColor }]);
    }
  };

  const onHoverMouse = (index) => {
    setIsHover(index);
  };

  const onClearHandler = (id) => {
    setClr(clr.filter((item) => item.id !== id));
  };


  return (
    <div className="main-container">
      {clr.length === 0 ? (
        <span>Choose color from dropdown</span>
      ) : (
        <div style={{ flexGrow: "1", backgroundColor: "white" }}>
          {clr.map((item) => (
            <span
              style={{
                backgroundColor: `${item.bg}`,
                color: `${item.textColor}`,
              }}
              key={item.id}
              className="colors"
            >
              {item.name}
              <MdClear onClick={() => onClearHandler(item.id)}></MdClear>
            </span>
          ))}
        </div>
      )}

      <MdClear onClick={()=>setClr([])}></MdClear>
      <div></div>
      <AiFillDownCircle onClick={() => setIsOpen((prev) => !prev)}>
        &nabla;
      </AiFillDownCircle>
      {isOpen ? (
        <ul>
          {colors.map((color, index) => {
            return (
              <li key={color.id}>
                <p
                  onClick={() =>
                    onSelectHandler(color.name, color.id, color.bg, color.clr)
                  }
                  onMouseEnter={() => onHoverMouse(index)}
                  style={{
                    backgroundColor: `${
                      index === isHover ? color.bg : "white"
                    }`,
                    color: `${color.clr}`,
                  }}
                >
                  {color.name}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
