import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.css';

const Input = ({ namelabel, type, as, value, onChange, onBlur, options, error, required }) => {
  return (
    <>
      <Form.Label className="label" htmlFor={namelabel}>{namelabel}</Form.Label>
      {type
        ? <Form.Control
          className="Input"
          id={namelabel}
          name={namelabel}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
        />
        : <Form.Control
          className="Input"
          id={namelabel}
          name={namelabel}
          as={as}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
        >
          {options && options.map(op => <option key={op}>{op}</option>)}
        </Form.Control>
      }
      {error && <p className="error">{error}</p>}
    </>
  );
}
export default Input