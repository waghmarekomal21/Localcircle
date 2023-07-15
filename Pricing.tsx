import React from 'react';


function Pricing() {
  return (
    <div>
      <div id="Pricing" className="demo" >
        <h1 className="text-center py-7 font-medium font-serif text-7xl text-purple-800">
          Your Plan, Your Way
        </h1>
        <div className="container">
          <p className="text-center py-7 font-medium font-serif text-3xl text-black">
            Experience the joy of a Blissful Commencement with our default enrollment option.
          </p>
          <div className="flex justify-center  max-w-sm mx-auto bg-gray-100 rounded-xl shadow-lg flex items-center ">
            <div className="pricing-card ">
              <div className="text-center font-medium text-3xl font-serif  p-4 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center  border-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600 ">
                <div>
                <div>शुभारंभ</div>
                <p className='text-center'>Shubharambh</p>
                </div>
                </div>
              <p className="text-center  text-5xl text-blue-800">₹ 2,499</p>
              <p className="text-center py-4 font-medium  font-serif text-2xl text-blue-800">Lifetime Onboarding Cost</p>
              <ul className="text-center marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 py-2">
              <li>Including Enrollment Charges</li>
                        <li>First 30 Days Free</li>
                        <li>₹ 100 Top-up Included</li>
              </ul>
              <div>
              {/* <button className="block mx-auto py-2 px-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600  text-white rounded-md hover:bg-purple-600">
              Sign Up
              </button> */}
              <a href="#" className="flex justify-center py-2 px-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600  text-white rounded-md hover:bg-white">
              Sign Up
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo" id="pricing2">
        <p className="py-6 text-center font-medium font-serif text-2xl text-black">
          Embrace the fusion of possibilities with our unique options curated for your advantage.
        </p>
        <div className="flex flex-col md:flex-row justify-between text-black font-bold">
        
          <div className="flex justify-center  max-w-sm mx-auto bg-gray-100 rounded-xl shadow-lg flex items-center  flex flex-row">
            <div className="pricing-card ">
              <div className="text-center font-medium text-3xl font-serif  p-4 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center  border-4 bg-gradient-to-r  from-lime-500 via-green-600 to-green-900 ">
                <div>
                <div>सर्वोदय</div>
                <p className='text-center'>Sarvoday</p>
                </div>
                </div>
              <p className="text-center  text-5xl text-blue-800">₹ 600</p>
              {/* <p className="text-center py-4 font-medium  font-serif text-2xl text-blue-800">Lifetime Onboarding Cost</p> */}
              <ul className="text-center marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 py-2">
              <li>Validity Days: 30</li>
                <li>Discount Included</li>
                        {/* <li>₹ 100 Top-up Included</li> */}
              </ul>
              <div>
              <a href="#"  className="flex justify-center py-2 px-6 bg-gradient-to-r  from-lime-500 via-green-600 to-green-900  text-white rounded-md hover:bg-purple-600">
              Sign Up
              </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center  max-w-sm mx-auto bg-gray-100 rounded-xl shadow-lg flex items-center  flex flex-row">
            <div className="pricing-card ">
              <div className="text-center font-medium text-3xl font-serif  p-4 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center  border-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-sky-900">
                <div>
                <div>आशीर्वाद</div>
                <p className='text-center'>Aashirwad</p>
                </div>
                </div>
              <p className="text-center  text-5xl text-blue-800">₹ 1,728</p>
              {/* <p className="text-center py-4 font-medium  font-serif text-2xl text-blue-800">Lifetime Onboarding Cost</p> */}
              <ul className="text-center marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 py-2">
              <li>Validity Days: 90</li>
                      <li>4% Discount Included</li>
                        {/* <li>₹ 100 Top-up Included</li> */}
              </ul>
              <div>
              <a href="#"  className="flex justify-center py-2 px-6 bg-gradient-to-r from-cyan-500 via-sky-500 to-sky-900  text-white rounded-md hover:bg-purple-600">
              Sign Up
              </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center  max-w-sm mx-auto bg-gray-100 rounded-xl shadow-lg flex items-center  flex flex-row">
            <div className="pricing-card ">
              <div className="text-center font-medium text-3xl font-serif  p-4 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center  border-4 bg-gradient-to-r from-pink-500 via-rose-500 to-rose-800 ">
                <div>
                <div>मंगलमय</div>
                <p className='text-center'>Mangalmay</p>
                </div>
                </div>
              <p className="text-center  text-5xl text-blue-800">₹ 3,312</p>
              {/* <p className="text-center py-4 font-medium  font-serif text-2xl text-blue-800">Lifetime Onboarding Cost</p> */}
              <ul className="text-center marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 py-2">
              <li>Validity Days: 180</li>
                  <li>8% Discount Included</li>
                        {/* <li>₹ 100 Top-up Included</li> */}
              </ul>
              <div>
              <a href="#"  className="flex justify-center py-2 px-6 bg-gradient-to-r from-pink-500 via-rose-500 to-rose-800  text-white rounded-md hover:bg-purple-600">
              Sign Up
              </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center  max-w-sm mx-auto bg-gray-100 rounded-xl shadow-lg flex items-center  flex flex-row">
            <div className="pricing-card ">
              <div className="text-center font-medium text-3xl font-serif  p-4 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center  border-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-800 ">
                <div>
                <div>निरंतर</div>
                <p className='text-center'>Nirantar</p>
                </div>
                </div>
              <p className="text-center  text-5xl text-blue-800">₹ 6,424</p>
              {/* <p className="text-center py-4 font-medium  font-serif text-2xl text-blue-800">Lifetime Onboarding Cost</p> */}
              <ul className="text-center marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 py-2">
              <li>Validity Days: 365</li>
                <li>12% Discount Included</li>
                        {/* <li>₹ 100 Top-up Included</li> */}
              </ul>
              <div>
              <a href="#"  className="flex justify-center py-2 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-800  text-white rounded-md hover:bg-purple-600">
              Sign Up
              </a>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Pricing;