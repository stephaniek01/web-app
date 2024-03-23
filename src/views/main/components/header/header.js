import DefaultButton from "../../../components/buttons/defaultButton";

const DefaultHeader=({})=>{
    return(
        <div className={"w-full h-20 px-4 flex justify-between items-center"}>
            Header

            <div>
                <DefaultButton name={"Login"} classnames={"!w-auto"} ancher={true} link={"auth/login"}/>
            </div>
        </div>
    )
}
export default DefaultHeader;
