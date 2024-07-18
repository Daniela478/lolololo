export default class Cl_personal {
    constructor(n, t, s){
        this.nombre = n;
        this.tipo = t;
        this.salario = +s;
    }

    set tipo(t){
        this._tipo = t;
    }

    set salario(s){
        this._salario = +s;
    }

    set nombre(n){
        this._nombre = n;
    }

    get tipo(){
        return this._tipo;
    }

    get salario(){
        return this._salario;
    }

    get nombre(){
        return this._nombre;
    }
}