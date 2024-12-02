const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Укажите путь к вашему фронтенду
app.use(express.static(path.join(__dirname, '/build')));

// Обработка всех маршрутов, чтобы они указывали на ваш index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});