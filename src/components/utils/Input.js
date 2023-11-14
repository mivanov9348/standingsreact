function Input({ value, onChange, ...props }) {
  return <input value={value} onChange={onChange} {...props} />;
}

export default Input;
