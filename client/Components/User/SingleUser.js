import React from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
    const { id } = useParams();

    return <div>Single User with id {id} is here</div>;
};

export default SingleUser;
