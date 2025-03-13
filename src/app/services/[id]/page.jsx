import React from 'react'

export default function ServiceDetailPage({params}) {
    const id = params.id;
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
      const singleData = data.find((d) => d._id == id)
  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p>
        ID: {id}
      </p>
      <p>{singleData.service_name}</p>
      <img className='w-1/2' src={singleData.service_image} alt="" />
    </div>
  )
}
