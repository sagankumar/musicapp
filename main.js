
    $('.welcome-screen button').on('click', function() { /* yhaan "$=document.querySelector" k brabar hota hai $ ka mtlb jquery hota hai
    ".on"= button.addEventListener k brabar hota hai (means hmne ek banda bitha diya button pe jo click hone pe "function" wala code run kre)*/
        var name = $('#name-input').val(); /* yhaaan hmne variable "name" bnaya hai . Fir hmne "name-input" ID select ki IMPORTANT NOTE:- yhaan value select "val()" se krte hai*/
    //console.log(name)/* yhaan per "name" ki value print kra di*/
        if (name.length > 3) { /* yhaan bta rhe hai ki agar variable "name" ki length 2 se jada ho tho code ko run kre. */
            var message = "Welcome, " + name; /* yhaan pe "message" naam ka variable bnaya aur usmai "Welcome"+ name(means concatination ki yani 2 words ko joda)*/
        //console.log(message);/* yhaan pe message k ander wale output ko print kiya*/
            $('.main .user-name').text(message); /* ismai hmne jquery use kiya (means jisse hmm tag select krte hai) class "main "hai uske ander user-name class ko select kro aur usmai text rkho jo "message" variable mai hai. */
            $('.welcome-screen').addClass('hidden'); /* yhaan pe welcome-screen ki class ko select kiya aur uspe hidden class add kr di*/
            $('.main').removeClass('hidden'); /* yhaan pe main ki class ko select kiya aur uspe hidden class remove kr di*/
        } else { /* agar if statement not satisfied than else code will run*/
            $('#name-input').addClass('error'); /* ismai hmne jquery use ki jisse hmm "name-input" ID ko select krte hai aur usmi class add krte hai "error" ki(jo ki hme error btata hai)*/
        }
    });

    function changeSong() //we have made a machine jispe 2 buttons diye hai songName and position ke liye
    {
    var music =  songs[Playingnumber].fileName;
    var song = document.querySelector("audio");
    song.src = music;
    toggleSong();
    changeCurrentSongDetails(songs[Playingnumber])
    }

/*-------------------- yhaan pe hmne ek toggleSong machnine bnayi hai -------------------*/

    function toggleSong() { //yhaan pe hmne ek function bnaya jiska naam toggleSong (means kisi button ko on ya off krna yhaan song ko play n pause kr rhe hai) hai.
var song = document.querySelector('audio'); /*yhaan pe "song" naam ka variable bnaya usmai hmane document mai se ek "audio" tag select kiya */
if(song.paused == true) { /* agar "song.paused" ki value true ho tho if code run kre*/
console.log('Playing'); // yhaan pe 'Playing' word print hora hai
$('.play-icon').removeClass('fa-play').addClass('fa-pause'); /* hmne jquery se "play-icon" class select ki , fir hmne "fa-play" class mai
removeClass lgayi aur "fa-pause" pe addClass lgayi (means agar song paused hai tho button change ho jaye 'play-se-pause' button mai)*/
song.play(); /* yhaan pe song ko play kiya jara hai*/
}
else { /* agar if condition false ho jaye tho else condition run ho*/
console.log('Pausing'); // yhaan pe 'Pausing' word print hora hai
$('.play-icon').removeClass('fa-pause').addClass('fa-play'); /* hmne jquery se "play-icon" class select ki , fir hmne "fa-pause" class mai
removeClass lgayi aur "fa-play" pe addClass lgayi (means agar song chal rha hai tho button change ho jaye 'pause-se-play' button mai)*/
song.pause(); /* yhaan pe song ko paused kiya jara hai */
}
}


/*-------------------yhaan pe hmne ek fancyTimeFormat ki machnine bnayi--------------------*/

function fancyTimeFormat(time) // yhaan pe fancyTimeFormat naam ka function bnaya hai jo time ko time formate ki form mai dikhata hai.
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


/*------------------- yhaan pe hmane updateCurrentTime naam ki machnine bnayi hai --------------------*/

function updateCurrentTime() { /* yhaan pe hmne updateCurrentTime naam ka function bnaya hai */
    var song = document.querySelector('audio'); /* yhaan pe "song" naam ka variable bnaya usmai hmane document mai se ek "audio" tag select kiya */
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime); // using jquery hmne "time-elapsed" class select ki , usmai hmne text dala diya jo 'currentTime' (box ya variable) mai hai
    $('.song-duration').text(duration); // using jquery hmne "song-duration" class select ki , usmai hmne text dala diya jo 'duration' (box ya variable) mai hai
}

/*-------------------------------------------------------------------------------------------------------------*/

$('.play-icon').on('click', function() { // yhaan pe hmne "play-icon" class select ki using jquery aur uspe  addEvent lga di means jab play icon button click hoga tab function ko run kr dena
toggleSong(); // yhaan pe toggleSong ki machnine rkh di jisse wo apna kaam kregi
});



// Before code
    // $('body').on('keypress', function(event) { /* yhaan per hmne ek DJ master ko <body> tag mai rkh diya jo ab event function ko chlayega jab keypress hogi */
    //             if (event.keyCode == 32) { /* YHAAN PE BTA RHE HAI KI AGAR HMARA event.keyCode 32 K brabar HO THO IF condition RUN KR DE (means 32 code ki key press ho tho song start and pause ho)*/
    //                 toggleSong(); // yhaan pe toggleSong ki machnine rkh di jisse wo apna kaam kregi
    //             }
    //         });

// After code
$('body').on('keypress',function(event) { // yhaan per hmne ek DJ master ko <body> tag mai rkh diya jo ab event(means collection of objects) function ko chlayega jab keypress hogi
    var target = event.target; // hmne ek variable bnaya "target" naam ka  aur usmai 'event.target' ki value store ki hai
    if (event.keyCode == 32 && target.tagName !='INPUT') /* yhaan pe hmane phele 'event' mai se 'keyCode' utha liya jo ki '32' hai fir, 'event' mai
    'target' k ander 'tagName' wale object pe information hai ki hmne kon se exactly tag pe "event" lgaya hai i.e., agar 'tagName' 'INPUT' nhi hoga tho ye toggleSong machnine chlani hai */
    {
        toggleSong(); // yhaan pe toggleSong ki machnine rkh di jisse wo apna kaam kregi
    }
});



/*-------------------- window jab load hogi tab kya kaam krna hai --------------------*/

// Before code
// var songList = ['Badri Ki Dulhania (Title Track)',// yhaan pe hmne "songList" naam ka variable bnaya aur usmai hmne 'ARRAY' ki form mai song name dal diye
// 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
//
// var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3']; //yhaan hmne "fileNames" naam ka variable bnaya aur usmai hmne 'ARRAY' ki form mai us song ki file ka naam dal diya (means "relative path" dal diya)
//
// var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
//
// var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
//
// var durationList = ['2:56','3:15','2:34','2:29'];

// After code
var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image': 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image': 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image': 'song4.jpg'
    }]


    //common variable description

    var Playingnumber = 0  ;
    var shuffle=0;
    var equal = 0;
    var loop = 0;


    //

    function updateTimer(){
    var song = document.querySelector('audio');
    var ct =song.currentTime;
    var td =song.duration;
    var percentage = (ct/td)*100;
    $(".progress-filled").css('width',percentage+"%");



    }


    $(".player-progress").click(function(event) {
        var $this = $(this);

        // to get part of width of progress bar clicked
        var widthclicked = event.pageX - $this.offset().left;
        var totalWidth = $this.width(); // can also be cached somewhere in the app if it doesn't change

        // do calculation of the seconds clicked
        var calc = (widthclicked / totalWidth) * 100 ; // get the percent of bar clicked and multiply in by the duration


    var song = document.querySelector('audio');
    song.currentTime = (song.duration*calc)/100;

    updateTimer();



    });

    //


// ek machine bnayi hai



///////////////////

function changeCurrentSongDetails(songObj) { // yhaan pe hmne ek "changeCurrentSongDetails" naam ka function bnaya hai jismai 'songObj' parameter pass kra diya hai
    $('.current-song-image').attr('src','img/' + songObj.image) /* yhaan pe using jquery hmne 'current-song-image' ki class select ki , fir hm set kr rhe hai 'src' attribute
     'src' is made of 2 things 'foler name' and 'file name' by adding these 2 things we get a "source" for a song*/
    $('.current-song-name').text(songObj.name) // yhaan pe using jquery hmne 'current-song-name' ki class select ki , using 'songObj' 'name' text display kra diya
    $('.current-song-album').text(songObj.album) //yhaan pe using jquery hmne 'current-song-album' ki class select ki ,  using 'songObj' 'album' text display kra diya
}

window.onload = function() { /* yhaan pe window k load hone ka wait kro jab load hogi tab function k ander ka code run krna hai*/

changeCurrentSongDetails(songs[0]); // isse bydefault onload window 'song[0]' ki details show krta hai

/*-------------------- yhaan pe hmne "changeCurrentSongDetails" naam ki machine bnayi hai --------------------*/


/*------------------------------------------------------------------------------------------*/

// Before code
// $('#song1').click(function() { // using jquery hmne "song1" ID select ki fir usmai click function run kra diya.
// var audio = document.querySelector('audio'); // yhaan pe audio variable bnaya usmai fir hmne javascript se "audio" tag select kiya.
// var currentSong = audio.src; // yhaan pe currentSong variable bnaya jismai "audio.src" ki value dal di (absolute path).
// if(currentSong.search(fileNames[0]) != -1) // yhaan hmm search krte hai "fileNames[0]" ko from currentSong variable mai. Agar "fileNames[0]" mil jati hai tho return kr deta hai uska character like 0,1,2etc jisse start hora hai vrna "-1"(means not found) return krta hai. Agar search file "-1 k equal" ni hui tho 'if statement' chle.
// {
// toggleSong(); // yhaan toggleSong machine chlla di
// }
// else { // If statement false ho tho else statement chlao
// audio.src = fileNames[0]; // yhaan audio.src "fileNames[0]" ho tho song toggle ho jaye
// toggleSong(); // yhaan toggleSong machine chlla di
// }
// });


// After code
function addSongNameClickEvent(songObj,position) { // hmne ek machnine bnayi hai usmai user ko input dalne ki facility di hai and ye input hai 'songName and position'
    var songName = songObj.fileName; // yhaan pe hmne 'songName' variable bnaya hai jismai hmne 'songObj.fileName' object store kra kiya hai
    var id = '#song' + position; // yhaan pe "id" naam ka variable bnaya hai aur usmai '#song' and 'position' ko joda hai (means like position=1 then id = #song1)
$(id).click(function() { // yhaan pe 'id' pass hori hai (eg. $(#song1)) fir hmne function chla diya

                  Playingnumber= (position - 1)

var audio = document.querySelector('audio'); /* yhaan pe hmne 'audio' naam ka variable bnaya hai */
var currentSong = audio.src; // yhaan pe currentSong variable bnaya jismai "audio.src" ki value dal di (absolute path).
if(currentSong.search(songName) != -1) /* yhaan hmm search krte hai "songName" ko from currentSong variable mai. Agar "songName" mil jati
hai tho return kr deta hai uska character like 0,1,2etc jisse start hora hai vrna "-1"(means not found) return krta hai. Agar search file "-1 k equal" ni hui tho 'if statement' chle.*/
{
toggleSong(); // yhaan toggleSong machine chlla di
}
else { // If statement false ho tho else statement chlao
audio.src = songName; // yhaan audio.src "songName" ho tho song toggle ho jaye
toggleSong(); // yhaan toggleSong machine chlla di
changeCurrentSongDetails(songObj); // yhaan pe hmne "changeCurrentSongDetails" naam ki machni chla di hai
}
});
}


function changeSong() //we have made a machine jispe 2 buttons diye hai songName and position ke liye
{
var music =  songs[Playingnumber].fileName;
var song = document.querySelector("audio");
song.src = music;
toggleSong();
changeCurrentSongDetails(songs[Playingnumber])
}



for(var i =0; i < songs.length;i++) { /* yhaan pe for loop lgayi hai , jismai hmne variable bnaya hai i=0 ka (means initially 'i' ki value 0 hai)
 aur is loop ko tab tak chlana hai jab tak 'i' ki value less than 'songs.length' ho(means 4)*/
        var obj = songs[i]; // yhaan pe 'obj' naam ka variable bnaya hai jismai 'songs[i]' ki value store ki (eg. var obj=songs[1];)
        var name = '#song' + (i+1); // yhaan pe ek variable bnaya "name" usmai '#song' and increment value ko "concatinate" kiya hai
        var song = $(name); // yhaan pe 'song' naam ka variable bnaya jismai variable 'name' ki details store kr di
        song.find('.song-name').text(obj.name); // yhaan pe hmne jo song variable mai mai element(.song-name) select kiya hai uske text ko display kra do
        song.find('.song-artist').text(obj.artist); // yhaan pe hmne jo song variable mai mai element(.song-artist) select kiya hai uske text ko display kra do
        song.find('.song-album').text(obj.album); // yhaan pe hmne jo song variable mai mai element(.song-album) select kiya hai uske text ko display kra do
        song.find('.song-length').text(obj.duration); // yhaan pe hmne jo song variable mai mai element(.song-length) select kiya hai uske text ko display kra do
        addSongNameClickEvent(obj,i+1) // fir yhaan hmne addSongNameClickEvent chlaya
    }


$('#songs').DataTable({ // yhaan pe using jquery hmne "songs" wali id tag select kiya jismai hmne 'dataTable' k ander 'paging'(object) apss kr diya hai jika attribute 'false' hai
      paging: false
});


updateCurrentTime(); // yhaan pe hm 'updateCurrentTime' ki machnine ko chla rhe hai jisse song k current Time ko 'Time formate' mai show krta hai
setInterval(function() { //setInterval jitne milliseconds bolte ho, unte samay ke baad, baar baar jo function ke andar code hai usko run karta rehta hai
updateCurrentTime(); // yhaan pe hm 'updateCurrentTime' ki machnine ko chla rhe hai jisse song k current Time ko 'Time formate' mai show krta hai
},1000); // yhaan pe hmne seconds btaya hai ki kitne tym baad song ka tym update ho (1000 ms = 1 sec)
}


function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}


$(".fa-step-forward").click(function(){

if(shuffle==1)
{
      var audio = document.querySelector('audio');
      var nextSongNumber = randomExcluded(0,3,Playingnumber); // Calling our function from Stackoverflow

      var nextSongObj = songs[nextSongNumber];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      Playingnumber = nextSongNumber;


}


else {

          if(Playingnumber == songs.length-1){
          Playingnumber = 0;
          changeSong();
          }

          else {
          console.log("two");
          console.log(Playingnumber);
            Playingnumber++;
          changeSong();
          }

}

})




$(".fa-step-backward").click(function(){

if(Playingnumber == 0){
console.log("one");
Playingnumber = (songs.length-1);
changeSong();




}

else {
console.log("two");
console.log(Playingnumber);
  Playingnumber--;
changeSong();
}




})

// function shufflee(a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }
// }



$(".fa-random").click(function(){


$(".fa-random").toggleClass("active");
if(shuffle==0){

shuffle=1;
}
else {
  shuffle=0;
}
// if(shuffle==0)
// {
// shuffle = 1;
// shufflee(songs);
// changeCurrentSongDetails(songs[0]);
// song =document.querySelector("audio");
// song.src = songs[0].fileName;
// toggleSong();
// Playingnumber=0;
//
//     for (var i = 0; i < songs.length; i++) //Var i zero se 3 tak chalana hai
//
//     {
//         var obj = songs[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
//         var name = '#song' + (i + 1);
//         var song = $(name);
//         song.find('.song-name').text(obj.name); //("song1 .songname")
//         song.find('.song-artist').text(obj.artist);
//         song.find('.song-album').text(obj.album);
//         song.find('.song-length').text(obj.duration);
//         addSongNameClickEvent(obj, i + 1);
//     }
// }

// else {
//   shuffle = 0;
//
//    songs = [{
//           'name': 'Badri Ki Dulhania (Title Track)',
//           'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
//           'album': 'Badrinath ki Dulhania',
//           'duration': '2:56',
//           'fileName': 'song1.mp3',
//           'image': 'song1.jpg'
//       },
//       {
//           'name': 'Humma Song',
//           'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
//           'album': 'Ok Jaanu',
//           'duration': '3:15',
//           'fileName': 'song2.mp3',
//           'image': 'song2.jpg'
//       },
//       {
//           'name': 'Nashe Si Chadh Gayi',
//           'artist': 'Arijit Singh',
//           'album': 'Befikre',
//           'duration': '2:34',
//           'fileName': 'song3.mp3',
//           'image': 'song3.jpg'
//       },
//       {
//           'name': 'The Breakup Song',
//           'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
//           'album': 'Ae Dil Hai Mushkil',
//           'duration': '2:29',
//           'fileName': 'song4.mp3',
//           'image': 'song4.jpg'
//       }
//   ]
//
//   changeCurrentSongDetails(songs[0]);
//   song =document.querySelector("audio");
//   song.src = songs[0].fileName;
// toggleSong();
// Playingnumber=0;
//   for (var i = 0; i < songs.length; i++) //Var i zero se 3 tak chalana hai
//
//   {
//       var obj = songs[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
//       var name = '#song' + (i + 1);
//       var song = $(name);
//       song.find('.song-name').text(obj.name); //("song1 .songname")
//       song.find('.song-artist').text(obj.artist);
//       song.find('.song-album').text(obj.album);
//       song.find('.song-length').text(obj.duration);
//       addSongNameClickEvent(obj, i + 1);
//   }
//
//
// }
//





})

var equal;
$(".fa-bar-chart").click(function(){

$(this).toggleClass("active");
if(equal==0)
{

equal=1;

$("svg").css("display","inline-block");
$(".content").css("display","none");
$(".contain").css("display","inline-block");
$(".contain").css("background","black");


}
else{
equal=0;
$("svg").css("display","none");
$(".content").css("display","inline-block");
$(".contain").css("display","none");




}







})

$(".fa-repeat").click(function(){
$(".fa-repeat").toggleClass("active");
if(loop==0){

loop=1;

}
else{

loop=0;

}


})

function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}



$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (shuffle == 1) {
            var nextSongNumber = randomExcluded(0,3,Playingnumber); // Calling our function from Stackoverflow
console.log(nextSongNumber);
            console.log(nextSongNumber);
            var nextSongObj = songs[nextSongNumber];
            audio.src = nextSongObj.fileName;
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            Playingnumber = nextSongNumber;

        }
    else if(Playingnumber < 3) {
  console.log("hello2");
        var nextSongObj = songs[Playingnumber+1];
        audio.src = nextSongObj.fileName; // Change Soure
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        Playingnumber ++;// Change State
    }
    else if(loop == 1) {
  console.log("hello3");
         var nextSongObj = songs[0];
         audio.src = nextSongObj.fileName;
         toggleSong();
         changeCurrentSongDetails(nextSongObj);
         Playingnumber =  1;
     }
     else {
         $('.play-icon').removeClass('fa-pause').addClass('fa-play');
         audio.currentTime = 0;
     }
})


//   addSongNameClickEvent(fileNames[0],1);
// addSongNameClickEvent(fileNames[1],2);
// addSongNameClickEvent(fileNames[2],3);
// addSongNameClickEvent(fileNames[3],4);

$(".fa-microphone").hover(function(){

$("ol").css("display","inline-block")


})

$(".fa-microphone").mouseout(function(){

$("ol").css("display","none")


})
