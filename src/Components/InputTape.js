import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

const InputTape = (props) => {

    const [state, setState] = React.useState({
        input:[],
        inputNumber: 1,
    })

    const classes = useStyles();

    const sendData = () => {
        props.dispatch({
            type: 'INPUT',
            payload: state.input,
        })
    }

    const sendNumber = (e) => {
        //state.input[0] = e.target.value
        console.log(state.inputNumber);
    }

    const input =
        <TextField
            id="standard-number"
            label="Number"
            type="number"
            margin="normal"
            onChange={sendNumber}
        />

    const arrayOfInput = new Array(state.inputNumber)

    const changeInputNumberPlus = () => {
        setState({inputNumber: ++state.inputNumber})
    }

    const changeInputNumberMinus = () => {
        setState({inputNumber: --state.inputNumber})
    }

    arrayOfInput.fill(input)

    return(
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3" onClick={sendData}>
                InputTape
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    >
                    <ButtonGroup color="primary" aria-label="Outlined primary button group">
                        <Button onClick={changeInputNumberPlus}>+</Button>
                        <Button onClick={changeInputNumberMinus}>-</Button>
                    </ButtonGroup>
                    {arrayOfInput.map((input, index) => {return input})}
                </Grid>
            </Paper>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

export default connect(mapStateToProps)(InputTape)