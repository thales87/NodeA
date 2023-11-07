module.exports = app => {
    app.listen(app.get("port"),() => {
        console.log(`app started`);
    });
}