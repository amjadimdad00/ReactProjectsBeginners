import express from "express";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/api/data", (req, res) => {
  const foodData = [
    {
      id: 1,
      name: "Boiled Egg",
      price: 10,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "/images/egg.png",
      type: "breakfast",
    },
    {
      id: 2,
      name: "RAMEN",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "/images/ramen.png",
      type: "lunch",
    },
    {
      id: 3,
      name: "GRILLED CHICKEN",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "/images/chicken.png",
      type: "dinner",
    },
    {
      id: 4,
      name: "CAKE",
      price: 18,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "/images/cake.png",
      type: "breakfast",
    },
    {
      id: 5,
      name: "BURGER",
      price: 23,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "/images/burger.png",
      type: "lunch",
    },
    {
      id: 6,
      name: "PANCAKE",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
