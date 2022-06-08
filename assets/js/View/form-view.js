class FormView{
    changeColors(){
        const formValidated = new FormValidator
        const name = $('#name')
        const email = $('#email')
        const pass = $('#password')
        const confirmPass = $('#confirm-password')
        const rg = $('#rg')
        const state = $('#state')
        const city = $('#city')
        const district = $('#district')
        const street = $('#street')
        const number = $('#number')
        const complement = $('#complement')

        name.on('change', ()=>{
            if (formValidated.name() == true){
                name.css('border', '2px solid #38BC7C')
            } else {
                name.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        email.on('change', ()=>{
            if (formValidated.email() == true){
                email.css('border', '2px solid #38BC7C')
            } else {
                email.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        confirmPass.on('change', ()=>{
            if (formValidated.password() == true){
                pass.css('border', '2px solid #38BC7C')
                confirmPass.css('border', '2px solid #38BC7C')
            } else {
                pass.css('border', '2px solid red')
                confirmPass.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        email.on('change', ()=>{
            if (formValidated.email() == true){
                email.css('border', '2px solid #38BC7C')
            } else {
                email.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        rg.on('change', ()=>{
            if (formValidated.rg() == true){
                rg.css('border', '2px solid #38BC7C')
            } else {
                rg.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        state.on('change', ()=>{
            if (formValidated.state() == true){
                state.css('border', '2px solid #38BC7C')
            } else {
                state.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        city.on('change', ()=>{
            if (formValidated.city() == true){
                city.css('border', '2px solid #38BC7C')
            } else {
                city.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        district.on('change', ()=>{
            if (formValidated.district() == true){
                district.css('border', '2px solid #38BC7C')
            } else {
                district.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        number.on('change', ()=>{
            if (formValidated.number() == true){
                number.css('border', '2px solid #38BC7C')
            } else {
                number.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        street.on('change', ()=>{
            if (formValidated.street() == true){
                street.css('border', '2px solid #38BC7C')
            } else {
                street.css('border', '2px solid red')
            }

            formValidated.verified()
        })

        complement.on('change', ()=>{
            if (formValidated.complement() == true){
                complement.css('border', '2px solid #38BC7C')
            }

            formValidated.verified()
        })
    }
}