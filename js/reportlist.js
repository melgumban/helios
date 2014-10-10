<title>member Directory</title>
$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'saloon_getreports.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, member) {
			$('#reportList').append('<li><a href="memberdetails.html?id=' + member.id + '">' +
					'<h4>' + member.firstName + ' ' + member.lastName + '</h4>' +
					'<p>' + member.title + '</p>' +
					'<span class="ui-li-count">' + member.reportCount + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
