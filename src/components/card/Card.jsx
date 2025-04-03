import React from "react";

const CardComponent = () => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80",
      title: "Why Multibaggers?",
      description:
        "For wealth creation, and not just profits from shares.Multibagger stocks, as the name suggests, hold potential to double from original price, when held for a long period of time.But there is one catch – MBs are hard to come by.We advise what to buy, but you continue to invest through your existing broker and existing demat account.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80",
      title: "Who is Multibaggers for?",
      description:
        "Time Period for Holding – Minimum 3 years, the longer the better.Suited for – Long term Patient investors wanting to buy-and-hold stocks in portfolio Not Suited for – Intra Day, Traders, F&O, Impulsive Investors Minimum Capital Requirement – we do not have any minimum requirement, you can invest any amount of capital, available at your end"
    },
    {
      image:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80",
      title: "So how can we help?",
      description:
        "We have been identifying Multibagger Stocks for years! Mr. Tulsian has an experience of over 4 decades in the Indian stock market. We are Independent, Trusted and SEBI-registered Investment Advisors, We have been helping retail investors build wealth.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-[ ] min-h-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-gray-200  rounded-xl hover:shadow-xl transition w-80 h-[550px]"
        >  
          <img
            className="w-full h-48 object-cover rounded-t-xl"
            src={card.image}
            alt={card.title}
          />
          <div className="p-4 md:p-5 flex-grow">
            <h3 className="text-lg font-bold text-orange-500 ">
              {card.title}
            </h3>
            <p className="mt-1 text-slate-500 ">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
