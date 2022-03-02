import { useState } from 'react';
import { connect } from 'react-redux';
import { deleteCartItem } from '../../store/cart.js';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    return (
        <div>
            <Button onClick={toggleOpen}>Cart: ({props.cart.length === 0 ? '0' : props.cart.length})</Button>
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
                        {props.cart ? props.cart.map((item, idx) => (
                            <div key={idx}>
                                {console.log(props.cart)}
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    {item.item.name}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    {item.item.description}
                                </Typography>
                                <Button onClick={() => props.deleteCartItem(item.item)}>DELETE ITEM</Button>
                            </div>
                        )) : null}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    deleteCartItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
