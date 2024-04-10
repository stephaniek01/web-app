import DefaultButton from "../../../components/buttons/defaultButton";

const DefaultHeader = ({}) => {
    return (
        <div className={"w-full h-20 px-4 flex justify-between items-center"}>
            <span></span>

            <div className={"flex flex-row gap-2" }>
                <div className={"flex flex-col items-end"}>
                    <span>Daniel Wilson</span>
                    <span className={"text-gray-600"}>Admin</span>
                </div>
                <div className={"w-10 h-10 rounded-full border border-themeColor flex justify-center items-center"}>
                    DW
                </div>
            </div>
        </div>
    )
}
export default DefaultHeader;
