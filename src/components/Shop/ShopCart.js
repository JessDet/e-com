import {MdDeleteForever} from "react-icons/md"
import "../Shop/cart.css"

export default function ShopCart (){
    return (
        <div className="shop_body">
            <h1 className="cart_title">Panier</h1>
     

            <div className="ShopTable">
                  <table className="cart_table">
                      <thead className="thead">
                          <tr className="cart_tr">
                              <th>Produit</th>
                              <th>Ref</th>
                              <th>Prix</th>
                              <th>Quantité</th>
                              <th>Total</th>
                              <th> </th>
                          </tr>
                      </thead>
                      <tbody className="cart_thbody">
                      {/* {this.state.manage.map((manage) => ( */}
                          <tr className="cart_tr">
                              <td>Tomates</td>
                              <td>0001</td>
                              <td>€2.5</td>
                              <td>1</td>
                              <td>2.5</td>
                              
                              <td className="td"><button type="button" className="see"><MdDeleteForever/></button></td>
                            
                          </tr>
                             {/* ))} */}
                      </tbody>
                  </table>
              </div>

              </div>
    )
}