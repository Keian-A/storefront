import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CurrentCategory(props) {

    let queriedProducts = props.products.products.filter(item => item.category === props.currentCategory);

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
                        <Button size="small">ADD TO CART</Button>
                        <Button size="small">VIEW DETAILS</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(CurrentCategory);
