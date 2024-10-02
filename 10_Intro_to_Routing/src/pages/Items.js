import { Link } from "react-router-dom";
export const items = [
  { name: "apple", ruppes: "100" },
  { name: "Mango", ruppes: "120" },
  { name: "Orange", ruppes: "130" },
  { name: "PineApple", ruppes: "140" },
  { name: "Grapes", ruppes: "150" },
];
function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.ruppes}>
                <Link to={"items/" + item.ruppes}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default Items;
