
$(document).ready(function () {

    //Starting point:
    var wins = 0;
    var losses = 0;
    var yourScore = 0;

    //Sets randomNumber to guess between 19 and 120
    var randomNumber = Math.floor(Math.random() * 101) + 19;

    console.log(randomNumber);

    $("#value").html(randomNumber);


    function reset() {

        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#value").html(randomNumber);

        blueCoin12 = Math.floor(Math.random() * 12) + 1;
        yellowCoin12 = Math.floor(Math.random() * 12) + 1;
        redCoin12 = Math.floor(Math.random() * 12) + 1;
        pinkCoin12 = Math.floor(Math.random() * 12) + 1;
        yourScore = 0;


    };


    var blueCoin12 = Math.floor(Math.random() * 12) + 1;


    $("#blueCoin").on('click', function () {

        yourScore = yourScore + parseInt(blueCoin12);

        $(".yourScore").html(yourScore);




        if (yourScore === randomNumber) {

            $("#status").html("You WON!");
            wins++;

            $("#wins").text("Wins: " + wins);


            reset();

        } else if (yourScore > randomNumber) {

            $("#status").html("You lost!");
            losses++;

            $("#losses").text("Losses: " + losses);

            reset();
        };

    });


    var yellowCoin12 = Math.floor(Math.random() * 12) + 1;

    $("#yellowCoin").on('click', function () {

        yourScore = yourScore + parseInt(yellowCoin12);

        $(".yourScore").html(yourScore);



        if (yourScore === randomNumber) {

            $("#status").html("You WON!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();

        } else if (yourScore > randomNumber) {

            $("#status").html("You lost!");
            losses++;

            $("#losses").text("Losses: " + losses);
            reset();
        }

    });



    var redCoin12 = Math.floor(Math.random() * 12) + 1;

    $('#redCoin').on('click', function () {

        yourScore = yourScore + parseInt(redCoin12);

        $('.yourScore').html(yourScore);



        if (yourScore === randomNumber) {
            $('#status').html('You won!');
            wins++;

            $("#wins").text("Wins: " + wins);
            reset();


        } else if (yourScore > randomNumber) {
            $('#status').html('You lost!')
            losses++;

            $("#losses").text("Losses: " + losses);
            reset();

        }
    });



    var pinkCoin12 = Math.floor(Math.random() * 12) + 1;

    $('#pinkCoin').on('click', function () {

        yourScore = yourScore + parseInt(pinkCoin12);

        $('.yourScore').html(yourScore);




        if (yourScore === randomNumber) {
            $('#status').html('You won!');
            wins++;

            $("#wins").text("Wins: " + wins);
            reset();


        } else if (yourScore > randomNumber) {
            $('#status').html('You lost!')
            losses++;

            $("#losses").text("Losses: " + losses);
            reset();

        }
    });

});