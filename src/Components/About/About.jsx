import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="wrapper"> 
        <article>
          <div className="title">
            <h3>intor</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Space Watch & Catch</h4>
            <p>
            Satellites in orbit share near-Earth space with millions of fast-moving and dangerous debris objects. From tiny fragments millimetres in size to entire satellites no longer working, no longer controlled, roaming the space highways, each debris piece travels many kilometres per second. Any impact with one of these objects threatens to atleast impair the functioning of a working spacecraft, or at worst destroy it altogether, creating ever more debris
            </p>
          </div>
          <div className="title" id="project-details">
            <h3>Project Details</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">How does it work?</h4>
            <p>
            THE PLATFORM AND THE SPACE PROBE WORK THROUGH TWO-WAY MONITORING (FROM EARTH - ALIVE IN NEAR-EARTH SPACE) OF SPACE DEBRIS, IDENTIFYING AND CLASSIFYING THEM BY DANGER AND SIZES IN ORDER TO SEND ALERTS AND WARNINGS TO ALL SATELLITES AND SPACE AGENCIES TO TAKE CAUTION AND NOT TO COLLIDE WITH THAT DEBRIS
            </p>
            <p>
            CONTROLLING THE GROWTH OF SPACE DEBRIS.
_ SEND ALERTS AND WARNINGS TO ALL SATELLITES AND SPACECRAFT.
REDUCING SPACE DEBRIS IN NEAR-EARTH ORBIT.
_ MANUFACTURE OF A CARBON FIBER SHIELD THAT PROTECTS SATELLITES AND VEHICLES WHILE WARNING AND ALERTING ABOUT THE PRESENCE OF SPACE DEBRIS AND MINIMIZING POTENTIAL DAMAGE.
_ ALL AGENCIES AND INSTITUTIONS SHOULD COME TOGETHER TO BE ONE HAND IN ORDER TO PRESERVE THE NEAR-EARTH SPACE AND REDUCE SPACE DEBRIS IN IT

            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">The Value</h4>
            <p>
            CONTROLLING THE INCREASE IN SPACE DEBRIS WITH SENDING AN ALERT AND WARNING TO ALL SATELLITES IN THE EVENT OF INSTANTANEOUS PASSAGE OF SPACE DEBRIS AND PREPARING TO MANEUVER FOR THAT CRASH ACCORDING TO ITS SIZE AND INCREASING SECURITY AND SAFETY MEANS TO PROTECT THE SATELLITES FROM DAMAGE
            </p>
            <p>
            THE DANGER OF SPACE DEBRIS AND ITS NEGATIVE IMPACT ON SPACE VEHICLES AND SATELLITES, WITH THE FEW AGENCIES CONCERNED WITH THE CLEANLINESS OF THE NEAR-EARTH SPACE FROM THAT DEBRIS. WE AIM TO CREATE AN IDEA THAT REPRESENTS MY COUNTRY, THE KINGDOM OF SAUDI ARABIA, TO SOLVE THIS PROBLEM WITH THE COOPERATION AND SOLIDARITY OF ALL ORGANIZATIONS AND AGENCIES
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
