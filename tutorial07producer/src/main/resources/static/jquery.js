$(document).ready(function() {
	var selected = [];

	$("#allstudent").DataTable({
		"processing" : true,
		"serverSide" : true,
		"ajax" : "scripts/ids-arrays.php",
		"rowCallback" : function(row, data) {
			if ($.inArray(data.DT_RowId, selected) !== -1) {
				$(row).addClass('selected');
			}
		}
	});

	$('#allstudent tbody').on('click', 'tr', function() {
		var id = this.id;
		var index = $.inArray(id, selected);

		if (index === -1) {
			selected.push(id);
		} else {
			selected.splice(index, 1);
		}

		$(this).toggleClass('selected');
	});
});