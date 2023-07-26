import './App.css';
import { useState } from "react";//useState se update kar skte hai..number badha skte hai 
import AnimalShow from "./AnimalShow";

//These lines import the necessary modules and files for the App component. The useState hook is imported from the react library.
//The AnimalShow component is imported from the AnimalShow.js file. The CSS file app.css is also imported.
function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}
//This code defines a function called getRandomAnimal. It generates a random animal by selecting a random element from the animals array.
//console.log(getRandomAnimal());
function App(){
    // const [count, setCount ] = useState(0);//use state ko zero se shuru kara hai
    const[animals,setAnimals] = useState([]);
    //This code defines the App component. It initializes a state variable called animals as an empty array using the useState hook. 
    //The setAnimals function is the corresponding setter function for updating the animals state.
    
    //useState 0 se shuru nahi hoga balki...ek array hai jisme jjayengi random animals ki values
    const handleClick=()=>{
        setAnimals([...animals,getRandomAnimal()])
        //This code defines a callback function called handleClick. When invoked, it uses the setAnimals function to update the animals state. 
        //It adds a randomly generated animal to the existing array of animals using the spread operator ....

        //setAnimals= normal setter function , ...animals - ek array jisme animals h
        //getRandomAnimal - sare animals ko ek saath lana animals me ke liye function
        // setCount(count+1);//count+1 kiya hai taaki badhta rahe 1,2,3 etc
    }
    const  renderedAnimals= animals.map((animal,index )=>{ //har animals jo array me hai usse map kar diya...
        //using map function ..we want to transform each element in the array into a  component
         return <AnimalShow type={animal} key={index}/>//animal jaare hai isiliye type animal
    });
    //This code uses the map function to transform each element in the animals array into an AnimalShow component. It assigns the result to the renderedAnimals variable. 
    //Each AnimalShow component is passed the type prop with the corresponding animal, and a unique key prop based on the index of the element.
    return (
    <div className="app">
        <button onClick={handleClick}> Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>   {/*// for showing animals on screen */}
        {/* <div>{animals}</div>picking animals at random and putting in that useState([]) array */}
       {/* <div>Number of Animals: {count}</div> */}
    </div>
    )
}
//This is the JSX code returned by the App component. It renders a <div> element with the class name 'app'. Inside this <div>, there is a <button> element with the text "Add Animal". 
//The onClick event handler is set to the handleClick function.

//Below the button, there is another <div> element with the class name 'animal-list'. Inside this <div>, the renderedAnimals variable is displayed, which contains the mapped AnimalShow components representing the animals.

export default App;
//This line exports the App component as the default export of the module, making it available for use in other files.


//this part explained more--
// const handleClick = () => {
//     setAnimals([...animals, getRandomAnimal()]);
//   };
//   The handleClick function is a callback function that gets executed when the "Add Animal" button is clicked. Here's how it works:
  
//   When the button is clicked, the handleClick function is triggered.
//   Inside the function, the setAnimals function is called to update the animals state.
//   To update the state, we create a new array using the spread operator .... This spread operator copies all the existing elements from the animals array into the new array.
//   We then append a randomly generated animal to the new array by calling the getRandomAnimal function.
//   The setAnimals function updates the animals state with the new array, which triggers a re-render of the component.
//   The newly added animal will be displayed in the list of animals on the screen.
//   In summary, each time the "Add Animal" button is clicked, the handleClick function generates a random animal and adds it to the animals state by updating the state using setAnimals. This allows us to dynamically add new animals to the list in the UI.

//=============================================================================
//And then finally, last big topic was building lists.

// So we went over list kind of quickly.

// We spoke about using a mapping function, which we're going to use very, very often whenever we are

// trying to build a list of elements to show to the user.

// So we kind of framed this map function inside of Apks as a sort of transformation step.

// We had said, okay, we've got an array of strings.

// We want to take each of these strings and somehow turn it into a component to show to the user.

// And that's what we made use of map.

// When we make use of map.

// Each element inside of this array is going to be passed one by one separately into that function.

// We then return a component.

// All those different components are going to be collected together, put into a brand new array and assigned

// to the rendered animals variable right here.

// And then we can freely show that variable inside of our x and that appear makes a list of components

// up here on the screen.

// So the exact pattern that you see right here for building a list, we are going to repeat many, many

// times throughout this course because again, we end up building lists inside of a tremendous number

// of applications.

// That's what the vast majority of all applications we ever build are really centered on.

// They show lists of data.