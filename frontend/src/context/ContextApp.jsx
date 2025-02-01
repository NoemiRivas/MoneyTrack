import { createContext, useReducer } from "react"

const initialState = {
    Income: 2000,
    expenses:[
        {
            id: 12,
            category: "shopping",
            cost: 40,
            date: "2021-10-10",
            payMethod: "cash",
          },
          {
            id: 13,
            category: "holiday",
            cost: 400,
            date: "2021-10-10",
            payMethod: "cash",
          },
          {
            id: 14,
            category: "car service",
            cost: 50,
            date: "2021-10-10",
            payMethod: "cash",
          },
    ]
}
//cost
const totalExpenses = initialState.expenses.reduce((total, item) => {
    return (total += item.cost)
}, 0)

const appReducer =(state, action)=> {
    switch(action.type){
        case "ADD_EXPENSE":
            return{
                ...state,
                expenses: [...state.expenses, action.payload]
            }
            case "DELETE_EXPENSE":
                return{
                        ...state,
                        expenses: state.expenses.filter((expense)=> expense.id !== action.payload)
                }
default:
    return state
    }

}



export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(appReducer, initialState)
    return (
        <AppContext.Provider value={{Income: state.Income,expenses: state.expenses, dispatch, totalExpenses}}>
            {props.children}
        </AppContext.Provider>
    )
}