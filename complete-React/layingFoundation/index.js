import React from "react"
import  ReactDOM from "react-dom/client"
import HeaderComponent from "./src/HeaderComponent.js"
import FooterComponent from "./src/FooterComponent.js"
import BodyComponent from "./src/BodyComponent.js"
const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </React.Fragment>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
