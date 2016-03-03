$('#alpha-switch').switchButton({
		on_label: "Intrigue On",
		off_label: "Intrigue Off"		
	});

	$("#alpha-switch").change( function(){

	    if($(this).is(':checked')) {
	        $("span").css("background-color", "black");
	    } else {
	        $("span").css("background-color", "none");
	    }

	});