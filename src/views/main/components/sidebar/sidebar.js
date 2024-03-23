import {Link} from "react-router-dom";

const menu = [
    {}, {}, {}, {}, {},
]

const DefaultSidebar = ({}) => {
    return (
        <div className={"w-[280px] h-screen overflow-y-auto bg-white"}>
            <div className={"w-full h-20 bg-gray-50 flex items-center font-semibold px-4"}>
                Bristol Care
            </div>
            <div className={"flex flex-col"}>
                {menu.map((item, index)=>{
                    return(
                        <MenuItem link={"/"} name={`Menu ${index + 1}`}/>
                    )
                })}
            </div>
        </div>
    )
}

const MenuItem=({link,name})=>{
    return(
        <Link to={link} className={"w-full px-4 h-10 flex items-center"}>
            {name}
        </Link>
    )
}
export default DefaultSidebar;
