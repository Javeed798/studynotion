import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json"

const ContactUsForm = () => {

  const [loading,setLoading] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState : {errors, isSubmitSuccessful}
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data",data)
    try {
      setLoading(true);
      const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API, data)
      console.log("response",response)
      setLoading(false);
    } catch (error) {
      console.log("error",error.message)
      toast.error("Error while submitting contact form")
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email:"",
        firstName:"",
        lastName:"",
        message:"",
        phoneNo:""
      })
    }
  },[reset,isSubmitSuccessful])
  return (
    <div>
      {
        loading ? (<div><h1>Loading ...</h1></div>)
        : (
          <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-12">
      <div className="flex gap-5">
        {/* firstName */}
        <div className="flex flex-col">
          <label htmlFor="firstName">
            First Name
          </label>
          <input type="text" name="firstName" id="firstName" placeholder="Enter First Name"
          
          {...register("firstName", {required : true})}
          />
          {
            errors.firstName && (
              <span>PLease enter your First Name</span>
            )
          }
        </div> 

        {/* LastName */}
        <div className="flex flex-col">
          <label htmlFor="lastName">
            First Name
          </label>
          <input type="text" name="lastName" id="lastName" placeholder="Enter last Name"
          
          {...register("lastName")}
          />
        </div> 
      </div>
          {/* email */}
        <div className="flex flex-col">
            <label htmlFor="email">
            Email Address
            </label>
            <input type="email"
            
            name="email"
              id="email"
              placeholder="Enter your email address" 
              {...register("email", {required : true})}
            />
            {
              errors.email && (
                <span>
                  Email cannot be empty and please use email format
                </span>
              )
            }
        </div>

        {/* Phone Number */}
         <div className="fle gap-2">
          <label htmlFor="phoneNo">Phone Number</label>
          <div className="flex flex-row gap-5"> 
            {/* dropdown */}
              <div className=" flex flex-col w-[50px] text-richblack-700"> 
                <select name="dropdown" id="dropdown"
                  {...register("countryCode", {required : true})}
                >
                  {
                    CountryCode.map((element,index) => (
                      <option
                      className="bg-richblack-800 text-richblue-25"
                        key={index} value={element.code}
                      >{element.code} - {element.country}</option> 
                    ))
                  }
                </select>
              </div>
              <div className="flex flex-col w-[75%]">
                <input
                  name="phoneNo"
                  id="phoneNo"
                  type="number"
                  placeholder="9999988888"
                  {...register("phoneNo", {required : true, maxLength : {value : 10, message : "Max Lenght should be 10 no's" }, minLength : {value : 10, message: "Min length should be 10"} })}
                  className="text-black"
                />
                {
                  errors.phoneNo &&  
                  (
                    <div>Error in phone no</div>
                  )
                }
              </div>
          </div> 
         </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="7" placeholder="Enter Your Message" {...register("message",{required:true})}></textarea>
          {
            errors.message && (
              <span>Please enter your message</span>
            )
          }
        </div>

        {/* button */}
        <button className="rounded-md bg-yellow-25 text-center p-4 text-[15px] font-bold text-black" type="submit">Send Message</button>
      </div>
    </form>
        )
      }
    </div>
  )
}
export default ContactUsForm