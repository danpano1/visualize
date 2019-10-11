import React from '../../../node_modules/react';
import './WelcomeView.scss';
import StdButton from '../shared/StdButton/StdButton';

function WelcomeView() {
  return (
    <section className="welcomeContainer">
        <h1 className="main-heading">Algorithms visualisation</h1>
        <StdButton text="Get started"/>
    </section>
  );
}

export default WelcomeView;
