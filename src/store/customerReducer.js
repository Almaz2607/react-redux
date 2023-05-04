const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

const initialtState = {
  customers: [],
};

export const customerReducer = (state = initialtState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addManyCustomersAC = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
export const addCustomerAC = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAC = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
