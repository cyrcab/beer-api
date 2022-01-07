const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(
	process.env.URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) console.log("Mongodb connected");
        else console.log(`Connection error : ${err}`);
	}
);
