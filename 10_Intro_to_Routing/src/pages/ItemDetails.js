import React from "react";
import { useParams } from "react-router-dom";
import { items } from "./Items";

function ItemDetails() {
  const params = useParams();
  let decription = items.find((item) => item.ruppes === params.id);
  return (
    <>
      <h2>ITEM DETAILS : Ruppess {params.id}</h2>
      <h3>{decription.name}</h3>
    </>
  );
}
export default ItemDetails;
