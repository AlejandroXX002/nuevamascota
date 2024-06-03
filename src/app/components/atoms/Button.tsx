"use client"
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { increment, decrement, incrementByAmount, selectCount } from '@/lib/feautures/example/counterSlice';

const Counter: React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
};

export default Counter;
