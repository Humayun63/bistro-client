import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-slate-700 bg-opacity-40 w-8/12 py-16 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl tracking-widest text-white font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;