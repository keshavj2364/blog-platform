const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'portfolio_db'
});
db.connect((err) => {
if (err) {
console.log(err);
} else {
console.log('MySQL Connected');
}
});
app.get('/', (req, res) => {
res.send('Portfolio Backend Running');
});
app.listen(5000, () => {
console.log('Server running on port 5000');
});
