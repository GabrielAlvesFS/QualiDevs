//Monta um modelo de requisição para API
class RequestApi{
    constructor(cep){
        this.zipCode = cep
    }

    //metodo que retorna um objeto com os dados necessarios de acordo com o cep passado
    getZipCode (){
        let currentZipCode;
        $.ajax({
            url: `https://viacep.com.br/ws/${this.zipCode}/json/`,
            type: 'GET',
            async: false,

            success: (apiData)=>{
                if (apiData.erro == "true"){
                    currentZipCode = {
                        erro: "true"
                    }
                } else {
                    currentZipCode = {
                        "estado": `${apiData.uf}`,
                        "cidade": `${apiData.localidade}`,
                        "bairro": `${apiData.bairro}`,
                        "rua": `${apiData.logradouro}`
                    }
                }
            },

            error: ()=>{
                throw new Error('Cep Inválido!')
            }
        })

        return currentZipCode
    }
}




// //Monta um modelo de requisição para API
// class requestApi{
//     constructor(cep){
//         this.zipCode = cep
//     }

//     //metodo que retorna um objeto com os dados necessarios de acordo com o cep passado
//     async getZipCode (){
//         let currentZipCode;
//         await $.ajax({
//             url: `https://viacep.com.br/ws/${this.zipCode}/json/`,
//             type: 'GET',
//             async: false,

//             success: (apiData)=>{
//                 if (apiData.erro == "true"){
//                     console.log('cep inválido')
//                 } else {
//                     currentZipCode = {
//                         "estado": `${apiData.uf}`,
//                         "cidade": `${apiData.localidade}`,
//                         "bairro": `${apiData.bairro}`,
//                         "rua": `${apiData.logradouro}`
//                     }
//                 }
//             },

//             error: ()=>{
//                 throw new Error('Cep Inválido!')
//             }
//         })

//         return currentZipCode
//     }

// }
