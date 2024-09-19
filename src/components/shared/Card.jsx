import Link from "next/link";
import Icon from "./Icon";

const Card = ({ data, height }) => {
  return (
    <Link
      href={`${data?.link}`}
      className={`w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-4 rounded-2xl transition-all duration-500 dark:bg-darks dark:text-dark-text`}
      style={{ height: height }}
    >
      <div className="w-16">
        <div className="flex justify-center items-center  w-12 h-12">
          <Icon icon={data?.icon} image={data?.image} />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="frist">
          <p className="group-hover:text-[#2b9e76] font-HindSiliguri font-medium">
            {data?.name_bn}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            {data?.name_en}
          </p>
        </div>
        <div className="second">
          <p className="text-gray-500 text-2xl font-kfgq dark:text-gray-300">
            {data?.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
