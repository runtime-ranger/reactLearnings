import React from "react";
function App(){
    let isMorning =true;
    return(
        (isMorning?<h2>Good Morning</h2>:<h2>Good Evening</h2>)
    )
}
export default App;