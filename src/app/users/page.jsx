import React from 'react';

const UsersPage = async() => {
    const fetchUser = await fetch('http://localhost:8000/users');
    const users =  await fetchUser.json()
    console.log('userData',users);
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h2>Users: {users.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {users.map(user => <div 
                key={user.id}
                className='border border-purple-500 rounded-2xl p-6 '>
                    <h2 className='text-2xl'>{user.name}</h2>
                    <p>{user.email}</p>
                </div>)}
            </div>
        </div>
    );
};

export default UsersPage;