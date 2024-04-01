import "./App.css";
import Body from "./components/Body";
// import Footer from "./components/Footer";
import Header from "./components/Header";

import img1 from "../src/images/cat_1.jpg";
import img2 from "../src/images/cat_2.jpg";
import img3 from "../src/images/cat_3.jpg";
import img4 from "../src/images/cat_4.jpg";
import img5 from "../src/images/cat_5.jpeg";
import img6 from "../src/images/cat_6.png";
import img7 from "../src/images/1482.jpg";
import img8 from "../src/images/45360.jpg";
import img9 from "../src/images/45366.jpg";
import View from "./components/View";
import { createContext, useState } from "react";
import Cart from "./components/Cart";
import Liked from "./components/Liked";

export const appContext = createContext();

// const viewContent = all_items[4];

function App() {
  const [all_items, setItem] = useState([
    {
      index: 0,
      img: img1,
      name: "1. W-180",
      description: `Cashews have no cholesterol and are packed with heart-healthy
                unsaturated fats. High in nutrients, minerals, antioxidants, and
                vitamins, and a wonderful source of energy and protein. Cashews
                with large kernels. Vegetarian-friendly product. A handful of
                cashew nuts every day will help you retain your energy and
                overall health.`,
      original_amount: 1000,
      discount_amount: 500,
      discount_percentage: 50,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: true,
    },
    {
      index: 1,
      img: img2,
      name: "2. W-210",
      description: `The W-210 is a more compact version of the W-180. These nuts are still rather large, and they’ll cost you more cash. W-210 cashews, commonly called Jumbo cashew nuts, are also popular among consumers. They’re a little smaller than W-180, but they’re still recognized for being enormous nuts.`,
      original_amount: 1000,
      discount_amount: 700,
      discount_percentage: 30,
      quantity: 1,
      stack: true,
      isInLike: true,
      isInCart: false,
    },
    {
      index: 2,
      img: img3,
      name: "3. W-240",
      description: `If you move down a size, you’ll run into the W-240. This is regular-sized cashew that is of mid-grade quality. 
      They’ll be in mid-range, and while they’ll still look great, they won’t be as big as a Jumbo or King cashew.`,
      original_amount: 1000,
      discount_amount: 100,
      discount_percentage: 90,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: true,
    },
    {
      index: 3,
      img: img4,
      name: "4. W-320",
      description: `W-320 is a popular and widely available cashew variety. It is popular since it offers the best combination of size and pricing. Despite their appropriate size, 
      they are significantly more appealing to the common customer due to their low cost.`,
      original_amount: 1000,
      discount_amount: 100,
      discount_percentage: 90,
      quantity: 1,
      stack: true,
      isInLike: true,
      isInCart: false,
    },
    {
      index: 4,
      img: img5,
      name: "5. W-450",
      description: `   W-450 is another variety of cashew nuts. In comparison to W-180, these are less pricey; however, they are also much smaller in size.

      W-450 is popular because of its low price, and once you get below the W-450, you’re talking about cashew bits. The W-450 is a fantastic option to consider 
      if you know you want the entire cashew but don’t want to spend a significant amount of money.`,
      original_amount: 1005,
      discount_amount: 1000,
      discount_percentage: 0.1,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: true,
    },
    {
      index: 5,
      img: img6,
      name: "6. Scorched Wholes",
      description: `   Cashews are sometimes known as burned or scorched cashews. Cashews that are light brown in hue have been burnt. The light brown cashews were roasted for slightly longer than the white cashews, 
      giving them a deeper brown hue. Cashews of the burnt variety are sometimes offered in chunks and other times in wholes.`,
      original_amount: 1005,
      discount_amount: 1000,
      discount_percentage: 0.1,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: false,
    },
    {
      index: 6,
      img: img7,
      name: "7. W-180",
      description: `Cashews have no cholesterol and are packed with heart-healthy
                unsaturated fats. High in nutrients, minerals, antioxidants, and
                vitamins, and a wonderful source of energy and protein. Cashews
                with large kernels. Vegetarian-friendly product. A handful of
                cashew nuts every day will help you retain your energy and
                overall health.`,
      original_amount: 1000,
      discount_amount: 500,
      discount_percentage: 50,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: false,
    },
    {
      index: 7,
      img: img8,
      name: "8. W-210",
      description: `The W-210 is a more compact version of the W-180. These nuts are still rather large, and they’ll cost you more cash. W-210 cashews, commonly called Jumbo cashew nuts, are also popular among consumers. They’re a little smaller than W-180, but they’re still recognized for being enormous nuts.`,
      original_amount: 1000,
      discount_amount: 700,
      discount_percentage: 30,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: false,
    },
    {
      index: 8,
      img: img9,
      name: "9. W-240",
      description: `If you move down a size, you’ll run into the W-240. This is regular-sized cashew that is of mid-grade quality. 
      They’ll be in mid-range, and while they’ll still look great, they won’t be as big as a Jumbo or King cashew.`,
      original_amount: 1000,
      discount_amount: 100,
      discount_percentage: 90,
      quantity: 1,
      stack: true,
      isInLike: false,
      isInCart: false,
    },
  ]);
  const [isView, setView] = useState(false);
  const [isCart, setCart] = useState(false);
  const [cartDetails, setCartDetails] = useState([
    all_items[4],
    all_items[2],
    all_items[0],
  ]);
  const [isOrder, setOrder] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [viewContent, setViewContent] = useState(all_items[4]);
  // const [cartItems, setcartItems] = useState([]);
  const [isLiked, setLiked] = useState(true);
  const [likeDetails, setLikeDetails] = useState([all_items[3], all_items[1]]);
  const value = {
    isView,
    setView,
    isCart,
    setCart,
    isOrder,
    setOrder,
    all_items,
    setItem,
    viewContent,
    setViewContent,
    isAuth,
    setAuth,
    cartDetails,
    setCartDetails,
    isLiked,
    setLiked,
    likeDetails,
    setLikeDetails,
  };

  return (
    <>
      <appContext.Provider value={value}>
        <Header />
        <Body />
        {/* <Footer /> */}
        {isCart && <Cart />}
        {isLiked && <Liked />}
        {isView && <View />}
      </appContext.Provider>
    </>
  );
}

export default App;
