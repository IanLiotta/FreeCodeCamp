
function booWho(bool) {
    console.log(typeof bool);
    if (typeof bool == 'boolean') {
        console.log('true')
        return true;
    }
    console.log('false')
    return false;
}

booWho(true);
booWho(false);
booWho(null);
booWho(1);
booWho("true");
booWho("false");