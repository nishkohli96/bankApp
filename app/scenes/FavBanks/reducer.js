// Initial State
const initialState = {
	banksList: [{name:'ban'}],
};

  const bankReducer = (state = initialState, action) => {

	switch (action.type) {

		case 'ADD_BANK': {
			const newBank = state.banksList.push(action.bankItem)
			return {
				...state,
				banksList: newBank
			}
	  	}

	  	case 'REMOVE_BANK': {
			const newList = state.banksList.filter(bank => bank.ifsc !== action.ifsc )
			return {
		  		...state,
				banksList: newList
			}
		}
		  
	  	default: {
			return state;
	  	}
	}
  };

  export default bankReducer;