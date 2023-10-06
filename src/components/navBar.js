import React, { useState } from "react";
import "../styles/navBar.css"

const NavBar = () => {

    const [showMenu, setShowmenu] = useState(false)

    console.log(showMenu)

    return (
        <>
            <div className="nav_container">
                <div className="nav_action_container">

                </div>
                <div className="nav_button_responsive">
                    <button onClick={() => { setShowmenu(!showMenu) }} className="nav_button_menu">Menu</button>
                </div>

                <div className={showMenu ? "show nav_menu_responsive" : "notShow nav_menu_responsive"}>
                    
                </div>
            </div>
        </>
    )
}

export default NavBar;