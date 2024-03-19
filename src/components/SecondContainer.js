import Photo_A from '../assets/Images/Rectangle 127 (1).png'
import Photo_B from '../assets/Images/Rectangle 127.png'
import Photo_C from '../assets/Images/Rectangle 128.png'

const SecondContainer =()=> {
  
    const items = [
        {
          title: "056 varius arcu condimentum",
          price: "€2.750.000",
          imageSource: Photo_A,
        },
       {
        title: "056 varius arcu condimentum",
          price: "€2.750.000",
          imageSource: Photo_B,
       },
       {
        title: "056 varius arcu condimentum",
          price: "€2.750.000",
          imageSource: Photo_C,
       }
      ];
      

  return (
    <div className="text-center mt-14">
      <h1 className="text-3xl">Interdum odio</h1>
  <h2 className="text-center mt-4 font-prata">Fusce condimentum leo sit amet suscipit facilisis. Duis id leo purus. In diam urna,</h2>
  <h2 className="text-center"> aliquam sit amet rhoncus quis, placerat id mi.</h2>
      <div className="flex flex-row justify-center mt-10 font-prata">
      {items.map((item,index)=>{
        return(
            <div key={index} className="mr-4" >
      <img
        src={item?.imageSource}
        alt="My Image"
        className="w-80 h-80 object-cover"
      />
      <h1 className="">{item?.title}</h1>
  <h1 className="text-customBlue">{item?.price}</h1>
  <button className="w-40 h-8 border-2 border-customBlue text-customBlue">Read More</button>
      </div>
        )
      })}
      </div>
      <button className="w-40 h-8 mt-10 items-center justify-between border-2  border-customBlue text-customBlue">View All</button>
    </div>
  )
}

export default SecondContainer;
