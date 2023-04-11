import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}</label>
            <input type="number" id="budget" name="budget" step="1000" min="0" max="21000" value={budget} onChange={event=>setBudget(event.target.value)}/>
            {/* <span>Budget: £{budget}</span> */}
        </div>
    );
};
export default Budget;
