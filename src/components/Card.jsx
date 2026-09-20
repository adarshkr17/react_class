// function Card({children}){
//   return(
//     <div>
//       {children}
//     </div>
//   );
// }

// export default Card;


const Card = ({ title, image, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-72">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-3">
        {title}
      </h2>

      <p className="text-gray-600">
        Price: ₹{price}
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3">
        Buy Now
      </button>
    </div>
  );
};

export default Card;