import {Button, CardHeader, Input, Typography} from "@material-tailwind/react";
import {Fragment} from "react";
import DefaultButton from "../../buttons/button";

const TableHeader=({name,link, buttonName})=>{
    return(
        <Fragment>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        {name}
                    </Typography>
                </div>
                <div className="flex w-full shrink-0 gap-2 md:w-max">
                   <DefaultButton color={"red"} link={link}>{buttonName}</DefaultButton>
                   <DefaultButton >Filter</DefaultButton>
                </div>
            </div>
            <div className={`hidden`}>
                <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </div>
                <Button className="flex items-center gap-3" size="sm">
                    {/*<ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download*/}
                </Button>
            </div>
        </Fragment>
    )
}
export default TableHeader;
