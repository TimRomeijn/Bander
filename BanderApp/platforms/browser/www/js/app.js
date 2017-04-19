$(document).ready(function() {
    listData(functions.getProfileData(8));
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