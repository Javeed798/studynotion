import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import {FaArrowRight} from "react-icons/fa";
const InstructorSection = () => {
    return (
        <div className={"mt-16"}>
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-[50%]">
                    <img
                        className="shadow-white shadow-[-10px_-10px_0_0]"
                        src={Instructor} alt="Images Instructor"/>
                </div>
                <div className={"w-[50%] text-4xl font-semibold flex flex-col"}>
                    Become an <HighlightText text={"Instructor"} />
                    <p className="font-medium text-[16px] mt-3 text-justify w-[70%] leading-[25px] text-richblack-300">
                        Instructors from around the world teach millions of students on
                        StudyNotion. We provide the tools and skills to teach what you
                        love.
                    </p>

                    <div className={"w-fit mt-8"}>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className={"flex flex-row items-center gap-3"}>
                                Start Teaching Today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default InstructorSection
