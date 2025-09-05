import React from 'react';
import './text.css'

type TextboxProps = {
    children: React.ReactNode;
}

const Textbox = ({ children }: TextboxProps) => {
    return(
        <>
            <p className="textbox">{children}</p>
        </>
    );
}

export default Textbox