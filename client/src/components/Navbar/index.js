import React from "react";


function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-light">
     <a href="/">
       <h1>Cost City</h1>
     </a>
     {/* Toggle functionality???? */}
     <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
   </nav>
    );
}

export default Navbar;