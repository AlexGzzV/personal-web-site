import { useContext, createContext } from "react";

export const GlobalContext = createContext([]);

const GlobalContextProvider = (props) => {
  const data = [
    {
      id: 1,
      name: 'Paquete 1: One-Page Website',
      price: '$9,000.00 MXN',
      list: [
        'Diseño personalizado y adaptado a dispositivos móviles (responsive design)',
        'Sección única con información clave (Inicio, Sobre Nosotros, Servicios, Contacto)',
        'Formulario de contacto funcional',
        'Integración con redes sociales',
        'Optimización básica para motores de búsqueda (SEO)',
        'Tiempo de entrega: 2 semanas',
        'Soporte y mantenimiento básico por 1 mes'
      ],
      aos: 'fade-right'
    },
    {
      id: 2,
      name: 'Paquete 2: Sitio con 3 Secciones Internas',
      price: '$16,000.00 MXN',
      list: [
        'Diseño personalizado y adaptado a dispositivos móviles (responsive design)',
        'Hasta 3 secciones internas (Inicio, Sobre Nosotros, Servicios, Blog, Contacto, etc.)',
        'Sección de aviso de privacidad',
        'Formulario de contacto avanzado con validación',
        'Integración con redes sociales',
        'Optimización básica para motores de búsqueda (SEO)',
        'Configuración de correo electrónico corporativo',
        'Galería de imágenes o portafolio',
        'Tiempo de entrega: 3 semanas',
        'Soporte y mantenimiento básico por 2 meses'
      ],
      aos: 'zoom-in'
    },
    {
      id: 3,
      name: 'Paquete 3: Sitio Completo con 4 Secciones Internas e Integraciones',
      price: '$21,000.00 MXN',
      list: [
        'Diseño personalizado y adaptado a dispositivos móviles (responsive design)',
        'Hasta 4 secciones internas (Inicio, Sobre Nosotros, Servicios, Blog, Portafolio, Contacto, etc.)',
        'Formulario de contacto avanzado con validación y CAPTCHA',
        'Integración con redes sociales',
        'Optimización avanzada para motores de búsqueda (SEO)',
        'Configuración de correo electrónico corporativo',
        'Galería de imágenes o portafolio con filtros',
        'Integración con Google Analytics para seguimiento de visitas y estadísticas',
        'Desarrollo de back-end personalizado (panel de administración para gestión de contenidos)',
        'Tiempo de entrega: 4 semanas',
        'Soporte y mantenimiento avanzado por 3 meses'
      ],
      aos: 'fade-left'
    }
  ];

   return(
    <GlobalContext.Provider value={{data: data}}>
      {props.children}
    </GlobalContext.Provider>
   )
}

export default GlobalContextProvider;