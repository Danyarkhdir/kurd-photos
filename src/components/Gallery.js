import "../assets/styles/gallery.css";
import Image from "./Image";
export default function Gallery({ images }) {
  return (
    <div className="gallery mt-8 ">
      {images.map((imageInfo, index) => {
        return <Image imageInfo={imageInfo} index={index} key={index} />;
      })}
    </div>
  );
}
