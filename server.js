const app = require('./src/app');
const {connectDB} = require('./src/config/db')
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv").config();
connectDB().then(() => {
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

});

