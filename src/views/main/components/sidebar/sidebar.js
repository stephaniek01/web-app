import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/logo.png";
import {Accordion, AccordionBody, AccordionHeader, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import {BiChevronDown, BiChevronRight} from "react-icons/bi";

const menu = [
    {name: "Wards", link: "/"},
    {name: "Teams", link: "/teams"},
    {name: "Doctors",link: "/doctor"},
    {name: "All Patients",link: "/all-patients"},
    {name: "Patient By Ward",link: "/ward-patients"},
    {name: "Patient By Team",link: "/team-patients"},
    {name: "Logout",link: "/auth/login"},
]

const DefaultSidebar = ({}) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className={"w-[280px] h-screen overflow-y-auto bg-themeColor text-white"}>
            <div className={"w-full h-20 text-[30px] flex items-center font-semibold px-4 gap-2"}>
                <img className={"w-14"} src={logo} alt={"logo"}/>
                Bristol Care
            </div>
            <div className={"flex flex-col p-4"}>
                {menu.map((item, index) => {
                    return (
                        <MenuItem link={item.link} name={item.name}/>
                    )
                })}
            </div>
        </div>
    )
}

const MenuItem = ({link, name}) => {
    return (
        <Link to={link} className={"w-full px-3 h-10 flex items-center"}>
            {name}
        </Link>
    )
}
export default DefaultSidebar;
