import { useLayoutEffect } from "react";
import paneerPizza from '../assets/images/svg/paneer-pizza.svg'
import chesePizza from '../assets/images/svg/chese-pizza.svg'

import { Chefs, Food, Support } from "./Icons";

export const nav_Links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/" },
    { label: "Customize Pizza", href: "/" },
    { label: "Offers", href: "/" },
    { label: "About Us", href: "/" },
];

export const Hero_Data = [
    {
        heading: "Where Every Slice Feels Like Home",
        description: "At Pizza Nest, we bake more than pizza — we bake comfort. Customize your perfect slice, or choose from our signature favorites",
        number1: "5,000+",
        numberText1: "Pizzas Delivered",
        number2: "98%",
        numberText2: "Happy Customers",
    }
];

export const AboutNest_Data = [
    {
        icon: Chefs,
        name: "Professional Chefs"
    },
    {
        icon: Food,
        name: "Best Quality Food"
    },
    {
        icon: Support,
        name: "Online Support"
    },
];

export const Delicious_Data = [
    {
        Image: paneerPizza,
        heading: "Delicious",
        name: "Spicy Paneer",
        time: "Limited Time",
    },
    {
        Image: chesePizza,
        heading: "Delicious",
        name: "CHEESE BURST",
        time: "Limited Time",
    },

]
