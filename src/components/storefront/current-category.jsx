import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cart.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CurrentCategory(props) {

    let dispatch = useDispatch();
    let products = useSelector(state => state.products);
    let queriedProducts = products.products.filter(item => item.category === props.currentCategory);

    function handleAddCartItem(item) {
        dispatch(add(item));
    }

    return (
        <div>
            {queriedProducts.map((item, idx) => (
                <Card key={idx} sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleAddCartItem(item)}>ADD TO CART</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default CurrentCategory;
