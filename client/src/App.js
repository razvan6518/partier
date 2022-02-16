import NavigationBar from './components/layout/NavigationBar';
import {Route, Routes} from "react-router-dom";

import Theater from "./pages/Theater";
import Restaurants from "./pages/Restaurants";
import Bars from "./pages/Bars";
import AllEvents from "./pages/AllEvents";
import Services from "./pages/Services";
import FooterPage from "./components/layout/Footer";
import Event from "./pages/Event";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AddEvent from "./pages/AddEvent";

function App() {
    return (
        <div>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<AllEvents/>} exact/>
                <Route path="/event/:eventId" element={<Event/>} exact/>
                <Route path="/theater" element={<Theater/>} exact/>
                <Route path="/restaurants" element={<Restaurants/>} exact/>
                <Route path="/register" element={<RegisterPage/>} exact/>
                <Route path="/login" element={<LoginPage/>} exact/>
                <Route path="/add-event" element={<AddEvent/>} exact/>
            </Routes>
            <FooterPage/>
        </div>
    );
}

export default App;