import Link from "next/link";
import { toBengaliNumber } from "bengali-number";
import Icon from "@/components/shared/Icon";

const SuraList = ({ book }) => {
  return (
    <Link
      href={`/${book?.book_name}`}
      key={book?.id}
      className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-4 rounded-2xl transition-all duration-500 dark:bg-darks dark:text-dark-text"
    >
      <div className="w-16">
        <div className="flex justify-center items-center  w-12 h-12">
          <Icon title={book?.abvr_code} />
        </div>
      </div>
      <div className="w-full">
        <p className="group-hover:text-[#2b9e76] font-medium">{book?.title}</p>
        <p className="text-gray-500 text-sm dark:text-gray-300">
          হাদিসের রেঞ্জ: {toBengaliNumber(book?.number_of_hadis)}
        </p>
      </div>
    </Link>
  );
};

export default SuraList;
