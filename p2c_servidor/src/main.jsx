import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./AppAgendaServidor";

/**
 * Los efectos permiten que un componente se conecte y se sincronice con sistemas externos. Esto incluye manejar la red, el DOM del navegador, animaciones, widgets escritos usando una librería de interfaz de usuario diferente, y otro código que no es de React.

Como tal, los hooks de efectos son precisamente la herramienta adecuada para usar cuando se obtienen datos de un servidor.
 */


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

