const Description = ({ description }: { description: string }) => {
  return (
    <article>
      <h1 className="mt-4 text-xl border-l-4 border-rose-500 pl-4">รายละเอียด</h1>
      <p className="leading-loose bg-gray-200 dark:bg-rose-300/10 rounded-md p-3 mt-4 dark:text-gray-200">{description}</p>
    </article>
  );
};
export default Description;
