$(document).ready(function() {
    listData(functions.getProfileData(8));

        //function to change add recording style to stop style onclick
    $(buttons.songButton).add(buttons.techniqueButton).add(buttons.sampleButton).on('click', function(e){
        e.preventDefault();
        if($(this).has('i')){
            if($(this).find("i").text() == "add"){
                $(this).find("i").text("stop");
                recordAudio();
            }
            else {
                $(this).find("i").text("add");
                stopRecording();
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
};

var mediaRec = null;

//function where audio is created and recorded with 10 second interval            
function recordAudio() {
    mediaRec = new Media("myrecording.mp3",
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
            playAudio("myrecording.mp3");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code + err.message);
        }
    );
    mediaRec.startRecord();
}

function stopRecording() {
     mediaRec.stopRecord();
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
