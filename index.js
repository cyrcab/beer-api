const express = require("express");
const app = express();
require('./models/dbConfig');
const port = process.env.PORT || 3499;

const setupRoutes = require('./routes/index');
setupRoutes(app);


app.listen(port, () => console.log(`Server is running on port ${port}`));
