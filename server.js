'use strict';

//load express
const express = require('express');

// instantiate express so we can use it
const app = express();

//designate a port to serve our app on
const PORT = process.env.PORT || 3000;

//define which directory we will serve files from
app.use(express.static('./public'));

//tell the app to listen
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));


