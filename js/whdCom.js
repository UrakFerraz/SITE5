var showMore1 = document.querySelector('.show-more1');
var showMore2 = document.querySelector('.show-more2');
var showMore3 = document.querySelector('.show-more3');
var showMore4 = document.querySelector('.show-more4');

var showMore1id = document.querySelector('#show-more1');
var showMore2id = document.querySelector('#show-more2');
var showMore3id = document.querySelector('#show-more3');
var showMore4id = document.querySelector('#show-more4');


document.querySelector('#show-more1').addEventListener('click', function() {
	if (showMore1.style.transform === 'rotate(0deg)') {
		showMore1.style.transform = 'rotate(180deg)';
	} else {
		showMore1.style.transform = 'rotate(0deg)';
	}
});


document.querySelector('#show-more2').addEventListener('click', function() {
	if (showMore2.style.transform === 'rotate(0deg)') {
		showMore2.style.transform = 'rotate(180deg)';
	} else {
		showMore2.style.transform = 'rotate(0deg)';
	}
});


document.querySelector('#show-more3').addEventListener('click', function() {
	if (showMore3.style.transform === 'rotate(0deg)') {
		showMore3.style.transform = 'rotate(180deg)';
	} else {
		showMore3.style.transform = 'rotate(0deg)';
	}
});


document.querySelector('#show-more4').addEventListener('click', function() {
	if (showMore4.style.transform === 'rotate(0deg)') {
		showMore4.style.transform = 'rotate(180deg)';
	} else {
		showMore4.style.transform = 'rotate(0deg)';
	}
});