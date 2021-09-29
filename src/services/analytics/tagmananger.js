/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';
import sentryLogger from '../logger';

const useTracker = () => {
  const [ip, setIP] = React.useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const track = (page, action = undefined) => {
    try {
      dataLayer.push({
        event: 'pageVisit',
        user: {
          ip: ip || undefined,
          page,
          action,
        },
      });
    } catch (error) {
      sentryLogger(error);
    }
  };
  return { track, ip };
};
export default useTracker;
