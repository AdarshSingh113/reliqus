import FormContainer from "./FormContainer"
import ProfileContainer from "./ProfileContainer"


const LastContainer = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-customGray">
  <div className="w-1/2 ml-20">
    <ProfileContainer />
  </div>
  <div className="w-1/2">
    <FormContainer />
  </div>
</div>

  )
}

export default LastContainer
