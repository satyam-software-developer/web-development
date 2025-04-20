import React, { Component } from "react";

// Complete this Component
const ListItem = ({src,alt,href,bg}) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor:bg
      }}
    >
      <img src={src} alt={alt} />
      <a href={href}></a>
    </div>
  );
};

export default ListItem;
