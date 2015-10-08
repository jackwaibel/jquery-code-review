$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var embarassingInput = $("input#embarassing").val();
    var namefavoritetmntInput = $("input#namefavoritetmnt").val();
    var favoritecocktailInput = $("input#favoritecocktail").val();
    var favoritejamovieInput = $("input#favoritejamovie").val();

    $".name".text("nameInput");
    $".embarassing".text("embarassingInput");
    $".namefavoritetmnt".text("namefavoritetmntInput");
    $".favoritecocktail".text("favoritecocktailInput");
    $".favoritejamovie".text("favoritejamovieInput");

    $"#confirmation".show();

    event.preventDefault();

  });

});
