import Icon from "@/components/shared/Icon";

const KalemaList = ({ kalemas, onDataSubmit }) => {
  const selectedKalemaHandler = (id) => {
    const kalema = kalemas.filter((item) => item.id === id)[0];
    onDataSubmit(kalema);
  };
  return (
    <div className="space-y-1">
      {kalemas &&
        kalemas.map((kalema) => (
          <div
            onClick={() => selectedKalemaHandler(kalema.id)}
            key={kalema.id}
            className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-darkz dark:text-gray-300  dark:border-0 border-2 border-slate-100"
          >
            <div className="">
              <div className="flex justify-center items-center  w-12 h-12">
                <Icon title={kalema?.id} />
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="frist">
                <p className="group-hover:text-[#2b9e76] font-medium">
                  {kalema?.name}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default KalemaList;
