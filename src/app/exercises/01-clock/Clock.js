'use client';
import format from 'date-fns/format';
import React from 'react';
import Spinner from '../../../components/Spinner';

function Clock() {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  if (!time) {
    return <Spinner />;
  }

  return (
    <p className="clock">{format(time, 'HH:mm:ss.S')}</p>
  );
}

export default Clock;
