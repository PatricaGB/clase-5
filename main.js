//Arboles:estrcutura de datos jerarquica, conxion de nodos clasificando raiz, hijos y padres.

class Nodo{
    constructor(valor){
        this.valor=valor;
        this.izquierda=null;
        this.derecha=null;
    }
}

class Arbol{
    constructor(){
        this.raiz=null;
    }
    agregarElemento(valor){
        let nuevo=new Nodo(valor);
        if(this.raiz==null){
            this.raiz=nuevo;
        }
        else {
            this.agregar(nuevo,this.raiz);
        }
    }

    agregar(nuevo,nodo){
        if(nuevo.valor<nodo.valor){
            if(nodo.izquierda==null){
                nodo.izquierda=nuevo;
            }
            else{
                this.agregar(nuevo,nodo.izquierda);
            }
            
        }
        else{if(nodo.derecha==null){
            nodo.derecha=nuevo;
        }
            else{
            this.agregar(nuevo,nodo.derecha);
            }
        }
    }
    buscar(valor){
        return this.buscarElemento(valor,this.raiz);
    }
    buscarElemento(valor,nodo){
        if(nodo!=null){
            if(valor<nodo.valor){
                return this.buscarElemento(valor,nodo.izquierda);
            }
            else{
                if(valor>nodo.valor){
                return this.buscarElemento(valor,nodo.derecha);
                }
                else{
                    return nodo;
                }
            }
        }
    }
    
    enOrden(){
        let resultado=[];
        this.enOrdenAux(this.raiz,resultado);
        return resultado;
    }
    enOrdenAux(nodo,resultado){
        if(nodo!=null){
            this.enOrdenAux(nodo.izquierda,resultado);
            resultado.push(nodo.valor);
            this.enOrdenAux(nodo.derecha,resultado);
        }
    }

    enPreOrden(){
        let resultado=[];
        this.enPreOrdenAux(this.raiz,resultado);
        return resultado;
    }
    enPreOrdenAux(nodo,resultado){
        if(nodo!=null){
            resultado.push(nodo.valor);
            this.enPreOrdenAux(nodo.izquierda,resultado);
            this.enPreOrdenAux(nodo.derecha,resultado);
        }
    }
    enPostOrden(){
        let resultado=[];
        this.enPostOrdenAux(this.raiz,resultado);
        return resultado;
    }
    enPostOrdenAux(nodo,resultado){
        if(nodo!=null){
            this.enPostOrdenAux(nodo.izquierda,resultado);
            this.enPostOrdenAux(nodo.derecha,resultado);
            resultado.push(nodo.valor)
        }
    }
}

let arbol=new Arbol();
arbol.agregarElemento(15);
arbol.agregarElemento(10);
arbol.agregarElemento(25);
arbol.agregarElemento(18);
arbol.agregarElemento(35);
arbol.agregarElemento(2);
console.log(arbol.raiz); 
console.log(arbol.buscar(2));

console.log(arbol.enOrden()); //menor a mayor
console.log(arbol.enPreOrden()); //raiz, menores, mayores
console.log(arbol.enPostOrden());//menores, mayores, raiz


//Grafos: estructura de datos sin jerarquia, formada por grupos de nodos y conectandose entre ellos
//tres tipos: grafos no dirigidos, grafos dirigidos y grafos ponderados
//se pueden representar por medio de una matriz y por medio de columnas
