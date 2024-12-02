// components/EmailInput.tsx
import React from 'react';

interface EmailInputProps {
  id: string;
  name: string;
  placeholder: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ id, name, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">Email:</label>
      <input
        type="email"
        id={id}
        name={name}
        className="form-input"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default EmailInput;
