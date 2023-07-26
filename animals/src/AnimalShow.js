import { useState } from 'react';
import './AnimalShow.css';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
//These lines import the necessary modules and SVG image files for the AnimalShow component. 
//The useState hook is imported from the react library. SVG image files (e.g., bird.svg, cat.svg, etc.) are imported using their respective paths. The CSS file AnimalShow.css is also importe

const svgMap={ //object of animals
    bird:bird,
    cat:cat,
    cow:cow,
    dog:dog,
    gator:gator,
    heart:heart,//heart ka picture yahis e neeche {heart} me jayega
    horse:horse
}
//This code defines an object called svgMap which maps animal types (keys) to their corresponding SVG image files (values).
// Each key-value pair represents the name of an animal (e.g., bird, cat, etc.) and the imported SVG image associated with it.

function AnimalShow ({type}){ //type is going to be cat , dog etc anything as wo app.js se aa raha hai(parent of animalshow.js in form of type={animal}) 

    const [clicks,setClicks] = useState(0);//use state dil ke liye....1 se start karo or add krte rho
    //This code defines a functional component called AnimalShow that takes a type prop as its input. 
    //Inside the component, it initializes a state variable called clicks using the useState hook. The initial value of clicks is 0, and the corresponding setter function is setClicks.
    const handleClick = ()=>{
        setClicks(clicks+1);//setclicks use krke clicks + 1;
    }
    //This code defines a callback function called handleClick. When invoked, it uses the setClicks function to update the value of clicks by incrementing it by 1.
 return <div className='animal-show' onClick={handleClick}>
    <img className='animal' alt="animal" src={svgMap[type]}/>  {/*
This is the JSX code returned by the AnimalShow component. It renders a <div> element with the class name 'animalshow'. The onClick event handler is set to the handleClick function.

Inside the <div>, there are two <img> elements. The first <img> element has the class name 'animal' and displays the SVG image associated with the type prop. 
The src attribute of the <img> element is set dynamically based on the type prop using the svgMap.

The second <img> element has the class name 'heart' and displays the heart SVG image (heart.svg). The src attribute is set directly to heart, as it doesn't depend on the type prop.
The style attribute is used to dynamically set the width of the heart image based on the number of clicks state. Each click increases the width by 10 pixels.

=========================================================================

So remember, type is going to be cat, bird, cow, whatever.

So we're going to take that string.

We're going to look at this object.

We're going to try to find some matching key value pair.

It's going to give us back a value that is one of these SVG keys and we're going to plug that SVG into

this image tag.

If this is all confusing right now, don't sweat. */}
    <img className="heart" alt="heart" src={heart} style={{width : 10+10*clicks +'px'}}/>
 </div>;
}
export default AnimalShow;
//This line exports the AnimalShow component as the default export of the module, making it available for use in other files.