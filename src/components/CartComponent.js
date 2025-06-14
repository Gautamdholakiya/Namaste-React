import { useSelector } from "react-redux"
import MenuCard from "./MenuCard"

const CartComponent = () => {
    
    const cartSelector = useSelector((store) => store.cart.items )
    
    console.log(cartSelector)
    return(
        <div>
            <h1 className="text-center font-bold p-2 my-2">Cart({cartSelector.length})</h1>
            <div>
                {/* <MenuCard props={cartSelector}/> */}
            </div>
        </div>
    )
}


export default CartComponent