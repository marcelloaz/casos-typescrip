var Carro = /** @class */ (function () {
    function Carro(modelo) {
        this.modelo = modelo;
    }
    Carro.prototype.start = function () {
        alert('Este modelo de carro deu a partida:' + this.modelo);
    };
    Carro.prototype.stop = function () {
        alert('Este modelo de carro parou:' + this.modelo);
    };
    return Carro;
}());
window.onload = function () {
    var carro = new Carro('FERRARY');
    carro.start();
    carro.start();
};
//# sourceMappingURL=Carro.js.map