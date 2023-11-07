var request = require('request');
module.exports = app => {
    app.get('/recomendacao/cliente/tipo', function(req, res) {
        // OBTER OS VINHOS
        request.get(
            'https://run.mocky.io/v3/5505527e-4108-47b3-933a-92894bb30e83',
            { json: { key: 'value' } },
            function (error, response, listaVinhos) {
                if (!error && response.statusCode == 200) {
                    // OBTER CLIENTES
                    request.get(
                        'https://run.mocky.io/v3/07acae80-d898-4136-a803-4adc1a3131eb',
                        { json: { key: 'value' } },
                        function (error, response, listaClientes) {
                            if (!error && response.statusCode == 200) {
                                var rankClientes = listaClientes.map(cliente => ({
                                    cliente: cliente,
                                    recomendacao: listaVinhos.find(
                                        (vinho) => vinho.tipo_vinho == cliente.tipo_vinho_preferido
                                    )
                                }));
                                res.send(JSON.stringify(rankClientes.sort((rankCliente1, rankCliente2) => rankCliente2.totalGasto - rankCliente1.totalGasto).slice(0, 3)));
                            }
                        }
                    );
                }
            }
        );
        
    })
};