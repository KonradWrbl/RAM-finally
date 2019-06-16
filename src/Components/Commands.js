import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    tab: {
      fontSize: '30px;',
    },
  }));

function Commands(props) {

    const classes = useStyles();

    const [state, setState] = React.useState({
        columns: [
            {
                title: 'Label',
                field: 'label',
            },
            {
                title: 'Command',
                field: 'command',
                lookup: {
                    1: 'LOAD',
                    2: 'STORE',
                    3: 'ADD',
                    4: 'SUB',
                    5: 'MULT',
                    6: 'DIV',
                    7: 'READ',
                    8: 'WRITE',
                    9: 'JUMP',
                    10: 'JGTZ',
                    11: 'JZERO',
                    12: 'HALT',
                }
            },
            {
                title: 'Type',
                field: 'operandType',
                lookup: {
                    1: '',
                    2: '=',
                    3: '*',
                }
            },
            {
                title: 'Adress',
                field: 'adress',
            },
            {
                title: 'Comment',
                field: 'comment',
            },
        ],
        data: [{
            adress: "43",
            command: "2",
            label: "reerewr",
            operandType: "2"
        }],
    });

    const sendData = () => {
        props.dispatch({
            type: 'AKCJA',
            payload: state.data,
        })
    }


    return (
        <div>
            <MaterialTable
                title='Commands'
                columns={state.columns}
                data={state.data}
                className={classes.button}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data});
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data});
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.splice(data.indexOf(oldData), 1);
                                setState({ ...state, data});
                            }, 600);
                        })
                }}

            />
            <Button variant="contained" color="primary" onClick={sendData}>
                Oblicz
            </Button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

export default connect(mapStateToProps)(Commands);