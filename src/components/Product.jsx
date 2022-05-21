import React,{Component} from "react";
import AURICULAR from "../xiami.jpg"

class Product extends Component{
    render(){
        return(
            <div className="product">
                <article className="product_item">
                    <div className="img_product_item">
                        <img src={AURICULAR}  alt=''/>
                    </div>
                    <h4>MI True Wireless Earbuds Basic 2</h4>
                    <div className="product_descripcion">
                        <p>Los auriculares bluetooth Xiaomi hacen que la música sea aún más agradable.
                            A prueba de sudor y salpicaduras te permite disfrutar de actividades al aire libre.
                            Este auricular cuenta con un diseño ultra elegante, mano de obra exquisita,
                            ligero y portátil, fácil de llevar. La estructura dinámica de unidades de doble bobina
                            te ofrecerá un sonido cristalino.
                        </p>
                    </div>
                    <h5>
                        <span>Precio $5200 </span>
                    </h5>
                    <h6>
                        <span>SKU</span>
                    </h6>
                   <h6>Disponible:<span> 319 </span>unidades</h6>
                </article>
            </div>
        )
    }
}
export default Product