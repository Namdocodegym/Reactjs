import React from 'react';
import PropTypes from 'prop-types';

function Alert() {
  return (
    <div class="alert alert-warning" role="alert">
  Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
</div>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Alert;
