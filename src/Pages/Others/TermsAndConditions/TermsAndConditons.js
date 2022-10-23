import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditons = () => {
    return (
        <div>
            <h3>Here are some rules</h3>
            <p>Go back to <Link to='/register'>Registration</Link> </p>
        </div>
    );
};

export default TermsAndConditons;