import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleUser } from '../utils/userUtils';

const SingleUser = () => {
    const { id } = useParams();
    const [singleUser, setSingleUser] = useState('');

    useEffect(() => {
        const fetchSingleUser = async () => {
            console.log(id, 'here is id');
            const grabbedUser = await getSingleUser(id);
            const singlePageUser = grabbedUser ? grabbedUser.data : null;
            setSingleUser(singlePageUser);
        };
        fetchSingleUser();
    }, [id]);
    const displayedUser = singleUser ? (
        <div>{`${singleUser.firstName} ${singleUser.lastName} `}</div>
    ) : (
        `No user with id ${id}`
    );

    return <div>{displayedUser}</div>;
};

export default SingleUser;
