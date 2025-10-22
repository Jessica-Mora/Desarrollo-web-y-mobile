import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
//import {useParams} from 'react-router-dom';

function App() {
  const params = useParams();
  const [dato, setDato] = useState(null);

  useEffect(() => {
    const name = params.name;
    const email = params.email;

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setDato(data));

  }, [params.name, params.email]);
    if (!dato) return <p>Cargando..</p>;
  

  return (
    <>
      {dato.map(usuario => (
      <div key={usuario.id}>
      <p>{usuario.name}</p>
      <p>{usuario.email}</p>
      <br />
  </div>
))}
    </>
  )
}

export default App

/* EJERCICIO 2 :
import './App.css'
function informacion(props){
  return(
    <>   
      {props.children}  
    </>
  )
}

function App() {
  return (
    <>
      <h1>ta01</h1>
      <div className="card">
        <Informacion>
          <h1>Proyecto React</h1>
          <p>rear una app con componentes</p>
          <p>persona</p>
          <p>2025-09-24</p> 
          <p>2025-10-01</p>
        </Informacion>
      </div>
    </>
  )
}
export default App
 #### TERMINA EJERCICIO 2 ####################################################
*/

/*  EJERCICIO 3:

<div className="card">
        <p></p>
        <input type="text" onInput={()=>document.querySelector("p").textContent=document.querySelector("input").value}/>
      </div>

####### TERMINA EJERCICIO 3 ####################*/

/* EJERCICIO 4        

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <p> count is {count}</p>
        <button onClick={() => setCount((count) => count + 1) }>
          +
        </button>
         <button onClick={() => setCount((count) => count - 1 )}>
          -
        </button>
      </div>
    </>
  )
}

export default App
##### TERMINA EJERCICIO 4 ######*/

/*   EJERCICIO 5 
     
function App() {
  
  let count = 0
  return (
    <> 
      <div className="card">
        <p>texto que aparece </p>
        <button onClick={() => {
          count +=1
          if (count %2==0){
            document.querySelector("p").textContent="";
          }
          else{
            document.querySelector("p".textContent="texto que aparece ")
          }
        }}>  
        </button>
      </div>
    </>
  )
}
#### TERMINA EJERCICIO 5 #####*/

/*  EJERCICIO 6
lo siguiente funciona pero no es la forma correcta de hacerlo,

import { useState } from 'react'
import './App.css'
function App() { 
  return (
    <> 
      <h1>Lista</h1>
      <ul id='u1'>
      </ul>
      <div className="card">     
        <input id='t1' type='text' placeholder='Tarea'></input>
        <button onClick={() => { 
          let p = document.getElementById('t1').value
          console.log(p)
          let li = document.createElement("li")
          li.textContent = p
          let lista = document.getElementById("u1")
          lista.append(li)  
        }}>  
        Agregar tarea</button>
      </div>
    </>
  )
}
export default App

### TERMINA EJERCICIO 6 ##########*/

/*  EJERCICIO 7

import { useState } from 'react'
import './App.css'

function App() {
  // 1️⃣ Estado para guardar las tareas
  const [tareas, setTareas] = useState([])

  // 2️⃣ Estado para controlar el input
  const [nuevaTarea, setNuevaTarea] = useState('')

  // 3️⃣ Función que agrega una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return; // evita tareas vacías

    // Crea una nueva lista de tareas
    setTareas(prev => [...prev, { id: Date.now(), text: nuevaTarea }])
    setNuevaTarea('') // limpia el input
  }
//
  const borrarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  }
  const editarTarea = (id) => {
    
    //setTareas(  );
  }


  return (
    <> 
      <h1>Lista</h1>

      {/* Lista renderizada dinámicamente }
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.text}
            <button onClick={() => borrarTarea(tarea.id)}>Borrar tarea</button>
            <button onClick={() => editarTarea(tarea.id)}>Editar tarea</button>
            </li>
        ))}
      </ul>

      <div className="card">
        {/* Input controlado }
        <input 
          type="text" 
          placeholder="Tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        
        <button onClick={agregarTarea}>Agregar tarea</button>
        
      </div>
    </>
  )
}

export default App

####### TERMINA EJERCICIO 7 */

/*  EJERCICIO 9   

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title = `Contador: ${count}`
  }, [count])
  return (
    <>
      <div className="card">
        <p> count is {count}</p>
        <button onClick={() => setCount((count) => count + 1) }>
          +
        </button>
         <button onClick={() => setCount((count) => count - 1 )}>
          -
        </button>
      </div>
    </>
  )
}

export default App

##### TERMINA EJERCICIO 9 ########*/




