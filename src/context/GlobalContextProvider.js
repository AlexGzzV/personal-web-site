import { useContext, createContext } from "react";

export const GlobalContext = createContext([]);

const GlobalContextProvider = (props) => {
  const data = [
    {
      id: 1,
      name: 'Paquete 1',
      price: '$5,000.00 MXN',
      list: ['1 UX One-page', 'Hasta 500 palabras'],
      aos: 'fade-right'
    },
    {
      id: 2,
      name: 'Paquete 2',
      price: '$8,000.00 MXN',
      list: ['1 UX One-page', 'Hasta 500 palabras'],
      aos: 'zoom-in'
    },
    {
      id: 3,
      name: 'Paquete 3',
      price: '$12,000.00 MXN',
      list: ['1 UX One-page', 'Hasta 500 palabras'],
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