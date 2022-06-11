import {
  ADMIN_HANDLER,
  SET_USER,
  RESET_USER,
  GET_USERS_LOGED,
  GET_USER_DB,
  SET_LOADING,
  FILTER_BY_AZ,
  FILTER_BY_BRAND,
  FILTER_BY_GRADUATION,
  FILTER_BY_ML,
  FILTER_BY_PRICE,
  FILTER_BY_TYPE,
  GET_BRANDS,
  GET_PRODUCT_ID,
  GET_PRODUCT_NAME,
  GET_PRODUCTS,
  ADD_CARRITO,
  ADD_IN_CART,
  DELETE_ONE_PRODUCT,
  REMOVE_ALL_CARRITO,
  GET_MERCADO_PAGO,
  ORDER_MERCADO_PAGO,
  SET_FAV,
  GET_FAV,
  DEL_FAV,
  DELETE_MERCADO_PAGO,
  FEEDBACK_MERCADO_PAGO,
  ADD_DIRECCIONES,
  GET_DIRECCIONES,
  UPDATE_USER,
  GET_REVIEW,
  POST_REVIEW,
  PUT_REVIEW,
  DELETE_REVIEW,
  GET_REVPAGE,
  GET_ALL_REVIEWS,
  RESET_USER_DB,
  DELETE_DIRECCIONES,
  ADD_HIST,
  GET_HIST,
  CLEAR_STATE,
  PUT_PRODUCTO,
  GET_REVIEW_BY_USER,
  GET_USER_BY_ID,
  FIND_REVIEW_ID,
  FILTER_USER_REVIEW,
  //---------> prueba!!!
} from "../actions/actionsTypes";

const initialState = {
  currentUser: null,
  dbUser: null,
  isAdmin: null,
  isLoged: false,
  isLoading: true,
  usersLoged: [],
  brands: [],
  brandsCopy: [],
  products: [],
<<<<<<< HEAD
  productsCopy: [],
  productsCopyTwo: [],
=======
  editProduct: null,
>>>>>>> e86baa220798cefa5d254c8e7209b619890e6a5a
  searchProduct: [],
  productsSort: [],
  detail: [],
  userId : {},
  productCart: JSON.parse(localStorage.getItem("product"))
    ? JSON.parse(localStorage.getItem("product"))
    : [],
  mpSandBox: "",
  orderMP: [],
  feedBackMP: [],
  favProducts: [],
  direcciones: [],
  review: [],
  reviewPage: [],
  allReviews: [],
  allReviewsCopy : [],
  userReviews: [],
  findreview: [],
  searchProduct: [],
  favProducts: [],
  historial: [],
  favBoolean: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        productsCopy: payload,
        productsCopyTwo: payload,
        productsSort: payload,
      };
    case SET_USER:
      return { ...state, currentUser: payload, isLoged: true };
    case UPDATE_USER:
      return { ...state, dbUser: payload };
    case RESET_USER:
      return {
        ...state,
        currentUser: {},
        isLoged: false,
        favProducts: [],
        isAdmin: false,
      };

    case GET_USERS_LOGED:
      return { ...state, usersLoged: payload };
    case GET_USER_DB:
      return { ...state, dbUser: payload };
    case RESET_USER_DB:
      return { ...state, dbUser: {} };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case ADMIN_HANDLER: {
      console.log(process.env.REACT_APP_ADMIN_EMAIL, payload);
      if (process.env.REACT_APP_ADMIN_EMAIL === payload) {
        return { ...state, isAdmin: true };
      } else return { ...state, isAdmin: false };
    }

    case GET_PRODUCT_NAME:
      return { ...state, products: payload, searchProduct: payload };

    case GET_PRODUCT_ID:
      return { ...state, detail: payload, editProduct: payload };

    case GET_BRANDS:
      let brandFilter = [];
      state.productsSort.filter((e) => {
        if (!brandFilter.includes(e.marca)) {
          brandFilter.push(e.marca);
        }
      });
      return {
        ...state,
        brands: brandFilter,
        brandsCopy: brandFilter,
      };
    case FILTER_BY_BRAND:
      let brands = state.productsCopy.filter((b) => {
        if (b.marca?.includes(payload)) return b;
      });
      if (payload === "all") {
        brands = state.productsSort;
      }
      console.log("soy el actual product", brands);
      return {
        ...state,
        products: brands,
      };

    case FILTER_BY_TYPE:
      let filterToFilter = [];
      let filterType = [];
      console.log("filterTO", filterToFilter);
      console.log("filterTYPE", filterType);
      if (state.products.length <= 7) {
        console.log("entre al filterTO");
        state.products.forEach((e) => {
          if (e.tipo?.includes(payload)) return filterToFilter.push(e);
        });
      } else {
        state.productsSort.forEach((p) => {
          console.log("entre al filterTYPE");
          if (p.tipo?.includes(payload)) return filterType.push(p);
        });
      }

      return {
        ...state,
        products: !filterType.length ? [...state.products, filterToFilter] : filterType,
      };

    case FILTER_BY_GRADUATION:
      if (payload === "all") {
        return {
          ...state,
          products: state.productsSort,
        };
      }
      if (payload === "low") {
        return {
          ...state,
          products: state.productsSort.filter((e) => e.graduacion < 20),
        };
      }
      if (payload === "medium") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.graduacion > 20 && e.graduacion < 38
          ),
        };
      }
      if (payload === "high") {
        return {
          ...state,
          products: state.productsSort.filter((e) => e.graduacion > 38),
        };
      }
    case FILTER_BY_ML:
      if (payload === "all") {
        return {
          ...state,
          products: state.productsSort,
        };
      }
      if (payload === "ml_1") {
        return {
          ...state,
          products: state.productsSort.filter((e) => e.ml < 400),
        };
      }
      if (payload === "ml_2") {
        return {
          ...state,
          products: state.productsSort.filter((e) => e.ml > 400 && e.ml <= 749),
        };
      }
      if (payload === "ml_3") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.ml >= 750 && e.ml <= 949
          ),
        };
      }

      if (payload === "ml_4") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.ml >= 950 && e.ml < 1500
          ),
        };
      }
    case FILTER_BY_PRICE:
      if (payload === "all") {
        return {
          ...state,
          products: state.productsSort,
        };
      }
      if (payload === "price_1") {
        return {
          ...state,
          products: state.productsSort.filter((e) => e.precio < 500),
        };
      }
      if (payload === "price_2") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.precio > 500 && e.precio < 2000
          ),
        };
      }
      if (payload === "price_3") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.precio > 2000 && e.precio < 5000
          ),
        };
      }
      if (payload === "price_4") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.precio > 5000 && e.precio < 10000
          ),
        };
      }
      if (payload === "price_5") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.precio > 10000 && e.precio < 20000
          ),
        };
      }
      if (payload === "price_6") {
        return {
          ...state,
          products: state.productsSort.filter(
            (e) => e.precio > 20000 && e.precio < 35000
          ),
        };
      }
      if (payload === "price_7") {
        return {
          ...state,
          products: state.productsSort.filter((e) => e.precio > 35000),
        };
      }
    case FILTER_BY_AZ:
      if (payload === "all") {
        return {
          ...state,
          products: state.productsSort,
        };
      }
      if (payload === "az") {
        return {
          ...state,
          products: [...state.productsSort].sort((prev, next) => {
            if (prev.nombre > next.nombre) return 1;
            if (prev.nombre < next.nombre) return -1;
            return 0;
          }),
        };
      }
      if (payload === "za") {
        return {
          ...state,
          products: [...state.productsSort].sort((prev, next) => {
            if (prev.nombre > next.nombre) return -1;
            if (prev.nombre > next.nombre) return 1;
            return 0;
          }),
        };
      }
    case ADD_CARRITO:
      let repeated = state.productCart.find((e) => e.id === payload.id); //busca si existe ese id
      const cartProduct = [...state.productCart, payload]; //guarda todo
      let prodQuantity = state.productCart.map((prod) =>
        prod.id === payload.id
          ? {
              ...prod,
              quantity: prod.quantity + 1,
              subtotal: prod.precio * (prod.quantity + 1),
              stock: prod.stock - 1,
            }
          : prod
      ); //modifica el quantity si el id ya existia

      repeated
        ? localStorage.setItem("product", JSON.stringify(prodQuantity))
        : localStorage.setItem("product", JSON.stringify(cartProduct));

      return repeated
        ? {
            ...state,
            productCart: prodQuantity, //return modificado
          }
        : {
            ...state,
            productCart: [...state.productCart, payload], //return default
          };
    case DELETE_ONE_PRODUCT:
      let filter = state.productCart.find((e) => e.id === payload);
      let quantityLess = state.productCart.map((prod) =>
        prod.id === payload
          ? {
              ...prod,
              quantity: prod.quantity - 1,
              subtotal: prod.subtotal - prod.precio,
              stock: prod.stock + 1,
            }
          : prod
      );
      console.log("filter ---- > ", filter);
      console.log("quantityLess ---- > ", quantityLess);
      console.log("productCart", state.productCart);
      filter.quantity >= 2
        ? localStorage.setItem("product", JSON.stringify(quantityLess))
        : localStorage.setItem(
            "product",
            JSON.stringify(state.productCart.filter((e) => e.id !== payload))
          );
      return filter.quantity >= 2
        ? {
            ...state,
            productCart: quantityLess,
          }
        : {
            ...state,
            productCart: state.productCart.filter((e) => e.id !== payload),
          };
    case REMOVE_ALL_CARRITO:
      let array = [];
      localStorage.setItem("product", JSON.stringify(array));
      return {
        ...state,
        productCart: array,
      };
    case ORDER_MERCADO_PAGO:
      return {
        ...state,
      };
    case GET_MERCADO_PAGO:
      return { ...state, mpSandBox: payload };
    case DELETE_MERCADO_PAGO:
      console.log("entro al reducer DELETE MP");
      let carritoVacio = [];
      localStorage.setItem("product", JSON.stringify(carritoVacio));
      return {
        ...state,
        productCart: carritoVacio,
      };
    case FEEDBACK_MERCADO_PAGO:
      return {
        ...state,
        feedBackMP: payload,
      };
    case POST_REVIEW:
      return {
        ...state,
      };
    case GET_ALL_REVIEWS:
      return {
        ...state,
        allReviews: payload,
        allReviewsCopy : payload
      };
    case GET_REVIEW: //de los productos
      return {
        ...state,
        review: payload,
      };
    case GET_REVPAGE: // de la pag general
      return {
        ...state,
        reviewPage: payload,
      };
    case PUT_REVIEW:
      return {
        ...state,
      };
    case FIND_REVIEW_ID:
      return{
        ...state,
        findreview: payload,
      };
    case DELETE_REVIEW:
      return {
        ...state,
      };
    case GET_REVIEW_BY_USER:
      return {
        ...state,
        userReviews : payload
      }

    case SET_FAV:
      return { ...state };

    case GET_FAV:
      let productos = state.products;
      let ids = payload.map((e) => e.productoId);

      let arr = [];

      productos.forEach((e) => {
        //mapea productos pregunta si hay id prod
        console.log(e);
        if (ids.includes(e.id)) {
          console.log("e", e);
          arr.push(e);
        }
      });
      return {
        ...state,
        favProducts: arr,
      };

    case GET_USER_BY_ID : 
      return {
        ...state ,
        userId : payload
      }

    case DEL_FAV:
      return { ...state };

    case ADD_DIRECCIONES:
      return {
        ...state,
      };
    case GET_DIRECCIONES:
      return {
        ...state,
        direcciones: payload.direcciones,
      };

    case DELETE_DIRECCIONES:
      return {
        ...state,
      };

    case GET_HIST:
      // console.log(payload, "Soy payloaff")
      let prodHist = state.products;

      // console.log(prodHist, "soy los productos")

      let idHist = payload.map((e) => e.productoId);
      // console.log(idHist, "soy los Los IDS")
      let histArr = [];

      prodHist.map((e) => {
        if (idHist.includes(e.id)) {
          histArr.push(e);
        }
      });
      // console.log(histArr, "Teoricamente esto debería andar bien")
      return {
        ...state,
        historial: histArr,
      };

    case ADD_HIST:
      return { ...state };

      case FILTER_USER_REVIEW : 
      let reviews = state.allReviewsCopy
      let filteredReviews = payload === 'pagina' ? state.reviewPage : reviews.filter(r => r.productoId) 
      
      return {
        ...state,
        allReviews :  payload === 'all' ? state.allReviewsCopy : filteredReviews
      }

    case CLEAR_STATE:
      return {
        ...state,
        detail: [], 
        editProduct: null,
        review: [],
        userReviews : [],
      };
    case PUT_PRODUCTO:
      return {
        ...state,
      };
    default:
      return state;
  }
}
