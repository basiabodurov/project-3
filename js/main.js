$(function() {
var albumData,
albumItems,
artistName,
instagramUrl,
$albumList = $('.album-list');
$('#album-search').on('submit', function(event) {
event.preventDefault();
$albumList.empty();
albumData, albumItems = '',
artistName = $('#artist-name').val().replace(/ /g, '+'),
instagramUrl = 'https://api.instagram.com/v1/tags/'+artistName+'/media/recent?client_id=fed3ea7d36644c4993d81a12621c74c8';
$.ajax({
method: 'GET',
url: instagramUrl,
dataType: 'jsonp'
})
.done(function(results) {
albumData = results.data;
if ( albumData.length !== 0 ) {
$.each(albumData, function(key, value) {
albumItems += '<li>';
albumItems += '<div class="pics">';
albumItems += '<img src="' + value.images.low_resolution.url + '" />';
albumItems += '<div class="pic-container">';
albumItems += '<div class="profile">';
albumItems += '<img src="' + value.caption.from.profile_picture + '" />';
albumItems += '<div class="img-bottom">';
albumItems += '<p>' + value.caption.from.username + '</p>';
albumItems += '<i class="fa fa-heart"></i>' + value.likes.count + '';
albumItems += '<i class="fa fa-wechat"></i> ' +value.comments.count;
albumItems += '</div>';
albumItems += '</div>';
albumItems += '</div>';
albumItems += '</div>';
albumItems += '</li>';
});
} else {
albumItems += '<p style="margin-top: 18px;">Sorry, artist not found.</p>';
}
$albumList.append(albumItems);
})
    // and if it fails...
    .fail(function() {
       $albumList.append('<li>Sorry! There was a problem, please try again.</li>');
    });
 });
});


