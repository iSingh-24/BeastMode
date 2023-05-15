import React from 'react';
import UserList from './User/UserList';
import Workout from './Workout/Workout';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import SingleUser from './User/SingleUser';
import CreateUser from './User/CreateUser';
import Login from './Login/Login';

import { HashRouter, Routes, Route } from 'react-router-dom';

/**TODO: Clear the br's
 */

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<UserList />} exact path='/users' />
                <Route element={<Workout />} exact path='/workouts' />
                <Route element={<SingleUser />} exact path='/user/:id' />
                <Route element={<CreateUser />} exact path='/user/create' />
                <Route element={<Login />} exact path='/login'></Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
