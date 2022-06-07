class ZipCodeController{
    control(){
        const currentZipCode = $('#zip-code').val()
        const infoZipCode = new RequestApi(currentZipCode)
        const changeInfoInputs = new ZipCodeView
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