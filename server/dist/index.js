"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static("public/images"));
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
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
//# sourceMappingURL=index.js.map