

const Select = ({ label, value, onChange, options = [] }) => {
  return (
    <div>
      <p className="py-0 px-2 absolute -mt-4 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white ">
        {label}
      </p>
      <select className="w-full" value={value} onChange={onChange}>
        <option id="1" value="select">
          Select
        </option>
        {options && options.length
          ? options.map((item) => (
              <option id={item.id} key={item.id} value={item.id}>
                {item.label}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Select;
