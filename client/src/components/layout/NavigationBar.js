import {Link} from 'react-router-dom';
import classes from './NavigationBar.module.css'

function NavigationBar() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'><h1>Partier</h1></Link>
                    </li>
                    <li>
                        <Link to='/theater'>Theater</Link>
                    </li>
                    <li>
                        <Link to='/restaurants'>Restaurants</Link>
                    </li>
                    <li>
                        <Link to='/bars'>Bars</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;