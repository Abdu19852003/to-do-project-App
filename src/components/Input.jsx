import React from "react";

function Input({ label, textarea, ...props }) {
  return (
    <div>
      <p>
        <label htmlFor="">{label}</label>
        {textarea ? <textarea {...props} /> : <input {...props} />}
      </p>
    </div>
  );
}

export default Input;
