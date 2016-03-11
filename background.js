function getBackground(){

    var background_data = g_backgrounds[Math.floor(Math.random() * g_backgrounds.length)];
    var background = "url(\"" +background_data["url"] +"\")";
    $('<img/>').attr('src', background_data["url"]).load(function(){
        $("body").css('background-image', background);
        $(".overlay").fadeOut();
        $("#credit").append("With thanks to "+ background_data["author"] + " for the image");
    });
}

$(document).ready(function(){
    getBackground();
});
