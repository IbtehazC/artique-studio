import React from "react";

export default function about() {
  return (
    <div className="grid grid-cols-6 gap-5 py-10">
      <div className="col-start-2 col-span-4 text-center justify-center ">
        <div>
          <h2 className="text-4xl font-semibold mb-8">ARTIQUE STUDIO</h2>
          <p className="text-xl mb-8">
            Artique Studio is a design studio specializing in murals or
            wall-arts, branded illustration systems, and creative designing. Our
            murals and works are all throughout the city and has transcended
            outwards to Chittagong. Our goal is to create meaningful and
            timeless design for our clients and their audience. We use our
            experience and creativity to support brands of all sizes in telling
            their stories through classic visuals and strategic thinking. We
            believe that great work comes from building great relationships. We
            work one on one with our clients and collaborate with them every
            step of the way.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">Tahseen Nur</h2>
          <div className="flex justify-center">
            <img
              src="./avatar-tahsin.jpg"
              alt="avatar"
              className="rounded-full h-32 w-32 object-contain"
            />
          </div>
          <p className="text-2xl font-medium mb-4">
            Cofounder + Communication Director
          </p>
          <p className="text-xl mb-8">
            Having experience in versatile mediums, Tahseen uses his ideas and
            design experience to make an idea born into reality. Be it mural
            works, illustrations, canvas paintings or any other types – he
            always gives his 110% and makes sure his works stand the test of
            time and marveled by all. As a natural creative thinker, Tahseen can
            be seen painting his room, travelling or trekking to adventurous
            places, visiting museums or simply walking in streets, observing the
            surroundings.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">Swapnil Tanzim</h2>
          <div className="flex justify-center">
            <img
              src="./avatar-swap.jpg"
              alt="avatar"
              className="rounded-full h-32 w-32 object-contain"
            />
          </div>
          <p className="text-2xl font-medium mb-4">
            Cofounder + Creative Director
          </p>
          <p className="text-xl mb-8">
            As Creative Director at Artique Studio, Swapnil uses his design
            experience to support brands of all sizes in telling their stories
            through timeless visuals and strategic thinking. Swapnil’s
            philosophy of continuity, resilience and simplicity result in
            elegant and sophisticated works aimed to stand the test of time. As
            a true artisan, when not occupied painting wall-arts for his
            clients, Swapnil can be found hanging out with his friends, watching
            movies and sports, or traveling around the country.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">Contacts</h2>
          <div className="flex justify-center items-center">
            <a href="https://www.facebook.com/artiquestudiobd">
              <img src="./fb-logo.svg" alt="fb" className="h-16 w-16" />
            </a>
            <a href="https://www.instagram.com/artiquestudiobd/?fbclid=IwAR0P9nLHNSp0BZYFKrf0IUMDFK5TGxt0XLeWYo6LNhNhDwfsVGtUBTC7hm4">
              <img src="./insta-logo.svg" alt="insta" className="h-16 w-16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
