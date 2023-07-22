import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchGreetings } from '../redux/greetingsSlice';

const Greeting = () => {
  const [number, setNumber] = useState(1); // [1
  const { greetings, isLoading } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
    setNumber(Math.floor(Math.random() * 4));
  }, []);

  let message;
  {
    greetings.forEach((greeting, idx) => {
      if (idx === number) message = greeting.message;
    });
  }

  return <>{!isLoading && <h1>{message}</h1>}</>;
};

export default Greeting;
