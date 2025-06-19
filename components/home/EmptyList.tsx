import Link from "next/link";


const EmptyList = ({
  heading = "No Results",
  message = "Please Try Again",
  btnText = "Back Home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 h-screen">
      <h2>{heading}</h2>
      <p>{message}</p>
      <Link href="/" className="cursor-pointer bg-rose-500 mt-2 p-2 rounded-md hover:bg-rose-500/80 transition duration-100">
        {btnText}
      </Link>
    </div>
  );
};
export default EmptyList;
