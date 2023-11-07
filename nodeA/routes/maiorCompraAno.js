var request = require('request');
module.exports = app => {
    app.get('/maior-compra/:ano', function(req, res) {
        var ano = req.params.ano;
        request.get(
            'https://run.mocky.io/v3/fb94d1e0-f157-4133-94d7-37de04d5a8e6',
            { json: { key: 'value' } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.send(JSON.stringify(body.filter((itemCompra) => itemCompra.ano_compra == ano).sort((itemCompra1, itemCompra2) => itemCompra2.preco - itemCompra1.preco)[0]));
                }
            }
        );
    })
};