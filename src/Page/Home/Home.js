import React from 'react';
import njupt from '../Image/NJUPT.jpg';
import Slider from './Slider/Slider';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src={njupt} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;