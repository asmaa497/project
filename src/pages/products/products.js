import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstance";
import { useDispatch,useSelector } from "react-redux";
//import ChangeLanguage from "../../store/action";
import {NextPage} from "../../store/action";
import { PrevPage } from "../../store/action";
import './Pro.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const page=useSelector((state)=>state.page)
    const disbatch=useDispatch();
    const handleChangeToNext=()=>{
      disbatch(NextPage("1"));
      axiosInstance
      .get(`popular?api_key=1a7c0157ea1ba12758f5941137417eb8&page=${page+1}`)
      .then((res) => {
          console.log(res.data.results);
          setProducts(res.data.results);
      })
      .catch((err) => {
          console.log(err);
      });
    }
    const handleChangeToPrev=()=>{
        
        disbatch(PrevPage("1"));
        axiosInstance
        .get(`popular?api_key=1a7c0157ea1ba12758f5941137417eb8&page=${page-1}`)
        .then((res) => {
            console.log(res.data.results);
            setProducts(res.data.results);
        })
        .catch((err) => {
            console.log(err);
        });
      }
    useEffect(() => {
        
        axiosInstance
            .get(`popular?api_key=1a7c0157ea1ba12758f5941137417eb8&page=${page}`)
            .then((res) => {
                console.log(res.data.results);
                setProducts(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <>
            
            <a href="#" onClick={()=>handleChangeToPrev()}  style={{marginRight:'20%',marginTop:'5%',marginLeft:'20%'}} className="previous">&laquo; Previous</a>
            <a href="#" onClick={()=>handleChangeToNext()} className="next">Next &raquo;</a>
            <div className="container-fluid mt-4">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="card mt-4" style={{ width: 'calc(95%/3)', display: 'inline-block', margin: '6px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
                                style={{ height: "200px",width:'90%',margin:'3%' }}
                                className="card-img-top"
                                alt="..."
                            />                    <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>{product.title}</h4>
                                <p className="card-text" style={{margin:'3%'}}>{product.overview}</p>
                                <a className="btn btn-outline-primary" href={`/details/${product.id}`} style={{marginLeft:'30%'}}>Movie Details</a>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    );
}
export default Products;