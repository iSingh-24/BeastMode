import React, { useState } from 'react';

const CreateWorkout = () => {
    const [workout, setWorkout] = useState('');

    const onWorkoutName = ({ value }) => {
        setWorkout(value);
    };

    return (
        <div>
            <form action='submit'>
                <label htmlFor='workout'>Workout Name </label>
                <input
                    type='text'
                    onChange={({ target }) => onWorkoutName(target)}
                    required
                />
                <br />
                <br />
                <button type='submit'>Create Workout</button>
            </form>
        </div>
    );
};

export default CreateWorkout;
