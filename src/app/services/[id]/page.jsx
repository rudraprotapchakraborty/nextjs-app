import NotFoundPage404 from "@/app/not-found";
import React from "react";

export default function ServiceDetailPage({ params }) {
  const id = params.id;
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png",
      service_description:
        "We provide modern web development solutions using the latest technologies such as React, Node.js, and MongoDB.",
    },
    {
      _id: "2",
      service_name: "Mobile App Development",
      service_image:
        "https://www.etatvasoft.com/blog/wp-content/uploads/2022/08/mobile-app-development-methodologies.jpg",
      service_description:
        "Our team builds high-performance mobile applications for Android and iOS platforms using Flutter and React Native.",
    },
    {
      _id: "3",
      service_name: "UI/UX Design",
      service_image:
        "https://media.licdn.com/dms/image/v2/D5612AQHu44_783URfQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1666888940582?e=2147483647&v=beta&t=Jen8kAOpPZ3rKjOat7D0QKUlZC39nASFB3AuUoeUWSY",
      service_description:
        "We create intuitive and engaging user experiences with modern UI/UX design principles.",
    },
    {
      _id: "4",
      service_name: "SEO & Digital Marketing",
      service_image:
        "https://cdn.educba.com/academy/wp-content/uploads/2016/02/SEO-Digital-Marketing.jpg",
      service_description:
        "Boost your online presence with our expert SEO and digital marketing strategies.",
    },
  ];
  const singleData = data.find((d) => d._id == id);
  if (singleData) {
    return (
      <div>
        <h1>ServiceDetailPage</h1>
        <p>ID: {id}</p>
        <p>{singleData.service_name}</p>
        <img className="w-1/2" src={singleData.service_image} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <NotFoundPage404></NotFoundPage404>
      </>
    );
  }
}
