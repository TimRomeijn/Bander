$(document).ready(function() {
    listData(functions.getProfileData(8));

        //function to change add recording style to stop style onclick
    $(buttons.songButton).add(buttons.techniqueButton).add(buttons.sampleButton).on('click', function(e){
        e.preventDefault();
        console.log(buttons);
        if($(this).has('i')){
            if($(this).find("i").text() == "add"){
                $(this).find("i").text("stop");
            }
            else {
                $(this).find("i").text("add");
                console.log("hide the stop");
            }
        }
    })
});

var functions = {
    
    getProfileData : function(id) {
        var apiRequest = API.apiRequest ("GET", API.endPoints.profile, {id: id});
        console.log(API);
        console.log(apiRequest);
        return apiRequest;
    }
}

function listData(profile) {
    console.log(profile.image);
    if(profile) {
        $("#profileImage").attr("src", profile.image);
        $("#profileName").append(profile.name);
        $("#profileEmail").append(profile.email_adress);
        $("#profilePhoneNumber").append(profile.tel_number);
        // $("#profileGenre").append(profile.name);
        // $("#profileInstruments").append(profile.name);
        console.log(profile);
        
    }
    // $(genre_name).append(Api.endPoints.profile);
    // $(instrument_name).append(Api.endPoints.profile);
}

//list of buttons
var buttons = {
    songButton: $("#addSong"),
    techniqueButton: $("#addTechnique"),
    sampleButton: $("#addSample")
}



//function where audio is created and recorded with 10 second interval            
function recordAudio() {
    console.log("start recording");
    var src = "myrecording.mp3";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
            playAudio(src);
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code + err.message);
        }
    );

    // Record audio
    // mediaRec.startRecord();

    // // Stop recording after 10 seconds
    // setTimeout(function() {
    //     mediaRec.stopRecord();
    // }, 10000);
}
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}
// start audio capture
