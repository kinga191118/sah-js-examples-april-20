// Third part
console.log('Script file is loaded.');

$('h1').text('This is done by JS.');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

function myLittleFunction() {
    $('main').append('<p>A p is appended in the main.</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('add').click(myLittleFunction);
$('#remove').click(function () {
    $('p').remove();
})

// Single line comment

/* Multiple line
of comments
*/

