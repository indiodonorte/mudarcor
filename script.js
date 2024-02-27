document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("changeColorBtn");
    button.addEventListener("click", function() {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
});
