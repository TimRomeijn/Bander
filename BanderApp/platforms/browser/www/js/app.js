var functions = {
     

    postRegisterData: function() {
        $.post(API.endPoints.register, $('#registerForm').serialize())
    }
}