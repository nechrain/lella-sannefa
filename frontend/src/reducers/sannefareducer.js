const stateInit = [];

const sannefaReducer = (state = stateInit, action) => {

  if (action.type === "GET_Platjour") {
    return action.payload; } 
  
                       else if (action.type === "ADD_Platjour") {
                                             return [...state, action.payload]; } 

                                             
          else if (action.type === "DELETE_Platjour") {
                                              return state.filter((el) => el.id !== action.payload); } 

            
                            else if (action.type === "EDIT_Platjour") {
                                                        return [...state, action.payload]; }
                      
  

  else {
    return state;
  }
};

export default sannefaReducer;
