import {Link} from "react-router-dom";

const DefaultButton = ({name, ancher,link, classnames}) => {
    return (
        ancher ?
            <Link to={link} className={`px-4 py-0 h-10 bg-indigo-600 rounded-md text-white ${classnames}`}>
                {name}
            </Link>
            :
            <button className={`px-4 py-0 h-10 bg-indigo-600 rounded-md text-white ${classnames}`}>
                {name}
            </button>
    )
}
export default DefaultButton;
