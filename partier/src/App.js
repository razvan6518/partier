import NavigationBar from './components/layout/NavigationBar';
import {Route, Routes} from "react-router-dom";

import Theater from "./pages/Theater";
import Restaurants from "./pages/Restaurants";
import Bars from "./pages/Bars";
import AllEvents from "./pages/AllEvents";
import Services from "./pages/Services";
import FooterPage from "./components/layout/Footer";



function App() {
    return (
        <div>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<AllEvents />} exact/>
                <Route path="/theater" element={<Theater />} exact/>
                <Route path="/restaurants" element={<Restaurants />} exact/>
                <Route path="/bars" element={<Bars />} exact/>
                <Route path="/services" element={<Services />} exact/>
            </Routes>
            <FooterPage/>
        </div>
    );
}

export default App;