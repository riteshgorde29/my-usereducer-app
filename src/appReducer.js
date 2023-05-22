const appReducer=(state,action)=>{
   switch(action.type){
    case 'NAME_UPDATE':
        state={
            ...state,
            name:action.payload
        }
        break;
    case 'LOC_UPDATE':
            state={
                ...state,
                loc:action.payload
            }
            break;
   }
   return state;
}

export default appReducer
