class ZipCodeController{
    control(){
        const currentZipCode = $('#zip-code').val()
        const infoZipCode = new RequestApi(currentZipCode)
        const changeInfoInputs = new ZipCodeView

        //se o cep for menor que 8 digitos faz isso:
        if (currentZipCode.length !== 8){
            changeInfoInputs.changeInvalid()
        }
        
        infoZipCode.getZipCode()
        changeInfoInputs.changeInputs()
    }

}



// const teste2 = $('#cepButton')

// $('form').submit(false)

// $('#cepButton').on('click', () =>
// {
//     const currentZipCode = $('#zip-code').val()
//     const infoZipCode = new requestApi(currentZipCode).getZipCode()
    
//     console.log(infoZipCode)

// })

// class Controller{
//     async teste(){
//         const currentZipCode = $('#zip-code').val()
//         const infoZipCode = new requestApi(currentZipCode)
//         const resultInfo = await infoZipCode.getZipCode()
//         console.log(await resultInfo);
//     }


// }

// const teste2 = $('#cepButton')

// $('form').submit(false)

// $('#cepButton').on('click',  () =>
// {
//     const controller = new Controller()
//     controller.teste()

// })