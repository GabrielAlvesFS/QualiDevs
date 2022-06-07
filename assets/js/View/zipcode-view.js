class ZipCodeView{
    changeInputs(){
        const currentZipCode = $('#zip-code')
        const infoZipCode = new RequestApi(currentZipCode.val()).getZipCode()
        
        const state = $('#state')
        const city = $('#city')
        const district = $('#district')
        const street = $('#street')

        if (infoZipCode.estado !== undefined){
            currentZipCode.css('border', '2px solid #38BC7C')
            state.css('border', '2px solid #38BC7C')
            city.css('border', '2px solid #38BC7C')
            district.css('border', '2px solid #38BC7C')
            street.css('border', '2px solid #38BC7C')
        } 
        else {
            currentZipCode.css('border', '2px solid red')
            state.css('border', '2px solid red')
            city.css('border', '2px solid red')
            district.css('border', '2px solid red')
            street.css('border', '2px solid red')
        }   

        state.val(infoZipCode.estado)
        city.val(infoZipCode.cidade)
        district.val(infoZipCode.bairro)
        street.val(infoZipCode.rua)
    }

    changeInvalid(){
        const currentZipCode = $('#zip-code')
        const state = $('#state')
        const city = $('#city')
        const district = $('#district')
        const street = $('#street')

        //limpa os campos
        state.val('')
        city.val('')
        district.val('')
        street.val('')

        currentZipCode.css('border', '2px solid red')
        state.css('border', '2px solid red')
        city.css('border', '2px solid red')
        district.css('border', '2px solid red')
        street.css('border', '2px solid red')
    }
}