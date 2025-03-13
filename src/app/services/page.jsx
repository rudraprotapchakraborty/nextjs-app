import Link from "next/link";
import React from "react";

const page = () => {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image:
        "https://st3.depositphotos.com/1688079/17319/i/450/depositphotos_173192780-stock-photo-services-gears-icon-prime-orange.jpgpment.jpg",
      service_description:
        "We provide modern web development solutions using the latest technologies such as React, Node.js, and MongoDB.",
    },
    {
      _id: "2",
      service_name: "Mobile App Development",
      service_image:
        "https://st3.depositphotos.com/1688079/17319/i/450/depositphotos_173192780-stock-photo-services-gears-icon-prime-orange.jpgbile-app.jpg",
      service_description:
        "Our team builds high-performance mobile applications for Android and iOS platforms using Flutter and React Native.",
    },
    {
      _id: "3",
      service_name: "UI/UX Design",
      service_image:
        "https://st3.depositphotos.com/1688079/17319/i/450/depositphotos_173192780-stock-photo-services-gears-icon-prime-orange.jpg.jpg",
      service_description:
        "We create intuitive and engaging user experiences with modern UI/UX design principles.",
    },
    {
      _id: "4",
      service_name: "SEO & Digital Marketing",
      service_image:
        "https://st3.depositphotos.com/1688079/17319/i/450/depositphotos_173192780-stock-photo-services-gears-icon-prime-orange.jpgrketing.jpg",
      service_description:
        "Boost your online presence with our expert SEO and digital marketing strategies.",
    },
  ];

  return (
    <div>
      <p className="font-bold text-3xl">ServicesPage</p>
      <div className="grid grid-cols-2 gap-4">
        {data.map((d) => {
          return (
            <div className="space-y-4">
              <Link href={`/services/${d._id}`}>
                <img className="w-1/2" src={d.service_image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
