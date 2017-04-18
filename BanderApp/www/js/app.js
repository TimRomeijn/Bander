var functions = {
     

    getProfileData : function(id) {
        var apiRequest = API.apiRequest ("GET", API.endPoints.profile, {id: id});
        return apiRequest;
    }
}

function listData(image, name, email, tel_number, genre_name, instrument_name) {
    $(image).attr("src", API.endPoints.profile);
}