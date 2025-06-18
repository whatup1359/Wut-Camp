import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoriesList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
          {categories.map((item) => {
            const isActive = item.label === category;

            return (
              <Link
                href={`/?category=${item.label}${searchTerm}`}
                key={item.label}
              >
                <article
                  className={`group flex flex-col gap-3 items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ${
                    category === item.label
                      ? "bg-gray-200 dark:bg-gray-800"
                      : ""
                  } ${isActive ? "text-primary" : ""}`}
                >
                  <div className="text-2xl text-gray-600 dark:text-gray-300">
                    <item.icon />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {item.label}
                  </p>
                  <div
                    className={`h-[1px] w-[10px] bg-rose-500 rounded-xl group-hover:w-full transition-all duration-500 ${
                      category === item.label
                        ? "w-full transition-all duration-500"
                        : ""
                    }`}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CategoriesList;
