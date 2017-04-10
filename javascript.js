var pagesize = 10;
var pages = $(".student-item").length / pagesize;

$(".student-list").after("<div class='pagination'><ul></ul></div>");


if (pages > 1 ) { // Check to see if there are more students than allowed on a single page.
					// If there are more than 10 students, pagination buttons will appear at the bottom of the page.
	for (var i = 0; i < pages; i++) {
		$(".pagination ul").append("<li><a href=#>" + (i + 1) + "</a></li>");
	}
}
$(".pagination li").first().find("a").addClass("active"); // Show what page of students is selected on the pagination buttons.

// Show the selected page of students to the website and hide the other.
function showPage(page) {
	$(".student-item").hide();
	$(".student-item").each(function(a) {
		if (a >= pagesize * (page - 1) && a < pagesize * page) {
			$(this).show();
		}
	});
}

showPage(1); // Show the first page of students.

// Change selected button on the pagination buttons and change page of students to the selected one.
$(".pagination li a").click(function() {
	$(".pagination li a").removeClass("active");
	$(this).addClass("active");
	showPage(parseInt($(this).text()));
});

// Append the searchfield and button to the page.
$(".page-header").append("<div class='student-search'></div>");
$(".student-search").append("<input placehold='Search for students..'><button>Search</button>");

$(".student-search button").on("click", function() { // What happens when you press the search-button.
	var input = $(".student-search input").val(); // Takes the value from the inputfield.

	$(".student-list li").removeClass("target"); // Removes all the pre-existing target-classes.
	$(".student-list li:contains(" + input + ")").addClass("target"); // Add the target-class which is used to select the matched results.

	$(".student-list li").hide();
	if ($(".student-list li").hasClass("target")) { // Show all the matched results.
		$(".target").show();
	} else { // Type out a message if no matches were found.
		$(".student-list").append("<li><p>No students found.</p></li>");
	}
});