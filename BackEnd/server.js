require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3007;  // Render provides PORT, fallback to 3007 locally
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
