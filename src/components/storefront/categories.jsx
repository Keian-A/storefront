import { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CurrentCategory from './current-category.jsx';

function Categories(props) {

    const [open, setOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={toggleDrawer} data-testid="activeCategory">Product Categories</Button>
            {currentCategory !== '' ?
                props.categories.categories.filter(item => item.displayName === currentCategory).map((item, idx) => (
                    <div key={idx}>
                        <h2>{item.displayName}</h2>
                        <p>{item.description}</p>
                    </div>
                ))
                : (
                    null
                )}
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List>
                    {props.categories.categories.map(item => (
                        <ListItem key={item.displayName}>
                            <ListItemButton>
                                <ListItemText onClick={() => setCurrentCategory(item.displayName)} primary={item.displayName} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <CurrentCategory currentCategory={currentCategory} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}

export default connect(mapStateToProps)(Categories);
