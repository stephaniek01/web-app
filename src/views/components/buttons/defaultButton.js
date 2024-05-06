import { Link } from "react-router-dom";

const DefaultButton = ({ name, ancher, disabled, type, link, onClick, loading, classnames }) => {
    return (
        ancher ?
            <Link to={link}
                  className={`px-4 py-0 h-10 bg-indigo-600 rounded-md text-white flex items-center justify-center ${classnames}`}>
                {name}
            </Link>
            :
            <button type={type} onClick={onClick} disabled={disabled}
                    className={`px-4 py-0 h-10 bg-indigo-600 rounded-md text-white ${classnames}`}>
                {loading ? "Loading..." : name}
            </button>
    )
}
export default DefaultButton;
