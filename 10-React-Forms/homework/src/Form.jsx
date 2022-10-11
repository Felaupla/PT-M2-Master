import React from 'react';

export function validate(input) {
  let errors={};
  
  if(!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if(!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};

export default function Form() {
  const [input, setInput] = React.useState({
    username:'',
    password:''
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value});

  var objError=validate({
    ...input,
    [e.target.name]:e.target.value
  });

  setErrors(objError);
  }
  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'} 
          type="text" 
          value={input.username} 
          name="username" 
          onChange={handleInputChange} 
          />
        {
        errors.username && (<p className="danger">{errors.username}</p>)
        }
        </div>
        <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
          type="password" 
          value={input.password} 
          name="password" 
          onChange={handleInputChange} 
          />
          {
          errors.password && (<p className="danger">{errors.password}</p>)
          }
          </div>
          <div>  
          {!errors.username && !errors.password && (<input type="submit" value="Submit" />)}
          </div>
      </form>
      )
}
