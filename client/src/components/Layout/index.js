import React from "react";
import Navbar from "../Navbar"
class Layout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout