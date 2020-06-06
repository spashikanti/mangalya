import React from "react";
import { Link } from "react-router-dom";


class HomePage extends React.Component{
    render(){
        return(
        <>
        <div className="jumbotron">
            <h1 className="display-3">Jumbo heading</h1>
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2" />
            <p>More info</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="login" >
                    Login</Link>
            </p>
        </div>
        </>
        );
    }
}

export default HomePage;