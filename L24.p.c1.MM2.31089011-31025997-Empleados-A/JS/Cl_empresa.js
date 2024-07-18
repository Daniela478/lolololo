export default class Cl_personal {

 constructor (){
    this.contAdmin = 0;
    this.acumSAdmin = 0;
    this.menor = 99999999999999
    this.auxnombre= "";
}

procesarPersonal(p){
    if (p.tipo === "ADMINISTRATIVO"){
        this.contAdmin++;
        this.acumSAdmin += p.salario;
    }
   // con menor salario 
    if (p.salario < this.menor) {
        this.menor = p.salario;
        this.auxnombre = p.nombre;
    }
}
 mostrarmenorsalario() {
  return this.auxnombre;
}
calpromedioadmin( ) {
    if (this.contAdmin > 0)
        return this.acumSAdmin / this.contAdmin;
    else
        return 0;
}

}