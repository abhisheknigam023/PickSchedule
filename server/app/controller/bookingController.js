const Book = require("../model/bookingModel");

// Retrieve and return all
exports.get = function(req, res, next) {
  Book.find().then(
    function(book) {
      res.json(book);
    },
    function(err) {
      next(err);
    }
  );
};

// Create a new tool
exports.post = function(req, res, next) {
  let Booking = req.body;

  Book.create(Booking).then(
    function() {
      Book.find().then(
        function(bookings) {
          res.json(bookings);
        },
        function(err) {
          next(err);
        }
      );
    },
    function(err) {
      next(err);
    }
  );
};

// Delete by Id
exports.deleteById = function(req, res, next) {
  Book.findById(req.params.id).deleteMany(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
