import React from "react";
import './SynthCard.css';

export const SynthCard = ({imgUrl, onClick, isSelected, index, title, onSelected, selected}) => {
  const baseStyle = {backgroundImage: `url(${imgUrl})`}
  console.log(isSelected)
  const style = isSelected ? Object.assign({}, baseStyle, {border: '1px solid blue'}): baseStyle
  return (
    <button
      onClick={() => {
          onSelected(index)
          onClick()

      }}
      style={style}
      className="card"
    >
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
        <div className="card-waves" />
      </div>
    </button>
  );
}  
