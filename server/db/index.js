const relationships = require('./relationships');
const db = relationships.db;

//we have to import it like this in order for db to be a top level property

const init = async () => {
    try {
        await db.authenticate();

        await db.sync({ force: true });

        console.log('db is connected');
    } catch (err) {
        console.log(err);
    }
};

init();
