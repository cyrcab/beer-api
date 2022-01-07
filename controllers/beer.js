const { Beer } = require("../models/beer");

const handleFindBeer = async (req, res, next) => {
	try {
		const result = await Beer.find({ name: "Kronembourg"});
		console.log(result);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		next(err);
	}
};

module.exports = { handleFindBeer };
