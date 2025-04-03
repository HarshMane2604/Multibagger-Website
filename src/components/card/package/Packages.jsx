import React from "react";

const PackageGrid = () => {
  const packages = [
    { title: "Basic Plan", price: "$19/mo", description: "Great for starters." },
    { title: "Standard Plan", price: "$39/mo", description: "Most popular plan." },
    { title: "Premium Plan", price: "$79/mo", description: "For power users." },
    { title: "Gold Plan", price: "$99/mo", description: "Business ready." },
    { title: "Platinum Plan", price: "$149/mo", description: "Elite experience." },
    { title: "Ultimate Plan", price: "$199/mo", description: "All-inclusive." },
  ];

  return (
    <>
    <div className="min-h-[50vh]">
    <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                packages.map((packages, index) => {
                    return (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:scale-105 transition-transform border-1 border-gray-200 hover:border-orange-400">
                            <h2 className="text-lg font-bold">{packages.title}</h2>
                            <p className="text-sm text-gray-600">{packages.description}</p>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
    <div className="flex justify-center items-center mt-10">
  <button className="bg-[#F25116] text-white px-4 py-2 rounded-lg font-bold cursor-pointer hover:bg-[#F25116] hover:scale-105 transition-all duration-300 ">
    Subscribe
  </button>
</div>
    </div>

    </>
    
  );
};

export default PackageGrid;
