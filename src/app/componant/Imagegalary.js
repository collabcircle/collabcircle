import React from "react";

const images = [
  { src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/gl.png", label: "Glasses" },
  { src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/gl_best.png", label: "Men" },
  { src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/shh_bestt.png", label: "Winter collection" },
  { src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/gb_best.png", label: "Shoe" },
  { src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/pr_bestt.png", label: "Perfumes" },
  { src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/f_best.png", label: "Women" },
];

function ImageGallery() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 px-4 py-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
          Our Work Gallery
        </h2>

        {/* Masonry style layout */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition duration-300 ease-in-out"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-auto object-cover"
              />
              <p className="text-base font-medium text-center text-white bg-gradient-to-r from-black/40 to-black/20 py-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
