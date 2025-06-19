"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { categories } from "@/utils/categories";

const CategoriesList = ({
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);

  const handleClick = (label: string) => {
    const searchTerm = searchParams.get("search");
    const query = `/?category=${label}${searchTerm ? `&search=${searchTerm}` : ""}`;

    setLoadingCategory(label);
    startTransition(() => {
      router.push(query);
    });
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 py-6">
        {categories.map((item) => {
          const isActive = item.label === category;
          const isLoading = loadingCategory === item.label && isPending;

          return (
            <button
              key={item.label}
              onClick={() => handleClick(item.label)}
              disabled={isLoading}
              className={`cursor-pointer group flex flex-col gap-3 items-center justify-center p-4 rounded-lg transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 border-2 border-gray-300 dark:border-gray-300/20 ${
                isActive ? "bg-gradient-to-b from-rose-200/10 to-rose-500/20 text-primary" : ""
              }`}
            >
              <div className="text-2xl text-gray-600 dark:text-gray-300">
                {isLoading ? (
                  <LoaderCircle className="w-6 h-6 animate-spin text-rose-500" />
                ) : (
                  <item.icon />
                )}
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {item.label}
              </p>
              <div
                className={`h-[1px] w-[10px] bg-rose-500 rounded-xl group-hover:w-full transition-all duration-500 ${
                  isActive ? "w-full" : ""
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
