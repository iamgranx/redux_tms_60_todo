import React from "react";
import { useTheme } from "styled-components";


const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme} type="button">push</button>
        </div>
    )
};

export default Header;