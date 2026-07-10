import React, { use } from 'react';

const UserList = ({ usersPromise }) => {
    const users = use(usersPromise);
    console.log(users, 'from userList');

    return (
        <div>
            <h2 className='text-3xl'>UserList : {users.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {users.map(user => <div
                    key={user.id}
                    className='border border-purple-500 rounded-2xl p-6 '>
                    <h2 className='text-2xl'>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.city}</p>
                </div>)}
            </div>
        </div>
    );
};

export default UserList;