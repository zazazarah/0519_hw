$(document).ready(function() {

	$(document).on("click", "li.international", function(event) {
		event.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("slide-down").slideUp();
		}else {	

		$("#international-drop").show();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();


		$("#slide-down").slideDown();
		$(this).addClass("active");
	

	}

		
	});

	$(document).on("click", "li.politics", function(event) {
		event.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("slide-down").slideUp();
		}else {
			
		$("#politics-drop").show();
		$("#international-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();


		$("#slide-down").slideDown();
		$(this).addClass("active");
		
		

	}

		
	});

	$(document).on("click", "li.business", function(event) {
		event.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("slide-down").slideUp();
		}else {
			$(this).addClass("active");

		$("#business-drop").show();
		$("#politics-drop").hide();
		$("#international-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();


		$("#slide-down").slideDown();
		$(this).addClass("active");
		

	}

		
	});

	$(document).on("click", "li.technology", function(event) {
		event.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("slide-down").slideUp();
		}else {
			$(this).addClass("active");

		$("#technology-drop").show();
		$("#politics-drop").hide();
		$("#international-drop").hide();
		$("#business-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();


		$("#slide-down").slideDown();
		$(this).addClass("active");
		

	}

		
	});

	$(document).on("click", "li.culture", function(event) {
		event.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("slide-down").slideUp();
		}else {
			$(this).addClass("active");

		$("#culture-drop").show();
		$("#politics-drop").hide();
		$("#international-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#blogs-drop").hide();


		$("#slide-down").slideDown();
		$(this).addClass("active");
		

	}

		
	});

$(document).on("click", "li.blogs", function(event) {
		event.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("slide-down").slideUp();
		}else {
			$(this).addClass("active");

		$("#blogs-drop").show();
		$("#politics-drop").hide();
		$("#international-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();


		$("#slide-down").slideDown();
		$(this).addClass("active");
		

	}

		
	});


	// $(document).on("click", "li.politics", function() {
	// 	$("#politics-drop").show();
	// 	$("#international-drop").hide();
	// 	$("#business-drop").hide();
	// 	$("#technology-drop").hide();
	// 	$("#culture-drop").hide();
	// 	$("#blogs-drop").hide();


	// 	$("#slide-down").slideDown();
	// 	$(this).addClass("active");
		
	// });

	// $(document).on("click", "li.business", function() {
	// 	$("#business-drop").show();
	// 	$("#international-drop").hide();
	// 	$("#politics-drop").hide();
	// 	$("#technology-drop").hide();
	// 	$("#culture-drop").hide();
	// 	$("#blogs-drop").hide();


	// 	$("#slide-down").slideDown();
	// 	$(this).addClass("active");
		
	// });

	// $(document).on("click", "li.technology", function() {
	// 	$("#technology-drop").show();
	// 	$("#international-drop").hide();
	// 	$("#politics-drop").hide();
	// 	$("#business-drop").hide();
	// 	$("#culture-drop").hide();
	// 	$("#blogs-drop").hide();


	// 	$("#slide-down").slideDown();
	// 	$(this).addClass("active");
		
	// });

	// $(document).on("click", "li.culture", function() {
	// 	$("#culture-drop").show();
	// 	$("#international-drop").hide();
	// 	$("#politics-drop").hide();
	// 	$("#business-drop").hide();
	// 	$("#technology-drop").hide();
	// 	$("#blogs-drop").hide();


	// 	$("#slide-down").slideDown();
	// 	$(this).addClass("active");
		
	// });

	// $(document).on("click", "li.blogs", function() {
	// 	$("#blogs-drop").show();
	// 	$("#international-drop").hide();
	// 	$("#politics-drop").hide();
	// 	$("#business-drop").hide();
	// 	$("#technology-drop").hide();
	// 	$("#culture-drop").hide();


	// 	$("#slide-down").slideDown();
	// 	$(this).addClass("active");
		
	// });


});