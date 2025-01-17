import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Icon(props) {
  const { className: classNameProp, name } = props;
  const className = classNames('fa', 'fa-fw', classNameProp, {
    [`fa-${name}`]: name,
  });

  return <i className={className} aria-hidden="true" />;
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  name: 'bell-o',
};
