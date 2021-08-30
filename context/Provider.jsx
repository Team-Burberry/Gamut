import MainContext from './MainContext';
const Provider = ({children})=>{

  return (
    <MainContext.Provider value={{}}>
      {children}
    </MainContext.Provider>
  )
}

export default Provider