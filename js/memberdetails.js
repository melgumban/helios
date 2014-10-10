$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'saloon_getmember.php?id='+id, displaymember);
});

function displaymember(data) {
	var member = data.item;
	console.log(member);
	$('#memberPic').attr('src', 'pics/' + member.picture);
	$('#fullName').text(member.firstName + ' ' + member.lastName);
	$('#memberTitle').text(member.title);
	$('#city').text(member.city);
	console.log(member.officePhone);
	if (member.managerId>0) {
		$('#actionList').append('<li><a href="memberdetails.html?id=' + member.managerId + '"><h3>View Manager</h3>' +
				'<p>' + member.managerFirstName + ' ' + member.managerLastName + '</p></a></li>');
	}
	if (member.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + member.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + member.reportCount + '</p></a></li>');
	}
	if (member.email) {
		$('#actionList').append('<li><a href="mailto:' + member.email + '"><h3>Email</h3>' +
				'<p>' + member.email + '</p></a></li>');
	}
	if (member.officePhone) {
		$('#actionList').append('<li><a href="tel:' + member.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + member.officePhone + '</p></a></li>');
	}
	if (member.mobilePhone) {
		$('#actionList').append('<li><a href="tel:' + member.mobilePhone + '"><h3>Call Cell</h3>' +
				'<p>' + member.mobilePhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + member.mobilePhone + '"><h3>SMS</h3>' +
				'<p>' + member.mobilePhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
