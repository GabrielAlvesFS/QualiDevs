class ZipCodeView{
    changeInputs(){
        const currentZipCode = $('#zip-code').val()
        const infoZipCode = new RequestApi(currentZipCode).getZipCode()
        const state = $('#state')
        const city = $('#city')
        const district = $('#district')
        const street = $('#street')

        state.val(infoZipCode.estado)
        city.val(infoZipCode.cidade)
        district.val(infoZipCode.bairro)
        street.val(infoZipCode.rua)
    }
}