import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-outline border-x-0 border-t-0 border-4 border-b-slate-800 mt-8 block mx-auto">{children}</button>
    );
};

export default Button;