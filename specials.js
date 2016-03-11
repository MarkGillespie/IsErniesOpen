var specials = [ 
    [ // Monday
        "Chicken Enchiladas",
        "Taquitoscon Guacamole",
        "Fried Rice",
        "Carnitas (tacos or buttio)",
        "Tacos al Pastor (plate or burrito)",
        "Chorizo (burrito or plate)"],
    [ // Tuesday
        "Flautas (Chicken, Beef or Vegetable)",
        "Pork in Tomatillo Sauce (plate or burrito)",
        "Chicken Mole"],
    [ // Wednesday
        "Chicken Milanesa (torta or plate)",
        "Chicken Fajita",
        "Barbacoa (Pork) (taco or burrito)"],
    [ // Thursday
        "Taquitos (Chicken)",
        "Carnitas (tacos or burrito)",
        "Pollo Ranchero (roasted chicken)",
        "Spicy Beef and Potato"],
    [ // Friday
        "Carnitas (taco or burrito)",
        "Tacos Dorados (potato)",
        "Teriyaki Chicken Plate"]]
 

function getSpecials() {
    var day = (new Date()).getDay();
    if (day == 0 || day == 6)
        return []
    return specials[day-1]
}

function writeSpecials() {
    $("#special_list").empty();
    getSpecials().forEach(function(entry) {
        $("#special_list").append(
            $("<div/>").addClass("special").text(entry)
        );
    });
}

$(document).ready(function() {
    writeSpecials();
});


