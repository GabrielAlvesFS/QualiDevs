const infoZipCode = new ZipCodeController
const formValidator = new FormControl

formValidator.control()

$('#cepButton').on('click', (e) => {
    e.preventDefault()
    infoZipCode.control()
})


//pega o cep passa pra model? model modela, controller faz requesição, view mostra na tela

//MODEL:            Modelo que faz uma requsição pra api, crio um objeto com as informações obtidas


//VIEW:             Pega os dados da controller que chamou a model e mostro na tela?


//CONTROLLER:       pego o cep atual e quando clicar pra procurar, crio um modelo que faz a requisição por exemplo const dadosObjeto = new getDados(Cep)