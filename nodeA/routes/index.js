module.exports = app => {
    app.get("/", (req,res) => {
        res.json({status:"pagina inicial da aplicação"});
    });
};