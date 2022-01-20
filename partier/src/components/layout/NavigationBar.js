import { Link } from 'react-router-dom';
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
                        <button>
                            <Link to='/theater'>Theater</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/restaurants'>Restaurants</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/bars'>Bars</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/services'>Services</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;