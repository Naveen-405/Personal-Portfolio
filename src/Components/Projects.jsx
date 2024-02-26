import React from "react";

const Projects = () => {
  return (
    <div className="container bg-light projects p-3" id="projects">
      <ul className="nav nav-tabs  d-flex justify-content-center" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active fw-bold"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            MERN
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fw-bold"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Data Science
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fw-bold"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Other'S
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent" >
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container" >
            <div className="row">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card" >
                    <img src="https://media.istockphoto.com/id/1473519355/photo/graduated-cap-with-coins-on-yellow-background-savings-for-education-or-financial-literacy.jpg?b=1&s=612x612&w=0&k=20&c=HcIQPPm9Dt3xgdquZnN4xKOuWrZ-EVQGTsbjtiBIPxQ=" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">STATE SCHOLARSHIP PROVIDER WEB</h5>
                      <p className="card-text">
                        Designed an advanced scholarship system for students,
                        institutions, and the State Scholarship Provider admin,
                        ensuring seamless interactions,real-time updates, and
                        efficient management.Employed tech stacks including 
                        <b>MongoDB, React js, Node.js, Express js</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://media.istockphoto.com/id/1324465031/photo/high-angle-view-close-up-asian-woman-using-meal-delivery-service-ordering-food-online-with.jpg?b=1&s=612x612&w=0&k=20&c=q37OubXMoBHaz-wcHqDtCt0NbegMRjVrtN_R8QcSgGQ=" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        ZOMATO PULSE: THROB OF EPICUREAN DELIGHTS
                      </h5>
                      <p className="card-text">
                        <li>
                          Created a customized dining preferences filter page
                          forthe website, enhancing user experience and
                          increasing customer engagement.
                        </li>
                        <li>
                          Increase in mobile conversions and boost in
                          overall online sales revenue.Leveraged tech stacks
                          including <b>MongoDB, Express js, React js, and Node.js.</b>
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">YUMMY RESTAURANT WEB</h5>
                      <p className="card-text">
                        <li>
                          Developed and enhanced a user-friendly restaurant web
                          application – ”Elevate Your Dining
                          Experience,”yielding a substantial upswing in
                          overall user satisfaction and engagement.
                        </li>
                        <li>
                          Consolidated event planning, Minimizing coordination
                          time by 30%, facilitated tailored elaborations for
                          seamless and memorable guest experiences.Employed tech
                          stacks: <b>HTML, CSS, Bootstrap, and Javascript</b>
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://media.istockphoto.com/id/1322517295/photo/cyber-security-it-engineer-working-on-protecting-network-against-cyberattack-from-hackers-on.jpg?b=1&s=612x612&w=0&k=20&c=TFrfri-RTBGu6sB-V3oCcg-BiR-1icf_fnWajOF_75g=" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        RESIDENTIAL COMMUNITY APARTMENT (RCA)
                      </h5>
                      <p className="card-text">
                        <li>
                          Established and implemented transformative RCA
                          technology,revolutionizing apartment living by
                          streamlining check-in processes, managing visitors and
                          vehicles, coordinating home services, and enhancing
                          communication between residents and administrators
                          reduced administrative workload
                        </li>
                        <li>
                          Improved resident satisfaction Used tech
                          stacks:<b> HTML, CSS, Bootstrap, Javascript, PHP and
                          MySQL</b>
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="container">
            <div className="row">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <img src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=612x612&w=0&k=20&c=bpQMsH07ziELXla0SZJt84-w0JkxsVXs05c7T2Iygks=" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        IBM- “NALIYA THIRAN” ”GLOBAL SALES DATA ANALYTICS”
                      </h5>
                      <p className="card-text">
                        <li>
                          Led a project achieving a substantial 15% improvement
                          in enhancing and consolidating end-to-end service
                          processes, strategically restructuring communication
                          channels across 10 departments.
                        </li>
                        <li>
                          Achieved a 75% reduction in paperwork through refined
                          workflows
                        </li>
                        <li>
                            Tech stacks: <b>Data visualization, Data analysis, Python</b>
                        </li>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <img src="https://media.istockphoto.com/id/1542269995/photo/the-person-scans-fingerprint-biometrics-identity-to-confirm-smart-connection-on-the-cloud.jpg?b=1&s=612x612&w=0&k=20&c=OosmSHsdm4w5K8kWFGuYpICeR6QwWMWS_lKYRrji08w=" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        Offline Signature Verfication Using Neural Network
                      </h5>
                      <p className="card-text">
                        <li>
                          We have developed a project to check whether the
                          signature is genuine or forgery .we have achieved this
                          by developing a neural network.
                        </li>
                        <li>
                          Tech stacks: <b>Python, Pandas, Keras, Tensorflow, CNN</b>
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="container">
            <div className="row">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <img src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">FLIPKART PRICE EXTRACTION</h5>
                      <p className="card-text">
                        <li>
                          Spearheaded the development of a Python-based web
                          scraping solution utilizing Beautiful Soup and
                          Selenium to streamline price extraction from Flipkart,
                          leading to a significant enhancement in data retrieval
                          and analysis efficiency.
                        </li>
                        <li>
                             Utilized tech stacks:<b>Web Scraping, Python.</b>
                        </li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
