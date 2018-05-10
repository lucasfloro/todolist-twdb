// Check off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    // Esta linha acima é o jeito simples e rápido de fazer todo código abaixo
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"            
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });            
    // }
});

// Click on X to delete Todo
$("ul").on("click", "span", function (evt) {
    $(this).parent().fadeOut(500, function() { //refer to span
        $(this).remove(); // refer to the LI
    });
    // $(this).parent().remove(); // Remove the entire LI (parent) for a span
    evt.stopPropagation(); // stop to bubbling up to other elements
});

$("input[type='text']").keypress(function(evt) {
    if(evt.which === 13) {
        // grabbing new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});