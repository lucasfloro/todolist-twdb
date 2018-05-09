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