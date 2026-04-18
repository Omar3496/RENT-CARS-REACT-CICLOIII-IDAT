import { HomeCar } from "./Car";

export function HomeDetails({ order, search }) { // ✅

    const cars = [
        {
            id: 1,
            name: "Toyota 4 Runner",
            price: 200,
            year: 2026,
            brand: "Toyota",
            img: "/toyota-4-runner.png",
        },
        {
            id: 2,
            name: "Audi Q3 Sportback",
            price: 230,
            year: 2026,
            brand: "Audi",
            img: "/audi-q3-sportback.png",
        },
        {
            id: 3,
            name: "Nissan Sentra",
            price: 100,
            year: 2026,
            brand: "Nissan",
            img: "/nissan-sentra.png",
        },
        {
            id: 4,
            name: "Toyota Hilux",
            price: 180,
            year: 2026,
            brand: "Toyota",
            img: "/toyota-hilux.png",
        },
        {
            id: 5,
            name: "BMW X5",
            price: 300,
            year: 2025,
            brand: "BMW",
            img: "/bmw_2025.png",
        },
        {
            id: 6,
            name: "Kia Sportage",
            price: 150,
            year: 2024,
            brand: "Kia",
            img: "/Kia_Sportage_2024.png",
        },
        {
            id: 7,
            name: "Hyundai Tucson",
            price: 170,
            year: 2025,
            brand: "Hyundai",
            img: "/Hyndai_Tucson_2025.png",
        },
        {
            id: 8,
            name: "Mazda CX-5",
            price: 190,
            year: 2025,
            brand: "Mazda",
            img: "/Mazda_Cx-5_2025.png",
        },
        {
            id: 9,
            name: "Chevrolet Tracker",
            price: 120,
            year: 2024,
            brand: "Chevrolet",
            img: "/chevrolettracker_2024.png",
        },
        {
            id: 10,
            name: "Ford Ranger",
            price: 210,
            year: 2026,
            brand: "Ford",
            img: "/Ford-Ranger_2026.png",
        }
    ];

    // ✅ FILTRO (marca + nombre)
    const filteredCars = cars.filter((car) => {
        const text = search.toLowerCase();
        return (
            car.name.toLowerCase().includes(text) ||
            car.brand.toLowerCase().includes(text)
        );
    });

    // ✅ ORDENAR SOBRE FILTRO
    const sortedCars = [...filteredCars].sort((a, b) => {
        if (order === "asc") return a.price - b.price;
        if (order === "desc") return b.price - a.price;
        return 0;
    });

    return (
        <div className="my-6 px-4 grid grid-cols-2 gap-5 pb-10">
            {sortedCars.map((car) => (
                <HomeCar
                    key={car.id}
                    id={car.id}
                    name={car.name}
                    price={car.price}
                    year={car.year}
                    brand={car.brand}
                    img={car.img}
                />
            ))}
        </div>
    );
}