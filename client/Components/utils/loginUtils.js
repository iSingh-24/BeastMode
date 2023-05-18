import axios from 'axios';

const checkCredentials = async ({ username, password }) => {
    try {
        const foundUser = await axios.post(
            `http://localhost:3000/api/auth/login`,
            { username, password }
        );

        return foundUser;
    } catch (err) {
        console.log(err);
    }
};

const checkIfAuthenticated = async () => {
    const isAuthenticated = await axios.get(
        'http://localhost:3000/api/auth/authenticated'
    );

    return isAuthenticated;
};

export { checkCredentials, checkIfAuthenticated };
