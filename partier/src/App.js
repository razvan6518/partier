import NavigationBar from './components/layout/NavigationBar';
import {Route, Routes} from "react-router-dom";
import AllEventsPage from "./pages/AllEvents";


function App() {
    return (
        <div>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<AllEventsPage/>}/>
            </Routes>

        </div>
    );
}

export default App;