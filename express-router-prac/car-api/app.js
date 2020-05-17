// Bring in dependencies

const app = require('express')();
const routes = require('./routes');

const PORT = process.env.PORT || 3008;

// Connect all our routes to our application (here)

app.use('/', routes);

// Get the server on and listening

app.listen(PORT, () => {
    console.log(`App up and Listening on Port: ${PORT}`);
});

