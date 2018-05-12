import React from 'react'

const logName = (name) => {
  console.log(name)
};

const User = ({name, index}) => {
  return (
    <li key={index} onClick={e => logName(name)}>
      {name}
    </li>
  );
};

export default User;