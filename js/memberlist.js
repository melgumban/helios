var serviceURL = "http://www.anino.net/php/services/";

var members;

$('#memberListPage').bind('pageinit', function(event) {
	getmemberList();
});

function getmemberList() {
	$.getJSON(serviceURL + 'saloon_getmembers.php', function(data) {
		$('#memberList li').remove();
		members = data.items;
		$.each(members, function(index, member) {
			$('#memberList').append('<li><a href="memberdetails.html?id=' + member.id + '">' +
					'<img src="pics/' + member.picture + '"/>' +
					'<h4>' + member.firstName + ' ' + member.lastName + '</h4>' +
					'<p>' + member.title + '</p>' +
					'<span class="ui-li-count">' + member.reportCount + '</span></a></li>');
		});
		$('#memberList').listview('refresh');
	});
}