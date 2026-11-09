import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')

// Componentes
import { Principal } from './principal'

function App() {
  let app = <>
    <h1>Hola pollo</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quae possimus? Ullam aut deleniti repudiandae, voluptas vero ad nobis nisi totam eveniet explicabo natus, molestias et repellendus laudantium quis dicta?</p>
    <Principal />
  </>
    

  return app
}

createRoot(root).render(<App />)
