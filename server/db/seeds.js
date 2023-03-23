use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Simon Neil",
        email: "sneil@biffy.com",
        date: "2023-03-22",
        checked_in: true
    },
    {
        name: "Dave Grohl",
        email: "dgrohl@foos.com",
        date: "2023-03-23",
        checked_in: false
    },
    {
        name: "Tim McIlrath",
        email: "tmcilrath@riseagainst.com",
        date: "2023-03-24",
        checked_in: false
    },
    {
        name: "Kimi Raikkonen",
        email: "kr@kimi.com",
        date: "2023-03-24",
        checked_in: false
    }
]);
