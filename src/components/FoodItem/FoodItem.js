import React, { Component } from 'react';
import './FoodItem.css';
import { Edit as EditIcon, Delete as DeleteIcon, Check as CheckIcon } from '@material-ui/icons';
import { TableRow, TableCell } from '@material-ui/core';

class FoodItem extends Component {
    state = {
        editMode: false,
        id: this.props.food.id,
        description: this.props.food.description,
        calories: this.props.food.calories,
        protein: this.props.food.protein,
        carbs: this.props.food.carbs,
        fat: this.props.food.fat,
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    put = () => {
        this.props.dispatch({
            type: 'PUT_FOOD',
            payload: this.state
        })
        this.setState({
            editMode: !this.state.editMode
        })
    }

    edit = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <TableRow>
                {this.state.editMode === true ?
                    <>
                        <TableCell><input style={{ width: 50, padding: 0, margin: 0, height: 20 }} onChange={this.handleInputChangeFor('description')} type="text" value={this.state.description}></input></TableCell>
                        <TableCell><input style={{ width: 30, padding: 0, margin: 0, }} onChange={this.handleInputChangeFor('calories')} type="text" value={this.state.calories}></input></TableCell>
                        <TableCell><input style={{ width: 18, padding: 0, margin: 0, }} onChange={this.handleInputChangeFor('protein')} type="text" value={this.state.protein}></input></TableCell>
                        <TableCell><input style={{ width: 18, padding: 0, margin: 0, }} onChange={this.handleInputChangeFor('carbs')} type="text" value={this.state.carbs}></input></TableCell>
                        <TableCell><input style={{ width: 18, padding: 0, margin: 0, }} onChange={this.handleInputChangeFor('fat')} type="text" value={this.state.fat}></input></TableCell>
                        <TableCell><button onClick={this.put}><CheckIcon /></button></TableCell>
                    </>
                    :
                    <>
                        <TableCell>{this.props.food.description}</TableCell>
                        <TableCell>{this.props.food.calories}</TableCell>
                        <TableCell>{this.props.food.protein}</TableCell>
                        <TableCell>{this.props.food.carbs}</TableCell>
                        <TableCell>{this.props.food.fat}</TableCell>
                        <TableCell><button onClick={this.edit}><EditIcon /></button></TableCell>
                    </>}
                <TableCell><button onClick={() => this.props.deleteFood(this.props.food.id)}><DeleteIcon /></button></TableCell>
            </TableRow>
        )
    }
};

export default FoodItem;