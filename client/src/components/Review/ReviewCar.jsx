import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";

export const ReviewCar = ({ titulo, comentario, puntaje, producto, fecha,nombreUsuario }) => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products);
  const filt = prod.find(e => e.id === producto);
  useEffect(()=>{
    dispatch(getProducts())
  }, []) 
  return (
    <div>
      <div>
        {filt ? 
        <div>
        <h4>{filt.nombre}</h4>
        <img width="10%" src={filt.imagen} alt="" />
        <h4>Fecha: {fecha.split('T')[0]}</h4>
        </div>
        :
        null
        }
      </div>
      <p>Titulo: {titulo}</p>
      <p>Comentario: {comentario}</p>
      Puntaje:{" "}
      <ReactStars
        count={puntaje}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        edit={false}
        color="#ffd700"
        
        
        />

        {nombreUsuario? <p>Nombre Usuario : {nombreUsuario}</p> : null}
        
    </div>
  );
};
