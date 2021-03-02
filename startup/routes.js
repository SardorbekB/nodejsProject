const express = require('express');

const userRoute = require('../routes/users');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/users', userRoute);
}