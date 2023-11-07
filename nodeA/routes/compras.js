var request = require('request');
module.exports = app => {
    app.get("/compras", function (req, res) {
        request.get(
            'https://run.mocky.io/v3/5505527e-4108-47b3-933a-92894bb30e83',
            { json: { key: 'value' } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.send(JSON.stringify(body.sort((itemCompra1, itemCompra2) => itemCompra1.preco - itemCompra2.preco)));
                }
            }
        );
    });
};