import React from "react";
import Nav from 'components/Nav/Header'
import Footer from 'components/Footer/Footer'
import AboutHero from './AboutHero'

const About = () => {
  return (
    <div className='h-screen'>
      <Nav />
      <AboutHero />
      <div className="relative bg-white min-h-0 h-auto">
        <div className='w-9/12 text-center m-auto'>
            <h1 className='font-display text-4xl m-12'>Our Humble Beginnings</h1>
            <p className='font-body leading-loose'>
            In 2017, Justin Caovan lived in a small, boring apartment in Long Beach, CA while attending university.
            His first year without having to share a room, he decided to spruce it up and make it his own. At a local swapmeet Justin picked up several houseplants
            including a spider plant, golden pothos, and a couple of succulents. The new plants instantly brightened up his dull room and he was soon hooked and continued to purchase more.
            Over time, his plants outgrew his tiny room so he decided to propogate, pot, and gift them to his friends and family. Word got out Justin was giving away free plants so the
            local broke college students jumped at the opportunity to grab one for their living space. Met with an overwhelming demand, he employed the help of his roommates to operate
            a mini nursery out of their apartment, thus creating Bloom.
            </p>
            <p className='font-body leading-loose'>
            
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;