class Carro {
    modelo: string;

    constructor(modelo: string) {
        this.modelo = modelo;
    }

    start() {
        alert('Este modelo de carro deu a partida:' + this.modelo);
    }

    stop() {
        alert('Este modelo de carro parou:' + this.modelo);
    }
}

window.onload = function () {
    var carro = new Carro('FERRARY');
    carro.start();
    carro.start();
}