
import React from 'react';
import {v4} from 'uuid';
import {Contador} from './Contador';
import {Buscador} from './Buscador';
import {ListaElementos } from './ListaElementos';
import {Elemento} from './Elemento'
import {ButtonCrear} from './ButtonCrear'

const Todos =[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true},
  {text:'correr', completed:false},
  
];

function App() {
  const [lista, SetLista] = React.useState(Todos);
  const [valorBusqueda, SetValorBusqueda] = React.useState(' ')
  const totalLista = lista.length;
  const CompletadosNumero = lista.filter(todo => !!todo.completed).length;
  let valoresBuscados = [];

  if (!valorBusqueda >= 1){
    valoresBuscados = lista;
  }else{
    valoresBuscados = lista.filter(busqueda => {
      const listaTexto = busqueda.text.toLowerCase();
      const busquedaTexto = valorBusqueda.toLowerCase();
      return (
        listaTexto.includes(busquedaTexto));
        
    })
  }

  return (
    <React.Fragment>
      <Contador totales= {totalLista} completados={CompletadosNumero}/>
      <Buscador 
        valorBusqueda = {valorBusqueda}
        SetValorBusqueda = {SetValorBusqueda}
      />
      <ListaElementos>
        {valoresBuscados.map(todo => (
                <Elemento key= {v4()} text={todo.text}/>
            ))}
      </ListaElementos>
      <ButtonCrear/>

    </React.Fragment>
  );
}





export default App;
