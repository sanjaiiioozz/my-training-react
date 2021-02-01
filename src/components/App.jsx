import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


// className att can't be applied to custom components
function App(){
    return <div>
        <Header />
        <Note />
        <Footer />
    </div>
}

export default App;