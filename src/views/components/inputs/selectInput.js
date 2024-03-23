const SelectInput = ({id, label, options,includeDefault, labelClass,classnames}) => {
    return (
        <div className={"flex flex-col gap-1"}>
            {label &&
                <label htmlFor={id} className={`text-white ${labelClass}`}>
                    {label}
                </label>}
            <select id={id}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500 ${classnames}`}>
                {includeDefault && <option value="">Please select</option>}
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
export default SelectInput;
