const DefaultInput = ({id, label, type, placeholder, name, labelClass,classnames}) => {
    return (
        <div className={"flex flex-col gap-1"}>
            {label &&
                <label htmlFor={id} className={`text-white ${labelClass}`}>
                    {label}
                </label>}
            <input
                className={`w-full h-10 bg-white px-2 rounded-md focus:outline-0 focus:ring-0 ${classnames}`}
                type={type} placeholder={placeholder} name={name} id={id}
            />
        </div>
    )
}
export default DefaultInput;
