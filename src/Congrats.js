import React from 'react';

/**
 * Functional react componene tfor congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component
 */

export default (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>Congrats you guessed the word</span>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};
