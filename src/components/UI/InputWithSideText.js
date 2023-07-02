import React from 'react';
import './InputWithSideText.css';
import Input from './Input';

const InputWithSideText = (props) => {
    return <div>

        <h3 className='survey-heading-3'>Average annual electricity consumption</h3>
        <p className='survey-para-2'>Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel.</p>
        <div className="image_input">
            <p>kwh</p>
            <Input value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>

    </div>;
};

export default InputWithSideText;
