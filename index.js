const express = require('express');
const app = express();
const routes = require('./routes/index');



app.use('/v1', routes)





app.listen(8081, () => {
    console.log('Server is running on ', 8081)
})