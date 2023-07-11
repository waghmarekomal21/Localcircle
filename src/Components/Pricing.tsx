import React from 'react'

function Pricing() {
  return (
    <div className="demo" id="pricing">
   <p className="py-6 text-center">Embrace the fusion of possibilities with our unique options curated for your advantage.

   </p>
    <div className="container">
      <p> </p>
        <div className="row py-0">
           
            <div className="col-md-3 col-sm-6">
                <div className="pricingTable1">
                    <div className="pricingTable1-header">
                      <h3 className="title"> सर्वोदय </h3>
                      <h3 className="py-3"> Sarvoday</h3>
                    </div>
                    <div className="price-value">
                        <span className="amount">₹ 600</span>
                        {/* <!-- <span className="duration">for 30 days</span> --> */}
                    </div>
                    <ul className="pricing-content">
                        <li>Validity Days: 30</li>
                        <li>.</li>
                      
                    </ul>
                    <div className="pricingTable1-signup">
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable2 purple">
                  <div className="pricingTable2-header">
                    <h3 className="title"  > आशीर्वाद </h3>
                        <h3 className="py-3">Aashirwad </h3>
                  </div>
                  <div className="price-value">
                      <span className="amount">₹ 1,728</span>
                      {/* <!-- <span className="duration">for 90 days </span> --> */}
                  </div>
                  <ul className="pricing-content">
                      <li>Validity Days: 90</li>
                      <li>4% Discount Included</li>
                  
                  </ul>
                  <div className="pricingTable2-signup">
                      <a href="#">Sign Up</a>
                  </div>
              </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="pricingTable3 purple">
                <div className="pricingTable3-header">
                  <h3 className="title"  >मंगलमय </h3>
                  <h3  className="py-3">Mangalmay</h3>
                </div>
                <div className="price-value">
                    <span className="amount">₹ 3,312</span>
                    {/* <!-- <span className="duration">per month</span> --> */}
                </div>
                <ul className="pricing-content">
                  <li>Validity Days: 180</li>
                  <li>8% Discount Included</li>
                </ul>
                <div className="pricingTable3-signup">
                    <a href="#">Sign Up</a>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="pricingTable4">
              <div className="pricingTable4-header">
                <h3 className="title"  > निरंतर </h3>
                <h3 className="py-3"> Nirantar</h3>
              </div>
              <div className="price-value">
                  <span className="amount">₹ 6,424</span>
                  {/* <!-- <span className="duration">per month</span> --> */}
              </div>
              <ul className="pricing-content">
                <li>Validity Days: 365</li>
                <li>12% Discount Included</li>
              </ul>
              <div className="pricingTable4-signup">
                  <a href="#">Sign Up</a>
              </div>
          </div>
      </div>
        </div>
    </div>
</div>
  )
}

export default Pricing