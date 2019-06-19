const multer = require('multer')

//Exportar o módulo multer, o qual vamos executar passando as configurações em um objeto
module.exports = (multer({
    //Como sera feito a armazenamento dos arquivos
    storage: multer.diskStorage({
        //Qual o destino dos arquivos
        destination: (req, file, cb) => {
            //Setamos o destino como segundo parâmetro do callback
            cb(null, './app/public/img')
        },
        //Como deve se chamar
        filename: (req, res, cb) => {
            //Setamos o nome do arquivo que vai ser salvado no segundo  parametro
            //Apenas concatena a data atual com o nome original do arquivo, que a biblioteca nos disponibiliza
            cb(null, Date.now().toString() + '-'+file.originalname)
        }
    }),//Fim da configuração de armazenamento

    //Filtrando os arquivos, quais formatos aceitos/esperados
    fileFilter: (req, file, cb) => {
        //Procurando o formato do arquivo em um array com formatos aceitos
        //A função vai testar se algum dos formatos aceitos do Array é igual ao formato do arquivo
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find( formatoAceito => formatoAceito == file.mimetype)

        //O formato do arquivo bateu com algum aceito?
        if(isAccepted){
            //Executamos o callback com o segundo argumento true(validação aceita)
            return cb(null, true)
        }
        //Se o arquivo não bateu com nenhum aceito, executamos o callback com o segundo valor false (validação falhou)
        return cb(null, false)
    }
}))