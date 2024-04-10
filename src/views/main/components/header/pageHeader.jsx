import {Link} from "react-router-dom";
import {IoMdAdd} from "react-icons/io";
import React, {Fragment} from "react";
import DefaultButton from "../buttons/button";

const PageHeader = ({title, link, open, handleOpen}) => {

    return (
        <Fragment>
            <div className={"flex items-center h-20 gap-2"}>
                <span className="font-bold text-xl">{title}</span>
                {link && <Link to={link} className={`text-black bg-indigo-100 w-10 h-10 rounded-full
            flex justify-center items-center`}>
                    <IoMdAdd/>
                </Link>}

                {handleOpen &&
                    <DefaultButton onClick={handleOpen} classnames={"p-0 rounded-full w-10 h-10 flex justify-center items-center bg-gray-400"}>
                        <IoMdAdd/>
                    </DefaultButton>
                }
            </div>
        </Fragment>
    )
}
export default PageHeader;
