import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import IconButton from "../../common/IconButton";

const MyProfile = () => {

  const {user} = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="text-white">
        <h1>My Profile</h1>

      {/* Section 1 */}
        <div>
          <div>
            <img src={user?.image} alt="userimage" className="aspect-square w-[78px] rounded-full object-cover" />
            <div>
              <p>{user?.firstName + " " + user?.lastName} </p>
              <p>{user?.email}</p>
            </div>
          </div>
          <IconButton text={"Edit"} onclick={() => navigate("/dashboard/settings")}></IconButton>
        </div>

        {/* section -2 */}
      <div>
        <div>
          <p>About</p>
          <IconButton
            text={"Edit"}
            onclick={() => navigate("/dashboard/settings")}
          />
        </div>
        <p>{user?.additionalDetails?.about ?? "Write something about yourself"}</p>
      </div>

      {/* Section 3 */}
      <div>
        <div>
          <p>Personal Details</p>
          <IconButton text={"Edit"}
            onclick={() => navigate("/dashboard/settings")}/>
        </div>

        <div>
          <p>FirstName</p>
          <p>{user?.firstName}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{user?.email}</p>
        </div>
        <div>
          <p>Gender</p>
          <p>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
        </div>
        <div>
          <p>lastName</p>
          <p>{user?.lastName}</p>
        </div>
        <div>
          <p>phoneNumber</p>
          <p>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
        </div>
        <div>
          <p>Date of Birth</p>
          <p>{user?.additionalDetails?.dateOfBirth ?? "Add Date Of Birth"}</p>
        </div>
        
      </div>
    </div>
  )
}
export default MyProfile