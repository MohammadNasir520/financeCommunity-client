import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import SmallSpinner from './Spinner/SmallSpinner';

const Check = () => {
    const { loading } = useContext(AuthContext)
    console.log(loading);
    if (loading) {
        return <SmallSpinner></SmallSpinner>
    }
    return (
        <div>
            check
        </div>
    );
};

export default Check;