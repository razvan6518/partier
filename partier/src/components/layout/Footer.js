import classes from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.css';

function FooterPage() {
    // return (
    //     <div className={classes.footer}>
    //         <p>This is some content in sticky footer</p>
    //     </div>
    // );
    return (
        <div className= {`footer dark ${classes.footer}`}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3 className={classes.titles}>Support</h3>
                            <ul>
                                <li><a href="#">How do I pay?</a></li>
                                <li><a href="#">What if an event gets cancelled?</a></li>
                                {/*<li><a href="#">Hosting</a></li>*/}
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3 className={classes.titles}>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3 className={classes.titles}>Partier</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a
                            href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i
                            className="icon ion-social-snapchat"></i></a><a href="#"><i
                            className="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p className={`copyright ${classes.copyright}`}>Partier © 2021</p>
                </div>
            </footer>
        </div>

    )
}

export default FooterPage;