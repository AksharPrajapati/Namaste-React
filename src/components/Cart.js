import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_LOGO_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="w-6/12 p-4 m-auto flex flex-col">
            <h1 className="text-3xl text-center">Cart</h1>
            <button className="bg-orange-500 p-1 text-white rounded-lg w-32 m-auto" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 ? "Cart is Empty" :
                cartItems.map((item, key) => {
                    return (
                        <div key={key} data-testid="cartItem" className="m-10 flex justify-center gap-5">
                            <img
                                width={300}
                                src={RESTAURANT_LOGO_URL + item?.cloudinaryImageId}
                                alt="food"
                                className="rounded-lg"
                            />

                            <div>
                                <h1 className="text-3xl font-bold">{item?.name}</h1>
                                <h1>
                                    ⭐️ {item?.avgRatingString} ({item?.totalRatingsString})
                                </h1>
                                <p>{item?.costForTwoMessage}</p>
                                <p>{item?.cuisines?.join(", ")}</p>
                                <h1 className="text font-bold">📍 {item?.areaName}</h1>
                                <h1>⏳ {item?.sla?.slaString}</h1>
                                {/* <button className="bg-orange-500 p-1 text-white rounded-lg w-32 mt-2" onClick={handleAddToCart}>Add +</button> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;