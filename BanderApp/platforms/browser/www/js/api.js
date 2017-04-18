var API = {
    baseUrl: "https://stud.hosted.hr.nl/0894594/bander-api/",
    endPoints: {
        login: "login.php",
        register: "register.php"
    },

    apiRequest: function(method = "GET", endpoint, data ) {
        var result = null;
        $.ajax({
            type: method,
            url: this.baseUrl + endpoint,
            dataType: 'json',
            data: data,
            async: false,
            success: function(jsonData) {
                result = jsonData;
            },
            error: function() {
                alert("Foute boel");
                result = false;
            }
        });

        return result;
    }
}

