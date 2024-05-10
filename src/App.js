import React from 'react';
import './style.css';




export default function App() {
   const [counter, setCounter]  = React.useState(30);
   React.useEffect(() =>{
    if(counter) {
        setTimeout(() => {
            setCounter(counter - 1);
            
        }, 1000);
    }
   }, [counter])
    return (
    <div className='app'>

    <p>{counter}</p>
    </div>
    )
}