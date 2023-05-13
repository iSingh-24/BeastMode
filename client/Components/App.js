import React from 'react';
import User from './User/User';
import Workout from './Workout/Workout';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import SingleUser from './User/SingleUser';

import { HashRouter, Routes, Route } from 'react-router-dom';

/**TODO: Clear the br's
 */

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<User />} exact path='/users' />
                <Route element={<Workout />} exact path='/workouts' />
                <Route element={<SingleUser />} exact path='/users/:id' />
            </Routes>
        </HashRouter>
    );
};

export default App;
