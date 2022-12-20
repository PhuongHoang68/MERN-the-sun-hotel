import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";

const colors = {
  gold: "#FFD700",
  gray: "#a9a9a9"
}

function Reviews() {
  const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue]= React.useState(undefined);
    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h1>Your Review</h1>
      <div>
            {stars.map((_, index) => {
                return (
                    <FaStar
                    key={index}
                    size={30}
                    style={{
                        marginRight: 10,
                        cursor: "pointer",
                        alignItems: "center",
                        
                    }}
                    color={(hoverValue || currentValue) > index ? colors.gold: colors.gray}
                    onClick={()=> handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index+1)}
                    onMouseLeave={handleMouseLeave}
                    />
                )
            })}
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Review:</label>
          <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Reviews;