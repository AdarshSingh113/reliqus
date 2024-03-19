import Phone_Logo from '../assets/Images/Group.png'
const TopContainer = () => {
  return (
    <div className="bg-customBlue flex flex-row justify-between ">
      <h1 className="ml-40 text-white">Lorem ipsum dolor sit amet, consectetur</h1>
      <div className="flex flex-row justify-between mr-40">
      <img
      className="h-4 w-4 mt-1 mr-2"
        src={Phone_Logo}
        alt="Phone Logo"
      />
        <h1 className="text-white">(659) 256 - 6589</h1>
      </div>
    </div>
  );
};
export default TopContainer;
