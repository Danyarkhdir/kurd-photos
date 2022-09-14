import "../assets/styles/gallery.css";
import Image from "./Image";
export default function Gallery({ images }) {
  return (
    <div className="gallery mt-8 pb-10">
      {images.map((imageInfo, index) => {
        imageInfo["favorited_by_user"] = false;
        return <Image imageInfo={imageInfo} index={index} key={index} />;
      })}
    </div>
  );
}
