class FormValidator{
    name(){
        const name = $('#name').val()

        if (name.length >= 3 ){
            return true
        } else {
            return false
        }
    }

    email(){
        const email = $('#email').val()

        if(email.includes('@') && email.includes('.')){
            return true
        } else {
            return false
        }

    }

    password(){
        const pass = $('#password').val()
        const confirmPass = $('#confirm-password').val()

        if(pass === confirmPass){
            return true
        } else {
            return false
        }
    }

    zipCode(){
        const zipCode = $('#zip-code').val()

        if(zipCode.length == 8){
            return true
        } else {
            return false
        }
    }

    rg(){
        const rg = $('#rg').val()

        if(rg.length >= 7){
            return true
        } else {
            return false
        }
    }

    state(){
        const state = $('#state').val()

        if(state.length !== 0){
            return true
        } else {
            return false
        }
    }

    city(){
        const city = $('#city').val()

        if(city.length !== 0){
            return true
        } else {
            return false
        }
    }

    district(){
        const district = $('#district').val()

        if(district.length !== 0){
            return true
        } else {
            return false
        }
    }

    number(){
        const number = $('#number').val()

        if(number.length !== 0){
            return true
        } else {
            return false
        }

    }

    street(){
        const street = $('#street').val()

        if(street.length >= 0){
            return true
        } else {
            return false
        }

    }

    complement(){
        return true
    }

    verified(){
        const formValidator = new FormValidator

        if (formValidator.name() == true && 
            formValidator.email() == true && formValidator.password() == true && formValidator.zipCode() == true && formValidator.rg() == true && 
            formValidator.state() == true &&
            formValidator.city() == true &&
            formValidator.district() == true &&
            formValidator.number() == true &&
            formValidator.street()
        ){
            $("#signupButton").attr("disabled", false)
        } else {
            $("#signupButton").attr("disabled", true)
        }
        
    }

}