import DefaultInput from "../../../components/inputs/defaultInput";
import React from "react";
import SelectInput from "../../../components/inputs/selectInput";

const wardNames = [
    { value: 'HealingHavenUK', label: 'Healing Haven UK' },
    { value: 'RecoveryRetreatUK', label: 'Recovery Retreat UK' },
    { value: 'WellnessWingUK', label: 'Wellness Wing UK' },
    { value: 'CareOasisUK', label: 'Care Oasis UK' },
    { value: 'HealthHarbourUK', label: 'Health Harbour UK' },
    { value: 'SerenityWardUK', label: 'Serenity Ward UK' },
    { value: 'ComfortCoveUK', label: 'Comfort Cove UK' },
    { value: 'VitalityVillaUK', label: 'Vitality Villa UK' },
    { value: 'RenewalRidgeUK', label: 'Renewal Ridge UK' },
    { value: 'HarmonyHallUK', label: 'Harmony Hall UK' },
    { value: 'CompassionCourtUK', label: 'Compassion Court UK' },
    { value: 'RespiteRealmUK', label: 'Respite Realm UK' },
    { value: 'TranquilityTowerUK', label: 'Tranquility Tower UK' },
    { value: 'SanctuarySuiteUK', label: 'Sanctuary Suite UK' },
    { value: 'RestorationResidenceUK', label: 'Restoration Residence UK' }
];

const consultantNames = [
    { value: 'DrSmith', label: 'Dr. Smith' },
    { value: 'DrJohnson', label: 'Dr. Johnson' },
    { value: 'DrBrown', label: 'Dr. Brown' },
    { value: 'DrWilson', label: 'Dr. Wilson' },
    { value: 'DrTaylor', label: 'Dr. Taylor' }
];
const Step3=({})=>{
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-col items-center gap-1"}>
                <span className={"text-xl font-medium text-white"}>Patient Admission</span>
                <span className={"text-md font-light text-white"}>Ward Details</span>
            </div>
            <div className={"flex flex-col gap-2"}>
                <SelectInput label={"Ward Name"} options={wardNames} includeDefault/>
                <DefaultInput label={"Ward Number"} placeholder={"Enter ward number"} type={"number"}/>
                <SelectInput label={"Consultant Doctor"} options={consultantNames} includeDefault/>
            </div>
        </div>
    )
}
export default Step3;
