import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <a className="navbar-brand" href="/">
       Cost City
     </a>
     {/* Toggle functionality???? */}
     <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
   </nav>
    );
}

export default Nav;