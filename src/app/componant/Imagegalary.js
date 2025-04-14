import React from "react";
import Image from "next/image";

import one from '.././images/imageGallary/one.png'
import two from '.././images/imageGallary/two.png'
import three from '.././images/imageGallary/three.png'
import four from '.././images/imageGallary/four.png'
import five from '.././images/imageGallary/five.png'
import six from '.././images/imageGallary/six.jpg'

const images = [
  { src: one },
  { src: two },
  { src: three },
  { src: four },
  { src: five },
  { src: six},
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
              <Image
                src={item.src}
                alt="Gallery Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
