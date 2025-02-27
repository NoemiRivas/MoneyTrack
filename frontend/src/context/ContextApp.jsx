import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext({});
//example
const initialState = {
  user: null,
  auth: false,
  Income: 2000,
  expenses: [
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
  ],
};
//cost
const totalExpenses = initialState.expenses.reduce((total, item) => {
  return (total += item.cost);
}, 0);

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_USER":
      return { ...state, user: action.payload, auth: true };
    case "LOGOUT":
      return { ...state, user: null, auth: false };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  //incomes
  const [ingreso, setIngreso] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [errors, setErrors] = useState(null);
//create
  const addIncome = async (title,type,amount,category,description) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/transactions",
        {
          title: String(title).trim() || "Sin título",  // Evita errores de conversión
          type: String(type).trim(),
          amount: parseFloat(amount) || 0,  // Asegura que sea un número
          category: String(category).trim(),
          description: description ? String(description).trim() : "",
        }
      );
 
      console.log("✅ Transacción guardada:", response.data);
      await getIncome(); 
      dispatch({
        type: "ADD_TRANSACTION",
        payload: response.data,
      });

    } catch (error) {
      console.error(
        "❌ Error al registrar la transacción:",
        error.response?.data || error.message
      );
      alert("Error al guardar la transacción. Intenta de nuevo.");
    }
  };
  //getHistory
  const getIncome = async () => {
    const response = await axios.get("http://localhost:3000/api/all-transactions")
    const ingresos = response.data.filter((t) => t.type === "ingreso");
    const gastos = response.data.filter((t) => t.type === "gasto");
    setIngreso(ingresos)
    setGasto(gastos)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/user/perfil", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAuth(true);
          dispatch({ type: "SET_USER", payload: response.data });
        })
        .catch(() => {
          logout();
        });
    }
  }, []);

  //user

  const login = async (email, password, navigate) => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      dispatch({ type: "SET_USER", payload: user });
      navigate("/perfil");
    } catch (error) {
      console.error("Error en el login:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Error de autenticación"
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AppContext.Provider
      value={{ ...state, login, logout, dispatch, addIncome, getIncome, ingreso, gasto }}
    >
      {children}
    </AppContext.Provider>
  );
};
