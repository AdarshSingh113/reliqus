import React from 'react'

const ProfileContainer = () => {
  return (
    <div className="mr-4" >
    <img
      src={require("/Users/shado/reliqus/src/assets/Images/Rectangle 83.png")}
      alt="ProfileImage"
      className="w-80 h-80 object-cover"
    />
    <h1 className="text-3xl mt-5 font-Prata">Harry Wilson</h1>
<h1 className="text-customBlue max-w-md text-xl mt-5 font-montserrat">Fusce condimentum leo sit amet suscipit facilisis. Duis id leo purus. In diam urna, aliquam sit amet rhoncus quis, placerat id mi. Cras congue vel erat eu placerat.</h1>
<button className="w-40 h-8 border-2 border-customBlue text-customBlue mt-5">Meet Harry</button>
    </div>
  )
}

export default ProfileContainer
