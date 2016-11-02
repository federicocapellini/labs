import React from 'react';

import UserInfo from './UserInfo';

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={ props.author } />
      <div className="Comment-text">
        { props.text }
      </div>
      <div className="Comment-date">
        { _formatDate(props.date) }
      </div>
    </div>
  );
}

function _formatDate(date) {
  return date.toLocaleTimeString();
}

export default Comment;
