const express = require('express');
const app = express();

var server = app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.

app.use(express.static('public'));