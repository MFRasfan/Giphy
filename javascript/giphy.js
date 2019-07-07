$(document).ready(function () {

    // Initial array of Cars Types
   
    var topics = ["Sports Cars", "Electric Cars", "Luxury Cars", "Antiques Cars"];


    

    // Function for displaying car data
    function createButton() {
        //clear
        $("#button").empty();

        //loop through array, and append to html
        for (var i = 0; i < topics.length; i++) {
            //adding a button for each array option, and adding class, text and attr
            var vehicles = $("<button>")
            vehicles.addClass("car");
            vehicles.attr("data-name", topics[i]);
            vehicles.text(topics[i]);
            //adding to html
            $("#button").append(vehicles);
        }

    }


    // Function for dumping the JSON content for each button into the div
    function Gifs () {
        var type = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=q0yY0aPn2W4SKpVHO319zWyJ7tiXhuHC&q=" + type + "&limit=10&offset=0&rating=R&lang=en";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {
            //checking to see if link is connected 
            console.log(response.data);
            var results = response.data;
          // Deleting the buttons prior to adding new movies
            $("#images").empty();

            //loop through each gif 
            for (var i = 0; i < results.length; i++) {
                //create div, with class and set to img
                var gifDiv = $("<div class=car>");
                var img = $("<img>");
                //pull the images held in API object
                img.attr('src', results[i].images.fixed_height_still.url);
                img.attr("data-still", results[i].images.fixed_height_still.url);
                img.attr('data-animate', results[i].images.fixed_height.url);
                img.attr("data-state", "still");
                //add class to gif image
                img.addClass('gif');
                //add to html
                gifDiv.append(img)

                $("#images").prepend(gifDiv);

            }
        })

    }

    //Animate gif images 

        $(document).on('click', '.gif', function () {

        var state = $(this).attr('data-state');
        
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
          
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    })


    //add a new button for gif 
    $("#submitButton").on("click", function () {
        var types = $("#userinput").val().trim();

        topics.push(types)

        form.reset();

        createButton()

        
        return false;
    })


   

    // Function for displaying the car info
    
    $(document).on("click", ".car", Gifs);

    createButton()


})
