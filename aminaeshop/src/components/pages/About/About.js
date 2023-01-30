import React, { useState } from "react";
import "./About.css";

function About() {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <section className="about">
      <div className="row">
        <div className="column">
          <div className="about-img"></div>
        </div>

        <div className="column">
          <div className="tabs">
            <div
              className={
                toggleTab === 1 ? "single-tab active-tab" : "single-tab"
              }
              onClick={() => toggleState(1)}
            >
              <h2>About</h2>
            </div>

            <div
              className={
                toggleTab === 2 ? "single-tab active-tab" : "single-tab"
              }
              onClick={() => toggleState(2)}
            >
              <h2>Skills</h2>
            </div>

            <div
              className={
                toggleTab === 3 ? "single-tab active-tab" : "single-tab"
              }
              onClick={() => toggleState(3)}
            >
              <h2>Experience</h2>
            </div>
          </div>

          <div className="tab-content">
            {/* About Content */}

            <div
              className={toggleTab === 1 ? "content active-content" : "content"}
            >
              <h2>My Story</h2>
              <p>
                I am a Software Developer that has 3 years of experience in
                producing Full Stack Website for clients. I am currently in my
                3rd year in the Honours of BTech program at Seneca College. This
                year I am hoping to elevate my general skills and to learn more
                about how I can apply my skills in the real world. My interests
                are Front and Back End Development. I also love creating mobile
                application and my aim to learn more about machine learning this
                year.
              </p>
              <h3>
                I Am Web Designer And Developer Having 3 Years Of Experience
              </h3>
              <p>
                I am looking to improve my skills everyday by tackling new
                languages and frameworks. I am looking forward to joining to
                organization to improve my skills and put them to the test.
              </p>
            </div>

            {/* Skills Content */}

            <div
              className={toggleTab === 2 ? "content active-content" : "content"}
            >
              <h2>Skills</h2>
              <p>
                My current progress level is changing as I aim to reach the full potential when it comes to my technical 
                skills as a software developer. These are my progress levels for the languages I use the most.
              </p>

              <div className="skills-row">
                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>C++</h3>
                    <div className="progress">
                      <div className="progress-bar">
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Java</h3>
                    <div className="progress">
                      <div className="progress-bar Java">
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Javascript</h3>
                    <div className="progress">
                      <div className="progress-bar Javascript">
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Python</h3>
                    <div className="progress">
                      <div className="progress-bar Python">
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Content */}

            <div
              className={toggleTab === 3 ? "content active-content" : "content"}
            >
              <div className="exp-column">
                <h3>Web Developer</h3>
                <span>2019-Present</span>
                <p>
                  I began learning about software development when I graduated
                  High School in 2019. I first picked up Game Maker Language by
                  trying to create a modified version of my favourite game,
                  Undertale. However, I quickly became interested in developing
                  website and learning about different ways to style them using
                  HTML and CSS.
                </p>
              </div>

              <div className="exp-column">
                <h3>Key Holder</h3>
                <span>2020-2022</span>
                <p>
                  I was a Keyholder at Roots. This position was essentially a
                  store manager positon. I gained a lot of experience in
                  conflict management, how to manage a team and how to meet
                  everyones need and how to adapt in a high pressure setting.
                </p>
              </div>

              <div className="exp-column">
                <h3>Retail Associate</h3>
                <span>2017-Present</span>
                <p>
                  I have had experience working in retail since High school. It
                  has taught me about how important soft skills when working
                  with a team to reach a similar goal. I believe retail has
                  taught me the importance of time management and how to
                  properly communicate ideas to your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
