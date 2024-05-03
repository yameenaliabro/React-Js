import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import "./calculator.css"
const Calculator = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = (buttonValue: string) => {
        switch (buttonValue) {
            case 'C':
                setInputValue('');
                break;
            case 'CE':
                setInputValue(inputValue.slice(0, -1));
                break;
            case '=':
                try {
                    setInputValue(eval(inputValue).toString());
                } catch (error) {
                    setInputValue('Error');
                }
                break;

            default:
                setInputValue(inputValue + buttonValue);
                break;
        }
    };
    return (
        <div className='container'>
            <h1 className='text-white font-medium text-[20px] mb-[20px]'>Create a simple  Calculator</h1>
            <div className='set-input'>
                <Form>
                    <Form.Item>
                        <Input type="text" value={inputValue} onChange={handleInput} />
                    </Form.Item>
                </Form>
            </div>
            <div className='set-color'>
                <div>
                    <Button onClick={() => handleButtonClick('(')}>(</Button>
                    <Button onClick={() => handleButtonClick('(')}>)</Button>
                    <Button onClick={() => handleButtonClick('C')} danger type="primary">C</Button>
                    <Button onClick={() => handleButtonClick('CE')} danger type='primary'>CE</Button>
                </div>
                <div>
                    <Button onClick={() => handleButtonClick('7')}>7</Button>
                    <Button onClick={() => handleButtonClick('8')}>8</Button>
                    <Button onClick={() => handleButtonClick('9')}>9</Button>
                    <Button onClick={() => handleButtonClick('/')}>/</Button>
                </div>
                <div>
                    <Button onClick={() => handleButtonClick('4')}>4</Button>
                    <Button onClick={() => handleButtonClick('5')}>5</Button>
                    <Button onClick={() => handleButtonClick('6')}>6</Button>
                    <Button onClick={() => handleButtonClick('*')}>*</Button>
                </div>
                <div>
                    <Button onClick={() => handleButtonClick('1')}>1</Button>
                    <Button onClick={() => handleButtonClick('2')}>2</Button>
                    <Button onClick={() => handleButtonClick('3')}>3</Button>
                    <Button onClick={() => handleButtonClick('-')}>-</Button>
                </div>
                <div>
                    <Button onClick={() => handleButtonClick('0')}>0</Button>
                    <Button onClick={() => handleButtonClick('.')}>.</Button>
                    <Button onClick={() => handleButtonClick('=')} type="primary">=</Button>
                    <Button onClick={() => handleButtonClick('+')}>+</Button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;