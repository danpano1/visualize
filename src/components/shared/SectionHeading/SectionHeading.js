import React from '../../../../node_modules/react';
import './SectionHeading.scss';

function SectionHeading(props) {
  return (
    <div>
        <h2 className="section-heading"> {props.text} </h2>
    </div>
  );
}

export default SectionHeading;
