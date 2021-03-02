
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/myPortfolioSite', {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Mongodbga ulanish amalga oshdi');
        })
        .catch((err) => {
            console.error('Xato yuz berdi', err);
        });
}
