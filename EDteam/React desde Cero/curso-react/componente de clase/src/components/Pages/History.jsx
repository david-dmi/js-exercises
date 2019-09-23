import React from 'react';

const History = ({ match, location, history }) => (

  <div>
    {JSON.stringify(match)}
    <br />
    {JSON.stringify(location)}
    <br />
    {JSON.stringify(history)}
  </div>

)

export default History