import React from '../../../node_modules/react';
import './AboutView.scss';
import StdButton from '../shared/StdButton/StdButton';
import SectionHeading from '../shared/SectionHeading/SectionHeading'

function AboutView() {
  return (
    <section className="aboutContainer">
      <SectionHeading text="About Visualize"/>
      <StdButton text="Git repo"/>
 
    </section>
  );
}

export default AboutView;
