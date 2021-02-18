/**
 * @Author: John Isaacs <john>
 * @Date:   23-Feb-182018
 * @Filename: getresources.js
 * @Last modified by:   john
 * @Last modified time: 28-Nov-182018
 */
$(document).ready(function () {

  $('#retrieve-data').click(function () {
    //sets up a info text for when the data is loading in. Could obviously be a much nice loading screen
    var displayResources = $('#display-data');
    displayResources.text('Loading Rover Data');

   

  
    //ajax call to the API
    $.ajax({
      type: "GET",
      url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY",
      success: function (result) {

        var photos = result.photos //this data contains an array called photos
        //for every photo in the photos array
        for (var i in photos) {
          //check its a MAST camera
          if (photos[i].camera.name == 'MAST') {
            //create some HTML for the image
            var image = "<img src='" + photos[i].img_src + "'/>";
            //append the image to our "mast" div
            $("#mast").append(image);
          }
        }
        //set up galleria as per galleria's instructions
        displayResources.text('DONE!');
        Galleria.loadTheme('script/galleria-1.6.1/dist/themes/classic/galleria.classic.min.js');
        Galleria.run('#mast');
      }
    });

  });
});