let urls = {};

var encode = function(longUrl) {
    let uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

var decode = function(shortUrl) {
    return urls[shortUrl.split("com/")[1]];
};



// my answer
// uses just the place in array


const hash = [];

var encode = function(longUrl) {
    hash.push(longUrl);
    return 'tinyurl.com/' + (hash.length-1).toString();
};

var decode = function(shortUrl) {
    let urlSplit = shortUrl.split('.com/');
    return hash[Number(urlSplit[1])];
};