import React from 'react';
import { Link } from 'react-router';
import notFoundImg from'../assets/App-Error.png'

const ErrorApp = () => {
    return (
        <div className='text-center flex flex-col  justify-center items-center '>
            <img src={notFoundImg} alt=""  className='max-w-[250px]'/>
            <h1>OPPS!! APP NOT FOUND</h1>
            <Link to={'/apps'} className='btn btn-primary'>Go Back!</Link>
        </div>
    );
};

export default ErrorApp;