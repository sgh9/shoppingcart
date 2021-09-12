const reducer = (state, action) => {
  let items = [];

  switch (action.type) {
    case 'ADD_ITEM':
      items = [...state, action.payload.item];
      return items;
    case 'INCREMENT_COUNT':
      let quantity = 30;
       items = [...state].map(item => {
       
        if (item.name === action.payload.name ) {
          //count > 1
          if(+action.payload.count > 1) {
            return { ...item, count: +action.payload.count };
          } 
           //count == 0
          if (+action.payload.count === 0 ||
            item.count === 1 && +action.payload.count ===-1 
          ) {

            return { ...item, count: 1 };
          } 
          //count = 1 
          
          if(+action.payload.count === 1  && item.count < quantity  )  {
            return { ...item, count: item.count + 1  };
          } 
          
          //count = -1 
          if((+action.payload.count === -1 && item.count > 1))  {
            return { ...item, count: item.count - 1  };
          }  
        }
        return item;
      });
      return items;
    case "REMOVE_ITEM": 
        items = [...state].filter(item => {
        
          return item.name.toString() !== action.payload.name.toString() ;
        });
        
        return items;
    case "REMOVE_ITEMS": 
    items = [];
    
    return items;
    default:
      return state;
  }
};
export default reducer;
