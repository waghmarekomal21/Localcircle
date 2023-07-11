
import React from 'react';


function Download() {
  return (
    <div id="Download" className="grid grid-cols-1 md:grid-cols-2 gap-6 flex flex-col space-y-1 px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 flex flex-col space-y-1 px-8 py-12">
        <div className="py-8 p-8 flex justify-center">
          <img src="src/assets/download.png" alt="About image" className="w-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-8">
        <div className="py-12 mt-12 mx-8">
          <h2 className="font-serif mb-4 text-purple-800">
            <p className="text-5xl font-bold py-2">Download and Start Using!</p>
          </h2>
          <p className="text-black-800 font-serif text-2xl">
            LocalCircle unveils a world of possibilities right at your doorstep. Say goodbye to generic shopping experiences and embrace the diversity of your local neighbourhood.
          </p>
          <p className="text-black-800 font-serif text-2xl">
            Our platform provides a comprehensive directory of local vendors, encompassing everything from daily groceries to industrial items, talented artisans to skilled service providers.
          </p>
          <p className="text-black-800 font-serif text-2xl">
            Embark on a journey to explore the richness and uniqueness of your community, uncovering hidden treasures that make it truly special.
          </p>

<div className="py-4 text-gray-800 font-bold font-serif text-2xl">Coming Soon...</div>
          <div className="flex space-x-4">
          <a href="#" className="mt-4 inline-flex items-center justify-center bg-gradient-to-r from-yellow-800 via-purple-500 to-cyan-500 text-black font-serif font-bold py-2 px-4 rounded" style={{ height: '10%' }}>
          <img src="src/assets/app-store.png" alt="appstore image" className="w-50" />
</a>
            <a href="#" className="mt-4 inline-flex items-center justify-center  bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-600 text-black font-serif font-bold py-2 px-4 rounded" style={{ height: '10%' }}>
            <img src="src/assets/play-store.png" alt="playstore image" className="w-50" />
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
=======
import React from 'react';
import appStoreIcon from 'path/to/app-store-icon.png';
import { FaApple } from 'react-icons/fa';

function Download() {
  return (
    <div id="About" className="grid grid-cols-1 md:grid-cols-2 gap-6 flex flex-col space-y-1 px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 flex flex-col space-y-1 px-8 py-12">
        <div className="py-8 p-8 flex justify-center">
          <img src="src/assets/download.png" alt="About image" className="w-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-8">
        <div className="py-12 mt-12 mx-8">
          <h2 className="font-serif mb-4 text-purple-800">
            <p className="text-5xl font-bold py-2">Download and Start Using!</p>
          </h2>
          <p className="text-black-800 font-serif text-2xl">
            LocalCircle unveils a world of possibilities right at your doorstep. Say goodbye to generic shopping experiences and embrace the diversity of your local neighbourhood.
          </p>
          <p className="text-black-800 font-serif text-2xl">
            Our platform provides a comprehensive directory of local vendors, encompassing everything from daily groceries to industrial items, talented artisans to skilled service providers.
          </p>
          <p className="text-black-800 font-serif text-2xl">
            Embark on a journey to explore the richness and uniqueness of your community, uncovering hidden treasures that make it truly special.
          </p>

<div className="py-4 text-gray-800 font-bold font-serif text-2xl">Coming Soon...</div>
          <div className="flex space-x-4">
          <a href="#" className="mt-4 inline-flex items-center justify-center bg-gradient-to-r from-yellow-800 via-purple-500 to-cyan-500 text-black font-serif font-bold py-2 px-4 rounded" style={{ height: '10%' }}>
          <img src="src/assets/app-store.png" alt="appstore image" className="w-50" />
</a>
            <a href="#" className="mt-4 inline-flex items-center justify-center  bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-600 text-black font-serif font-bold py-2 px-4 rounded" style={{ height: '10%' }}>
            <img src="src/assets/play-store.png" alt="playstore image" className="w-50" />
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
>>>>>>> 33766db0efb8c2c55b050c6ce4a5fe58b0bf3199
