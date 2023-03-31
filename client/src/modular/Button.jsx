import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Button({
  content,
  href,
  onClick,
  styleOverride,
}) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  let buttonStyle = 'w-full h-14 p-2 px-3';
  buttonStyle += styleOverride;
  if (isDarkTheme) {
    buttonStyle += ' bg-primary-300 hover:bg-primary-300/95 text-black standard-border-dark';
  } else {
    buttonStyle += ' bg-secondary-300 hover:bg-secondary-300/95 text-white standard-border';
  }

  let renderButton = (
    <button type="button" href={href} onClick={onClick} className={buttonStyle}>
      {content}
    </button>
  );

  if (href) {
    renderButton = (
      <a href={href} onClick={onClick} className={buttonStyle}>
        {content}
      </a>
    );
  }

  return (
    <div>
      {renderButton}
    </div>
  );
}
Button.propTypes = {
  content: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.any.isRequired,
  styleOverride: PropTypes.string,
};

Button.defaultProps = {
  href: undefined,
  styleOverride: '',
};

export default Button;