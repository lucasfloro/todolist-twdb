// Check off Specific Todos By Clicking
$("li").click(function () {
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
$("span").click(function (evt) {
    $(this).parent().fadeOut(500, function() { //refer to span
        $(this).remove(); // refer to the LI
    });
    // $(this).parent().remove(); // Remove the entire LI (parent) for a span
    evt.stopPropagation(); // stop to bubbling up to other elements
});