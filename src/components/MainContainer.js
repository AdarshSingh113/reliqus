const MainContainer = () => {
  const tabs = ["Home", "About Us", "Testimonials", "Buying", "Selling"];
  return (
    <div className="w-full bg-green-300 flex-1 font-montserrat">
      <img
        src={require("/Users/shado/reliqus/src/assets/Images/Rectangle 1.png")}
        alt="My Image"
      />
      <div className="absolute top-12  left-10 flex flex-row align items-center justify-between w-10/12 ">
        <img
          src={require("/Users/shado/reliqus/src/assets/Images/dummy-logo2 1.png")}
          alt="Logo"
        />
        <div className="flex justify-between w-10/12 ml-20">
          {tabs.map((item, index) => {
            return (
              <button key={index}>
                <h1 className="text-white text-2xl align-middle ">{item}</h1>
                <div className="h-1 mt-3 px-10 bg-white"></div>
              </button>
            );
          })}
          <button className="rounded-3xl w-44 bg-white">
            <h1 className="text-green-800">Contact</h1>
          </button>
        </div>
      </div>
      <div className="absolute bottom-20 w-10/12 left-10"> 
        <h4 className="text-white text-6xl ">Welcome to the</h4>
        <h4 className="text-white text-6xl mt-3">HTML test</h4>
        <h1 className="text-white text-2xl font-montserrat mt-10">Nunc eget dapibus sem, ac ultricies nisi. Praesent posuere felis sodales egestas molestie. Donec volutpat, purus at aliquam rutrum, purus enim vehicula lacus</h1>
      </div>
      <img  className="absolute bottom-20 right-8" src={require("/Users/shado/reliqus/src/assets/Images/Group 2 (1).png")} alt="chat"/>
    </div>
  );
};

export default MainContainer;
