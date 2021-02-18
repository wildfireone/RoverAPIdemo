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
    
    var date = $('#date-picker').val();
    console.log(date);



    $.ajax({
      type: "GET",
      //url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=DEMO_KEY",
      url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date+"&api_key=DEMO_KEY",
      success: function (result) {
        //empth all the current images
          $(".galleria").empty();

        var photos = result.photos //this data contains an array called photos
        for (var i in photos) {
          console.log(photos[i].camera.name)
          if (photos[i].camera.name == 'MAST') {
            var image = "<img src='" + photos[i].img_src + "'/>";
            $("#mast").append(image);
          }
          if (photos[i].camera.name == 'NAVCAM') {
            var image = "<img src='" + photos[i].img_src + "'/>";
            $("#nav").append(image);
          }
          if (photos[i].camera.name == 'FHAZ') {
            var image = "<img src='" + photos[i].img_src + "'/>";
            $("#fhaz").append(image);
          }
          if (photos[i].camera.name == 'RHAZ') {
            var image = "<img src='" + photos[i].img_src + "'/>";
            $("#rhaz").append(image);
          }
          if (photos[i].camera.name == 'MAHLI') {
            var image = "<img src='" + photos[i].img_src + "'/>";
            $("#mahli").append(image);
          }
        }
        //set up galleria
        displayResources.text('DONE!');
        Galleria.loadTheme('script/galleria-1.6.1/dist/themes/classic/galleria.classic.min.js');
        Galleria.run('.galleria');
        //Galleria.run('#nav');
        //Galleria.run('#fhaz');
        //Galleria.run('#rhaz');
        //Galleria.run('#mahli');
      }
    });

  });
});