import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary header-nav">
                <Link className="navbar-brand" to='/'><h1>Partier</h1></Link>
                <button className="btn-primary btn-lg nav-link">
                    <Link className="navbar-brand" to='/theater'>Theater</Link>
                </button>
                <button className="btn-primary btn-lg nav-link">
                    <Link className="navbar-brand" to='/restaurants'>Restaurants</Link>
                </button>
                <button className="btn-primary btn-lg nav-link">
                    <Link className="navbar-brand" to='/bars'>Bars</Link>
                </button>
                <button className="btn-primary btn-lg nav-link">
                    <Link className="navbar-brand" to='/services'>Services</Link>
                </button>
            </nav>
        </header>
    )
}

export default NavigationBar;