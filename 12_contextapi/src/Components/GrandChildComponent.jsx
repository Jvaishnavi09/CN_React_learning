import { useContext } from "react";
import { colorContext } from "../context";
const GrandChildComponent = () => {
  const value = useContext(colorContext);
  console.log(value);
  return (
    <h1 style={{ color: value }}>Color:{value}</h1>
    // <colorContext.Consumer>
    //   {(value) => <p style={{ color: value.color }}>Color: {value.color}</p>}
    // </colorContext.Consumer>
  );
};

export default GrandChildComponent;
