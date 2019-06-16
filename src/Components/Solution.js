import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



const Solution = (props) => {

    const [state, setState] = React.useState({
        rejestr: [],
        outputTape: []
    })

    const solution = () => {
        let i, j=0, k=0
        console.log(props.data.length);
        for(i=0; i<props.data.length; i++) {
            let name = props.data[i].command;
            const input = props.input;
            const rejestr = state.rejestr;
            const adress = props.data[i].adress
            const operandType = props.data[i].operandType
            const outputTape = state.outputTape
            const label = props.data[i].label
            console.log(input, rejestr, adress, operandType, label);

            if(name === 1) { //LOAD
                rejestr[0] = adress;
                console.log('LOAD');
                continue;
            }

            if(name === 2) { //STORE
                if(operandType === '') rejestr[operandType] = rejestr[0]
                else if(operandType === '*') rejestr[rejestr[operandType]] = rejestr[0]
                console.log('STORE');
                continue
            }
            if(name === 3) { //ADD
                if(operandType === '') rejestr[0] += input[adress]
                else if(operandType === '=') rejestr[0] += adress
                continue
            }
            if(name === 4) { //SUB
                if(operandType === '') rejestr[0] -= input[adress]
                else if(operandType === '=') rejestr[0] -= adress
                continue
            }
            if(name === 5) { //MULT
                if(operandType === '') rejestr[0] *= input[adress]
                else if(operandType === '=') rejestr[0] *= adress
                continue
            }
            if(name === 6) { //DIV
                if(operandType === '') rejestr[0] = Math.floor(rejestr[0] / input[adress])
                else if(operandType === '=') rejestr[0] = Math.floor(rejestr[0] / adress)

                continue
            }
            if(name === 7) { //READ
                if(operandType === '') {rejestr[i] = input[j]; j++}
                else if(operandType === '*') {rejestr[rejestr[i]] = input[j]; j++}
                continue
            }
            if(name === 8) { //WRITE
                outputTape[k] = rejestr[adress]
                continue
            }
            if(name === 9) { //JUMP
                for(let l = 0; l<props.data.length; l++) {
                    if(props.data[i].label === props.data[l].label) {i = l; break}
                }
                continue
            }
            if(name === 10) { //JGTZ
                if(rejestr[0]>0) {
                    for(let l = 0; l<props.data.length; l++) {
                        if(props.data[i].label === props.data[l].label) {i = l; break}
                    }
                }
                continue
            }
            if(name === 11) { //JZERO
                if(rejestr[0]===0) {
                    for(let l = 0; l<props.data.length; l++) {
                        if(props.data[i].label === props.data[l].label) {i = l; break}
                    }
                }
                continue
            }
            if(name === 12) { //HALT
                break;
            }
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => {solution(); console.log(state);}}>
                Oblicz
            </Button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.data,
        input: state.input
    };
}

export default connect(mapStateToProps)(Solution)