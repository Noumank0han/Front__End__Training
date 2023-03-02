import React from 'react'
import Navbar from './src/components/Navbar/Navbar';

const App = () => {
    return (
        <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center">
            <Navbar />
            <div className="flex flex-col justify-center text-center items-center">App
                <h2 className="text-white text-2xl font-medium"> Fashion Tips</h2>
                <h1 className="md:text-5xl text-3xl  text-white font-semibold py-5">
                    Items every woman should have
                </h1>
            </div>
        </section>
    );
};

