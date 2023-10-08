

const Input = ({label, placeholder, onChange, value, type}) => {
  return (
    <div>
        <p className='py-0 px-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white '>{label}</p>
        <input
            placeholder={placeholder}
            type={type || 'text'}
            value={value}
            onChange={onChange}
            className='border placeholder-gray-400 focus:outline-none w-full p-4 m-0 text-base block bg-white rounded-md'
        >

        </input>
    </div>
  )
}

export default Input