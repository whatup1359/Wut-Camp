import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <section className="relative h-[300px] md:h-[600px] mt-8">
      <Image
        src={mainImage}
        sizes="100vw"
        alt={name}
        fill
        priority
        className="rounded-md"
      />
    </section>
  );
};
export default ImageContainer;
