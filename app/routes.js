/**
 * Created by Michal on 5/25/16.
 */
var Comment = require('./models/comment');

function getComments(res) {
    Comment.find(function (err, comments) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(comments); // return all comments in JSON format
    });
}

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all comments
    app.get('/api/comments', function (req, res) {
        // use mongoose to get all comments in the database
        getComments(res);
    });

    // create comment and send back all comments after creation
    app.post('/api/comments', function (req, res) {

        // create a comment, information comes from AJAX request from Angular
        Comment.create({
            email: req.body.email,
            text: req.body.text
        }, function (err) {
            if (err)
                res.send(err);

            // get and return all the comments after you create another
            getComments(res);
        });

    });

    // delete a comment
    app.delete('/api/comments/:comment_id', function (req, res) {
        Comment.remove({
            _id: req.params.comment_id
        }, function (err) {
            if (err)
                res.send(err);

            getComments(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
