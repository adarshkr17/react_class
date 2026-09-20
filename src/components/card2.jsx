const Card2 = ({ title, image }) => {
  let marks = 145;

  return (
    <div className="container flex flex-col items-center">
      <h2 style={{ padding: "20px 30px" }}>Card Component</h2>

      <div
        className={`${marks > 100 ? "bg-green-100" : "bg-red-100"} card flex flex-col items-center sm:rounded-lg sm:shadow-md sm:p-4`}
      >
        <div>
          <img
            className="img rounded-xl"
            src={image}
            alt={title}
          />
        </div>

        <h3 className="text-lg font-semibold">{title}</h3>
        <div> 
          {desc}
        </div>
        <div className={marks>40? "bg-green-500":"bg-red-500"}>
          {marks}
        </div>
      </div>
    </div>
  );
};

export default Card2;