import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class ProductDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {quantity: 1};

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleQuantityChange(event) {
        this.setState({quantity: event.target.value});
    } 
    
    handleAddToCart(id, quantity){
        this.props.addToCart(id, quantity);
    }

    render(){
        let product_id = parseInt(this.props.match.params[0]);
        console.log(product_id);
        let product = this.props.items.find( item => item.id === product_id );
        let quanity = 1;
        return (
            <div className="container mt-4 product-details">
                <div className="row">
                    <div className="col-sm-5 border">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="col-sm-7">
                        <h3>{product.title}</h3>
                        <div className="mt-3"><strong>Product ID : </strong> {product.product_id}</div>
                        <div><strong>Brand : </strong> {product.brand}</div>
                        <div><strong>Model : </strong> {product.model}</div>
                        <h3 className="mt-3">Price : Tk. {product.price.toFixed(2)}</h3>
                        <strong>Quantity:</strong> <input className="quantity" id="quantity" type="number" name="quanity" min="1" value={this.state.quantity} onChange={this.handleQuantityChange} />
                        <span to="/" className="add-to-cart ml-3" onClick={()=>{this.handleAddToCart(product.id, document.getElementById('quantity').value)}} >
                            <img width="40" src="/reactjs-shooping-cart/cart-add-icon.png" />
                        </span>
                        <div className="mt-3"><strong>Short Description : </strong> <br/>{product.desc}</div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-12">
                        <Tabs defaultActiveKey="description" transition={false}>
                            <Tab eventKey="description" title="Description">
                                {product.desc}
                            </Tab>
                            <Tab eventKey="specifications" title="Specifications">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut 
                                enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel 
                                eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </Tab>
                            <Tab eventKey="reviews" title="Reviews">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                                 quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
                                 laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
                                 cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus 
                                 autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
                                 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
                                 asperiores repellat
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, quanity) => { dispatch( addToCart(id, quanity) ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductDetails);