import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>

        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="rounded bg-gray-300 px-2 py-1 text-xs font-semibold"
          >
            Surprise Me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="text-gray-0900 block w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default FormField;
