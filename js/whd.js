var body = document.getElementById('body');
var videoBt = document.querySelector('#heroVideo');

var loadData = function () {
    videoBt.load();
};

body.addEventListener('ontouchstart', loadData, false);