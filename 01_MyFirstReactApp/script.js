//Add a image to the webpage
const reactimage = React.createElement(
  "img",
  { src: "https://files.codingninjas.in/coding-ninjas-24647.png" },
  null
);
// ReactDOM.createRoot(document.getElementById("root")).render(reactImage);

//Add heading , p and list
const PageContent = (
  <React.fragment>
    <h1>About React</h1>
    <h4>Features : </h4>
    <ul>
      <li> Adds interactivity to the webpage</li>
      <li> Reacts is composable and declarative </li>
      <li> helps in creating SPA(Single Page Applications)</li>
    </ul>
  </React.fragment>
);
//ReactDOM.createRoot(document.getElementById("root")).render(pageContent);

const Name = () => <h4>Hello ! how are you ?</h4>;

//Creating a functional Component,Embedding js inside jsx
function App() {
  var name = "vaishnavi";
  var age = 24;
  var isActive = true; // Booleans will not be printed
  let dob = null; // Null and undefined values will not be printed
  let gender;
  const cars = ["BMW", "Benz", "Porshe", "Lambo", "Audi", "Ferrai"];
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const obj = {
    name: "vaishnavi",
    age: 24,
    gender: "female",
  };
  return (
    <>
      <h1>About React</h1>
      <h4>Features : </h4>
      <ul>
        <li> Adds interactivity to the webpage</li>
        <li> Reacts is composable and declarative </li>
        <li> helps in creating SPA(Single Page Applications)</li>
      </ul>
      <p>
        Hi ! My name is {name} {age}, and active :{isActive} ,DOB:{dob},{gender}{" "}
        array : {cars}{" "}
        {/* Array can be included directly elements will rendered continuosly */}{" "}
        Object : {obj.name}
        {/*  cannot add object inside the jsx,but can be rendered using {Obj.propertyName} */}
      </p>
      {/*  To render the array as we needed use map fn of js  */}
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
      {a
        .filter((value, index) => value % 2 == 0)
        .map((value, index) => (
          <p key={index}>{value}</p>
          // to avoid the warning that each child should have unique keys
        ))}
    </>
  );
}
//ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// TO render two components at the Time
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <Name />
//   </>
// );

//calling functions ,expressions inside jsx
const square = (a) => a ** 2;
function Fun() {
  return <h1>Output: {square(8)}</h1>;
}
//ReactDOM.createRoot(document.getElementById("root")).render(<Fun />);

//Displaying the object in the table form
function Table() {
  const obj = [
    {
      name: "john",
      age: 24,
      marks: 85,
    },
    {
      name: "jerry",
      age: 30,
      marks: 90,
    },
    {
      name: "Tom",
      age: 35,
      marks: 95,
    },
  ];
  return (
    <>
      <h1>Display Student Details</h1>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
          </tr>
        </thead>
        <tbody>
          {obj.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
// ReactDOM.createRoot(document.getElementById("root")).render(<Table />);

//Conditional Rendering
function CoditionalRendering() {
  const flag = true;
  if (flag == true) {
    return (
      <>
        <Table />
        <App />
      </>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  CoditionalRendering()
);

// Rendering using  Operators
const IMAGES = [
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
];

const Login = () => (
  <div>
    <h3>Login to Continue</h3>
    <form>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Login</button>
    </form>
  </div>
);

const Home = () => (
  <div>
    <h3>Welcome to home!</h3>
    <h5>Enjoy this catalog of pictures</h5>
    <p>{premiumComponent}</p>
    {IMAGES.map((i) => (
      <img key={i} src={i} />
    ))}
  </div>
);

// create premium account component here to render the button
const premiumComponent = <button>Buy Premium</button>;

const Appe = () => {
  let name;
  const isLoggedIn = true;

  return (
    <>
      {/* render data here  */}
      <h1> Hello {isLoggedIn ? (name = "John Doe") : (name = "Guest")}!</h1>
      {isLoggedIn ? <Home /> : <Login />}
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//rootElement.render(<Appe />);

// Event handler in JSX
let score = 0;
function increaseScore() {
  score += 1;
  rootElement.render(<App2 />);
}
const App2 = () => {
  return (
    <>
      <button onClick={increaseScore}>1</button>
    </>
  );
};
//rootElement.render(<App2 />);

//Event handler Example -2
let para = "Hello Ninjas ! I am here";
let button1 = "Show element below";
let button2 = "Hide element below";
let flag = false;
const setShow = () => {
  flag = !flag;
  console.log(flag);
  rootElement.render(<App3 />);
};

const App3 = () => (
  <>
    <h1>Coding Ninjas</h1>
    <button onClick={setShow}>{flag ? button2 : button1}</button>
    <p>{flag ? para : ""}</p>
  </>
);
rootElement.render(<App3 />);
