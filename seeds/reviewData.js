const { Review } = require('../models');

const reviewData =
    [
        {
            "title": "Thriller",
            "content": "Michael Jackson's 'Thriller' is an electrifying masterpiece that seamlessly blends pop, funk, and rock elements into a thrilling sonic journey that still leaves listeners dancing to this day.",
            "user_id": "1",
            "album_id": "2118223"
        },
        {
            "title": "Nevermind",
            "content": "Nevermind is a game-changing grunge opus that defined a generation with its raw intensity and timeless anthems.",
            "user_id": "3",
            "album_id": "2110839"
        },
        {
            "title": "Rubber Soul",
            "content": "Rubber soul is a groundbreaking and influential album that showcases the band's artistic evolution and innovation in songwriting, marking a pivotal moment in the history of popular music",
            "user_id": "2",
            "album_id": "2117305"
        }
    ];

const seedAllPosts = () => Review.bulkCreate(reviewData);

module.exports = seedAllPosts;