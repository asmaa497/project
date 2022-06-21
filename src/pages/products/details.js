import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios config/axiosInstance"; 
const Details = (props) => {
  const params = useParams();
//console.log("id"+params.id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log("id"+params.id)
    axiosInstance
      .get(`${params.id}?api_key=1a7c0157ea1ba12758f5941137417eb8`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} />
    </div>
  );
};

export default Details;
