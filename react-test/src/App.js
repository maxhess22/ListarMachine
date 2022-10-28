
import React from 'react';
import {v4} from 'uuid';
import {Contador} from './Contador';
import {Buscador} from './Buscador';
import {ListaElementos } from './ListaElementos';
import {Elemento} from './Elemento'
import {ButtonCrear} from './ButtonCrear'

const Todos =[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text:'correr', completed:false},
  {text:'saltar', completed:false},
 

];

function App() {
  //Lista Elementos
  const [lista, SetLista] = React.useState(Todos);

  //Contador 
  const totalLista = lista.length;
  const CompletadosNumero = lista.filter(todo => !!todo.completed).length;
  
  //Buscador 
  let valoresBuscados = [];
  const [valorBusqueda, SetValorBusqueda] = React.useState('')
  if (!valorBusqueda >= 1){
    valoresBuscados = lista;
  }else{
    valoresBuscados = lista.filter(busqueda => {
      const listaTexto = busqueda.text.toLowerCase();
      const busquedaTexto = valorBusqueda.toLowerCase();
      return listaTexto.includes(busquedaTexto);
        
    })
  }
  // Eliminar clase
    const [eliminarClase_st, seteliminarClase_st ] = React.useState("Elemento")
  // Completar Elemento 
    const completarTarea = (text)=> {
      const tareaIndex = lista.findIndex( list => list.text === text);
      const newLista = [...lista];
      newLista[tareaIndex].completed = true;
      SetLista(newLista);
      seteliminarClase_st("Elemento_completado")
    };
    
  // Eliminar Elemento
    const eliminarTarea = (text)=> {
      const tareaIndex = lista.findIndex( list => list.text === text);
      const newLista = [...lista];
      newLista.splice(tareaIndex, 1);
      SetLista(newLista);
    };


  return (
    <React.Fragment>
      <Contador totales= {totalLista} completados={CompletadosNumero}/>
      <Buscador 
        valorBusqueda = {valorBusqueda}
        SetValorBusqueda = {SetValorBusqueda}
      />
      <ListaElementos>
        {valoresBuscados.map(todo => (
                <Elemento 
                  key= {v4()} 
                  text={todo.text}
                  completar = {todo.completed}
                  Completado = {() => completarTarea(todo.text)}
                  Eliminar = {() => eliminarTarea(todo.text)}
                  claseEliminar = {eliminarClase_st}
                />))}
      </ListaElementos>
      <ButtonCrear/>

    </React.Fragment>
  );
}

export default App;
