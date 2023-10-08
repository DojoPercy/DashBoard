
const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center  px-6 py-2 text-lg bg-gradient-to-br from-purple-500 to-blue-500  text-white hover:bg-gradient-to-bl font-medium rounded-xl  uppercase tracking-wide"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
