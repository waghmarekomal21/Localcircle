import React from 'react';

function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex flex-col space-y-1 px-8">
    <div className="py-12 px-8 mt-12 mx-8">

      <h2 className=" font-serif  mb-4 text-purple-800"><p className='text-7xl font-bold py-2'>LocalCircle</p>
<p className='text-4xl font-bold py-2' >Promoting Local Prosperity </p>
<p className='text-4xl font-bold text-black py-2'>Unlock Your Vicinity's Potential</p></h2>
      <p className="text-gray-800">Welcome to LocalCircle, the revolutionary solution that is reshaping the way local vendors and customers connect. We have developed an innovative IoT and digital platform designed to empower economic growth by helping local businesses flourish and enabling customers to discover and enjoy the unique offerings in their vicinity.</p>
      <a href="menu.html"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-serif font-bold py-2 px-4 rounded">View
        Menu</a>
    </div>
    <div className="py-8 p-8">
      <img src="about.png" alt="Cafe Image" className="float-right h-80 w-96"/>
    </div>
    </div>
  
  );
}

export default AboutUs;
