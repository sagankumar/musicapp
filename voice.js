var result
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var options = ['play the song', 'pause the song', 'repeat song', 'shuffle songs', 'next song', 'previous song', 'open visualizer'];
var grammar = '#JSGF V1.0; grammar options; public <option> = ' + options.join(' | ') + ' ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
$('.fa-microphone').click(function() {
    $('.fa-microphone').removeClass("active");
    recognition.start();

})
recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The [last] returns the SpeechRecognitionResult at the last position.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object

    var last = event.results.length - 1;
    result = event.results[last][0].transcript;
    console.log(result);
    if (result == "play the song") {
        $('.fa-microphone').addClass("active");
        var song = document.querySelector('audio');
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();

    }

    if (result == "pause the song") {
        $('.fa-microphone').addClass("active");
        var song = document.querySelector('audio');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();

    }
    if(result=="previous song"){


             $('.fa-microphone').addClass("active");
        if (shuffle == 1) {
            var audio = document.querySelector('audio');
            var nextSongNumber = randomExcluded(0, 3, Playingnumber); // Calling our function from Stackoverflow

            var nextSongObj = songs[nextSongNumber];
            audio.src = nextSongObj.fileName;
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            Playingnumber = nextSongNumber;


        } else {

            if (Playingnumber == 0) {
                Playingnumber = songs.length - 1;
                changeSong();
            } else {
                console.log("two");
                console.log(Playingnumber);
                Playingnumber--;
                changeSong();
            }

        }





    }

    if (result == "next song") {
        $('.fa-microphone').addClass("active");
        if (shuffle == 1) {
            var audio = document.querySelector('audio');
            var nextSongNumber = randomExcluded(0, 3, Playingnumber); // Calling our function from Stackoverflow

            var nextSongObj = songs[nextSongNumber];
            audio.src = nextSongObj.fileName;
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            Playingnumber = nextSongNumber;


        } else {

            if (Playingnumber == songs.length - 1) {
                Playingnumber = 0;
                changeSong();
            } else {
                console.log("two");
                console.log(Playingnumber);
                Playingnumber++;
                changeSong();
            }

        }



    }

    if (result == "show visualizer") {
        $('.fa-microphone').addClass("active");
        $('fa-bar-chart').toggleClass("active");
        if (equal == 0) {

            equal = 1;

            $("svg").css("display", "inline-block");
            $(".content").css("display", "none");
            $(".contain").css("display", "inline-block");
            $(".contain").css("background", "black");


        } else {
            equal = 0;
            $("svg").css("display", "none");
            $(".content").css("display", "inline-block");
            $(".contain").css("display", "none");




        }
    }
    if (result == "shuffle between songs"||result == "shuffle between song")
     {
        $('.fa-microphone').addClass("active");

        $(".fa-random").toggleClass("active");
        if (shuffle == 0)
        {

            shuffle = 1;
        }

        else
        {
            shuffle = 0;
        }



    }

    if (result == "loop through song"||result == "loop through songs")
     {
        $('.fa-microphone').addClass("active");
        $(".fa-repeat").toggleClass("active");
        if (loop == 0) {

            loop = 1;

        }
        else {

            loop = 0;

        }


    }


}
