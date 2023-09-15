import BlurImage from "./BlurImage";

const CarousalItem = ({ item, width }) => {
  return (
    <div
      className="inline-flex items-start w-full h-full relative"
      style={{ width: "200px"}}
    >
      <BlurImage
        image={item?.src}
        alt={item?.description}
      />
    </div>
  );
};

export default CarousalItem;
