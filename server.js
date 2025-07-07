const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (CSS, JS, images)
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes for each page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/blogs.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'blogs.html'));
});

app.get('/blog-sleep.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog-sleep.html'));
});

app.get('/blog-broken-bones.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog-broken-bones.html'));
});

app.get('/blog-glasses.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog-glasses.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/connect.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'connect.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`GetBetterSoon server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});

module.exports = app; 