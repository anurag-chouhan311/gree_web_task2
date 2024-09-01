const initialState = {
  itemData: [],
  orders: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      const itemIndex = state.itemData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.itemData[itemIndex].qnty += 1;
      } else {
        const obj = { ...action.payload, qnty: 1 };

        return {
          ...state,
          itemData: [...state.itemData, obj],
        };
      }
    case "incq":
      const itemIndex1 = state.itemData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex1 >= 0) {
        let obj = [...state.itemData];
        obj[itemIndex1].qnty += 1;
        return {
          ...state,
          itemData: [...obj],
        };
      }

    case "decq":
      const itemIndex2 = state.itemData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.itemData[itemIndex2].qnty > 1) {
        let obj = [...state.itemData];
        obj[itemIndex2].qnty -= 1;
        return {
          ...state,
          itemData: [...obj],
        };
      }

    case "dlt":
      const filtered = state.itemData.filter(
        (item, index) => item.id !== action.payload
      );
      return {
        ...state,
        itemData: [...filtered],
      };

    case "order":
      let obj={...action.payload};
      return {
        ...state,
        orders: [...state.orders,obj],
      };

    default:
      return state;
  }
};
