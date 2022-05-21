import React, {Component} from "react";
import Product from "./Product";

class ListProducts extends Component{
    render (){
        return(
            <div className="content-products">
                <Product/>
            </div>
        )
    }
}
export default ListProducts