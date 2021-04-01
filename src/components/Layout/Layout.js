import React, {useState} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props)=>{
    const [showSideDrawer,setShowSideDrawer] = useState(false)

    const sideDrawerClosedHandler = () =>{
        setShowSideDrawer( false);
    }
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar openSideDrawer={sideDrawerToggleHandler} />
            <SideDrawer
                open={showSideDrawer}
                close={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

/*
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler = () =>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar openSideDrawer={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
 */

export default Layout;