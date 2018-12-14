import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveApp } from '../actions';
import { Grid, Button } from '@material-ui/core';

class AppContainer extends Component {
    
    handleSaveApp = () => {
        this.props.onSaveApp(true);
    }

    render() {
        return (
            <Grid container justify="center" className="App">

                {this.props.children}
                
                <Grid container justify="center">
                    <Button 
                        onClick={this.handleSaveApp}
                        variant="contained" 
                        color="primary" 
                        component="button"
                    >
                        Save Changes
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    isAppSave: state.isAppSave
});

const mapDispatchToProps = dispatch => {
    return {
        onSaveApp: state => dispatch(saveApp(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);