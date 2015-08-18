
		
		$(document).ready(function() { 

		var windowHeight= $(window).height();
		var menuBarHeight= $("#menuBar").height();
		
		var codeContainerHeight = windowHeight - menuBarHeight;
		$(".codeContainer").height(codeContainerHeight + "px");
		$(".toggleLi").click(function() {
			$(this).toggleClass("selected");
			var activeDiv=$(this).html();
			$("#"+ activeDiv + "Container").toggle();

			var showingDiv= $(".codeContainer").filter(function() {
				return($(this).css("display")!= "none");
			}).length;
			var width = 100/showingDiv;
			$(".codeContainer").width(width + "%");
		});

		$("#runButton").click(function() {
			$("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

		});

	});