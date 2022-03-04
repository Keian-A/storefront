import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, addItemToCart, removeItemFromCart } from '../../store/cart.js';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../css/cart.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Cart(props) {

    let dispatch = useDispatch();
    let cart = useSelector(state => state.cart);
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let temp = 0;
        cart.forEach(element => {
            temp += (element.item.price * element.count);
        });
        setTotal(temp);
    }, [cart]);

    const handleIncrement = (item) => {
        dispatch(addItemToCart(item));
    };

    const handleDecrement = (item) => {
        dispatch(removeItemFromCart(item));
    };

    function handleRemoveCartItem(item) {
        dispatch(remove(item));
    }

    return (
        <div>
            <Button data-testid="cartTestClass" onClick={toggleOpen}>Cart: ({cart.length})</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={toggleOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {cart ? cart.map((item, idx) => (
                            <div key={idx}>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    {item.item.name}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    {item.item.description}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    Total in cart: {item.count}
                                </Typography>
                                <Button onClick={() => handleIncrement(item)} type="button" >Add</Button>
                                {item.count > 1 ? (
                                    <Button onClick={() => handleDecrement(item)} type="button" >Remove</Button>
                                ) : null}
                                <Button onClick={() => handleRemoveCartItem(item.item)}>DELETE ITEM</Button>
                            </div>
                        )) : null}
                        <div>
                            <h4>Total: ${total}</h4>
                        </div>
                        <div>
                            <form>
                                <h3>Payment Information</h3>
                                <label className="paymentLabel">First name</label>
                                <input type="text" />
                                <label className="paymentLabel">Last name</label>
                                <input type="text" />
                                <label className="paymentLabel">Email</label>
                                <input type="text" />
                                <label className="paymentLabel">Date of birth</label>
                                <input type="date" />
                                <label className="paymentLabel">Card number</label>
                                <input type="number" />
                                <label className="paymentLabel">CVV</label>
                                <input type="number" />
                                <label className="paymentLabel">Card expiration date</label>
                                <input type="month" />
                                <label className="paymentLabel">
                                    <input type="button" value="Pay now" />
                                </label>
                            </form>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Cart;
