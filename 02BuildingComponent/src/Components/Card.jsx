import React from 'react';

function Card() {
    const data = [
        {image: 'https://www.mykhel.com/thumb/220x100x220/cricket/players/8/3788.1696393249.jpg', name: "Virat Kholi1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea debitis suscipit.",
            instock: true
        },
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChJvcwn0toiP1EzjpOVGaE4IybGnIoe598Ov4TlDpjA&s', name: "Virat Kholi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea debitis suscipit.",
            instock: false
        },
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChJvcwn0toiP1EzjpOVGaE4IybGnIoe598Ov4TlDpjA&s', name: "Virat Kholi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea debitis suscipit.",
            instock: false
        },
    ];
    

    return (
        <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            {data.map((elem, index) => (
                <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
                    <div className='w-full h-32 bg-zinc-300'>
                        <img className='w-full h-full object-cover' src={elem.image} alt={elem.name} />
                    </div>
                    <div className='w-full px-3 py-4'>
                        <h2 className='font-semibold'>{elem.name}</h2>
                        <p className='text-xs mt-5'>{elem.description}</p>
                        <button className={`px-4 py-2 ${elem.instock ? "bg-sky-700" : "bg-red-700"} text-xs rounded text-zinc-100 mt-3`}>
                            {elem.instock ? "In Stock" : "Out Of Stock"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
