/*jslint browser: true, devel: true, node: true, continue: false, stupid: true, indent: 3 */

/*
 * GET home page.
 */

exports.index = function(req, res){

  //splitting the input param to get screen_name params
 var screenName = (req.params.userid).split("-",1)[0];
 var Twit = require('twit');

var T = new Twit({
    consumer_key: 'EFl2MmByZ8JWo5kxD3vJA',
    consumer_secret: '8rM7Xgrtt9K2vqiLHnzOSk3hN1sTeIgloOm8IgZaKI',
    access_token:  '2171069708-ESRgHVDbtwscWvCTjqmkSU1eK3odK0KIXbGyS4Z',
    access_token_secret:  'Cz1bpTXAA6kVvFRh8jInBsFL2XnA8bh25nIw8EIQxFb3Z'
});

T.get('statuses/user_timeline',{ screen_name: screenName, count : 10 }, function (err, reply) {

    if(err){
        res.send("Trouble in accessing Twitter!!!");
    }
    console.log(reply);
    res.render('index',{tweets : reply});

});
};