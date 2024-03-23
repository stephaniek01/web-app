import React, {useState} from 'react'
import DefaultButton from "../../components/buttons/defaultButton";
import Step1 from "../createPatient/components/step1";
import Step2 from "../createPatient/components/step2";
import Step3 from "../createPatient/components/step3";

const CreateDoctor = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };
    return (
        <div className="flex bg-black/40 flex-col p-4 w-[400px] rounded-md gap-2">
            {currentStep === 1 && <Step1/>}
            {currentStep === 2 && <Step2/>}
            {currentStep === 3 && <Step3/>}
           <div className={`grid
            ${currentStep !== 1? "grid-cols-2":"grid-cols-1"} 
            gap-2 mt-4`}>
               {currentStep !== 1 &&(
                   <DefaultButton
                       onClick={handlePreviousStep}
                       className="bg-blue-500 text-white px-4 py-2 rounded-md"
                       name={"Prev"}
                   />
               )}
               {currentStep !== 3 && (
                   <DefaultButton
                       onClick={handleNextStep}
                       className="bg-blue-500 text-white px-4 py-2 rounded-md"
                       name={"Next"}
                   />
               )}
               {currentStep === 3 && (
                   <DefaultButton ancher={true} link={"/"} name={"Submit"}/>
               )}
           </div>
        </div>
    );

}

export default CreateDoctor;
