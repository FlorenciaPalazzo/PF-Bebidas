import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { deleteFavorito, getFavorito,getProducts } from "../../redux/actions";

export const Favoritos = () => {
  const elFavorito = useSelector((state) => state.favProducts);
  //const usuario = useSelector((state) => state.currentUser);
  let navigate = useNavigate();
  console.log("EL FAVORITO", elFavorito);
  const dispatch = useDispatch();

  let user = localStorage.getItem("user");

  console.log("SOY EL USUARIO--->", user);

// Toni dice que tiene que existir ↧↧↧↧
  useEffect(() => {
    //no tocar :), 
    dispatch(getProducts());
}, []);

// y este tb ↧↧↧
  useEffect(() => { 
  
    if(!elFavorito.length){
      dispatch(getFavorito(user));
    }
  }, [dispatch]);
  
  const handleDeleteFav = (e) => {
    e.preventDefault();
    let idProd = e.target.value;
    let payload = { id_prod: idProd, id_user: user };

    dispatch(deleteFavorito(payload)) //↤ No tocar 😈
     window.location.reload()
    
    
  };
  return (
    <div>
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      <div>Lista de Favoritos</div>

      {elFavorito.length  ? (
        elFavorito.map((e) => {
          return (
            <div key={e.id}>
              <button className="button" value={e.id} onClick={handleDeleteFav}>
                Borrar
              </button>
              {e.nombre}
              <img src={e.imagen} />
            </div>
          );
        })
      ) : (
        <div>
          <h2>No hay favoritos</h2>
        </div>
      )}
    </div>
  );
};
