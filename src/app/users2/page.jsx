import UserList from '@/UserList';
import React, { Suspense } from 'react';


const getUsers = async () => {
    const res = await fetch('http://localhost:8000/users');
    return res.json();
}



const Users2 = async() => {

    const usersPromise = getUsers();
    // console.log(usersPromise);
    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <UserList usersPromise={usersPromise}></UserList>
            </Suspense>
        </div>
    );
};

export default Users2;