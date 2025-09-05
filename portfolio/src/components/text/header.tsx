import React from "react"
import './text.css'

type HeaderProps = {
    children: React.ReactNode;
}

const Header = ({children}: HeaderProps) => {
    return(
        <>
            <h1 className="header">{children}</h1>
        </>
    );
}

export default Header