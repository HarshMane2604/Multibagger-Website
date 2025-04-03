import { useEffect, useRef, useState } from "react";
import "preline"; // Ensure Preline is installed

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    text: "This service changed my business! The team is fantastic, and the results are amazing.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, Brandify",
    text: "Incredible experience! The support and quality exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Johnson",
    position: "Founder, StartUpX",
    text: "They delivered beyond what was promised. Highly recommend their services!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Williams",
    position: "Designer, CreativeHub",
    text: "I love working with them! Super smooth process and stunning results.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "David Brown",
    position: "CTO, SoftSolutions",
    text: "They have an amazing team and their expertise is unmatched!",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Sophia Martinez",
    position: "Entrepreneur",
    text: "Absolutely fantastic! I’ve seen massive improvements in my business!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const TestimonialCarousel = () => {
  const [slides, setSlides] = useState([...testimonials, ...testimonials]); // Duplicate for infinite loop
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    import("preline").then(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Cleanup on unmount
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth / 3, // Move by one slide width
          behavior: "smooth",
        });

        // Reset to start when reaching the end
        if (
          carouselRef.current.scrollLeft >=
          (carouselRef.current.scrollWidth / 2) - carouselRef.current.offsetWidth
        ) {
          setTimeout(() => {
            carouselRef.current.scrollLeft = 0;
          }, 500);
        }
      }
    }, 1500);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
        "slidesQty": { "xs": 1, "lg": 3 }
      }'
      className="relative w-full max-w-4xl mx-auto m-18"
    >
      {/* Carousel Container */}
      <div ref={carouselRef} className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div className="relative flex -mx-1 min-h-[300px]">
          <div className="hs-carousel-body flex flex-nowrap transition-transform duration-700">
            {slides.map((testimonial, index) => (
              <div key={index} className="hs-carousel-slide px-2 w-full md:w-1/3">
                <div className="flex flex-col items-center text-center bg-[#e1f2ff] p-6 rounded-lg shadow-lg h-[280px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-3 border-2 border-blue-500"
                  />
                  <p className="text-gray-800 text-sm font-medium leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <h3 className="mt-3 font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev Button */}
      {/* <button
        type="button"
        className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span className="sr-only">Previous</span>
      </button> */}

      {/* Next Button */}
      {/* <button
        type="button"
        className="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
        <span className="sr-only">Next</span>
      </button> */}

      {/* Pagination Dots */}
      <div className="hs-carousel-pagination flex justify-center absolute bottom-10 start-0 end-0 gap-x-2">
      
      </div>
    </div>
  );
};

export default TestimonialCarousel;
