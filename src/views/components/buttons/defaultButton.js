import {Link} from "react-router-dom";

const DefaultButton = ({name, ancher,link, onClick,classnames}) => {
    return (
        ancher ?
            <Link to={link} className={`px-4 py-0 h-10 bg-indigo-600 rounded-md text-white flex items-center justify-center ${classnames}`}>
                {name}
            </Link>
            :
            <button onClick={onClick} className={`px-4 py-0 h-10 bg-indigo-600 rounded-md text-white ${classnames}`}>
                {name}
            </button>
    )
}
export default DefaultButton;
