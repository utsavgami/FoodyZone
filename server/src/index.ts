import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// static images folder
app.use("/images", express.static("public/images"));

// API route
app.get("/", (req, res) => {

  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

// PORT fix for Render
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});