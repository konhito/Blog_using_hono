const Quote = () => {
  return (
    <div className="h-screen bg-slate-100 flex flex-col justify-center">
      <div className="flex justify-center">
        <div className=" max-w-lg  ">
          <div className="text-3xl font-bold text-center">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="max-w-md mt-.5    text-xl font-medium">
            Julies winfiend
          </div>
          <div className="max-w-md     text-gray-2 text-md font-light">
            CEO , Acme corp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
