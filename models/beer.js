const mongoose = require('mongoose');

const Beer = mongoose.model(
	"myAPI",
	{
		name: {
			type: String,
			required: true,
		},
		degree: {
			type: Number,
			required: true,
		},
	},
	"beer"
);

module.exports = { Beer };
