import { useLayoutEffect } from "react";
import paneerPizza from '../assets/images/svg/paneer-pizza.svg'
import chesePizza from '../assets/images/svg/chese-pizza.svg'
import pizza1 from '../assets/images/png/pizza-img-1.png'
import pizza2 from '../assets/images/png/pizza-img-2.png'
import pizza3 from '../assets/images/png/pizza-img-3.png'
import pizza4 from '../assets/images/png/pizza-img-4.png'
import galleryImg1 from "../assets/images/png/gallery-img-1.png";
import galleryImg2 from "../assets/images/png/gallery-img-2.png";
import galleryImg3 from "../assets/images/png/gallery-img-3.png";
import galleryImg4 from "../assets/images/png/gallery-img-4.png";
import galleryImg5 from "../assets/images/png/gallery-img-5.png";
import galleryImg6 from "../assets/images/png/gallery-img-6.png";
import galleryImg7 from "../assets/images/png/gallery-img-7.png";
import userAvatar1 from "../assets/images/png/testimonial-user-img-1.png";
import userAvatar2 from "../assets/images/png/testimonial-user-img-2.png";
import userAvatar3 from "../assets/images/png/testimonial-user-img-3.png";

import { Chefs, FacebookSvg, Food, InstaSvg, LinkdinSvg, Order, PizzaSlice, Support, Track } from "./Icons";

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

];

export const Bestsleller_data = [
    {
        Image: pizza1,
        price: "₹279",
        name: "Tandoori Paneer ",
        details: "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs",
    },
    {
        Image: pizza2,
        price: "₹299",
        name: "Cheese Overload ",
        details: "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust",
    },
    {
        Image: pizza3,
        price: "₹239",
        name: "Veggie Fiesta",
        details: "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese",
    },
    {
        Image: pizza4,
        price: "₹249",
        name: "Masala Paneer",
        details: "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese",
    }
]

export const SOCIAL_ICON = [
    {
        icon: FacebookSvg,
        socialLink: "https://www.facebook.com"
    },
    {
        icon: InstaSvg,
        socialLink: "https://www.instagram.com"
    },
    {
        icon: LinkdinSvg,
        socialLink: "https://www.linkedin.com"
    }
]

export const SUPPORT_LINKS = [
    "Terms & Conditions", "Privacy Policy"
];

export const QUICK_LINKS = [
    "Home", "About Us", "Menu", "Gallery", "Testimonial", "Contact"
];

export const Gallery_Data = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
];

export const HOW_IT_WORKS_DATA = [
    {
        icon: PizzaSlice,
        title: "Choose Your Pizza",
        description: "Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.",
    },
    {
        icon: Order,
        title: "Place Your Order",
        description: "Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.",
    },
    {
        icon: Track,
        title: "Track & Enjoy",
        description: "Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!",
    }
];

export const Testimonials_Data = [
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },
];

export const Testimonials_Avatar = [
    userAvatar1,
    userAvatar2,
    userAvatar3
]