import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveApp } from '../actions';
import { Grid, Button } from '@material-ui/core';

class AppContainer extends Component {
    
    handleSaveApp = () => {
        this.props.onSaveApp(true);
    }

    render() {
        const { isAppSave, list } = this.props;
        return (
            <Grid container justify="center" className="App">

                {this.props.children}

                { list.length > 0 && !isAppSave
                    ?
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
                    :
                    null
                }
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    isAppSave: state.isAppSave,
    list: state.list
});

const mapDispatchToProps = dispatch => {
    return {
        onSaveApp: state => dispatch(saveApp(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);