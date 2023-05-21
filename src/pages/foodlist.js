import React from 'react';

const FoodList = () => {
  const items = [
    {
      name: 'Fried Chicken',
      image: '/friedchicken.jpg',
      price: '$10',
    },
    {
      name: 'Cheese Pizza',
      image: '/cheesepizza.jpg',
      price: '$14',
    },
    {
      name: 'Fish Tacos',
      image: '/fishtacos.jpg',
      price: '$11',
    },
    {
      name: 'Cheeseburger',
      image: '/cheeseburger.jpg',
      price: '$13',
    },
    {
      name: 'Mozzarella Sticks',
      image: '/mozzarellasticks.jpg',
      price: '$7',
    },
    {
      name: 'Nachos',
      image: '/nachos.jpg',
      price: '$7',
    },
    {
      name: 'Soft Drinks',
      image: '/softdrinks.jpg',
      price: '$2.50',
    },
    {
      name: 'Beer',
      image: '/beer.jpg',
      price: '$7',
    },
    {
      name: 'Soju',
      image: '/soju.jpg',
      price: '$13',
    },
  ];

  return (
    <div id="menu" className="max-w-7xl mx-auto my-10 pl-96 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Food & Drinks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-black text-lg font-bold mb-2">{item.name}</h3>
              <div className="text-gray-700 mb-4">{item.description}</div>
              <div className="text-gray-800 font-bold">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;