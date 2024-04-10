import {Button} from "@material-tailwind/react";
import {Fragment} from "react";
import {Link} from "react-router-dom";

const DefaultButton = ({classnames, color,link,onClick, children}) => {
    return (
        <Fragment>
            {link ? <Link to={link} color="red" className={`bg-${color ? color : "indigo"}-50 
        hover:bg-${color ? color : "indigo"}-100 border border-${color ? color : "indigo"}-600 
        text-${color ? color : "indigo"}-600 shadow-none
        hover:shadow-none px-4 flex items-center rounded-md font-bold text-sm ${classnames}`}>{children}
                </Link>
                :
                <Button color="red" className={`bg-${color ? color : "indigo"}-50 
        hover:bg-${color ? color : "indigo"}-100 border border-${color ? color : "indigo"}-600 
        text-${color ? color : "indigo"}-600 shadow-none  text-sm
        hover:shadow-none normal-case ${classnames}`} onClick={onClick}>{children}</Button>
            }
        </Fragment>
    )
}
export default DefaultButton;
