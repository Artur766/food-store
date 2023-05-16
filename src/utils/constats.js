import burgerImage from "../images/free-icon-cheeseburger-2362255.svg"
import onionImage from "../images/free-icon-onion-2362361.svg"
import hotdogImage from "../images/free-icon-hotdog-sandwich-2362313.svg"
import food from "../images/free-icon-fast-food-2362274.svg"
import buritoImage from "../images/free-icon-burrito-2362225.svg"
import pizzaImage from "../images/free-icon-pizza-2362372.svg"
import vokImage from "../images/free-icon-noodles-2362350.svg"
import desertImage from "../images/free-icon-doughnut-2362260.svg"
import souseImage from "../images/free-icon-ketchup-2362341.svg"

import myasnayaBomba from "../images/мясная бомба.png"
import superSir from "../images/супер сырный.png"
import sytniyi from "../images/сытный.png"
import hardJab from "../images/тяжелый удар.png"
import vechnayaClassic from "../images//Вечная классика.png"
import italiya from "../images/Итальянский.png"

import nachos from "../images/photoначос.png"
import free from "../images/photoкартошка фри.png"
import luck from "../images/photoлуоквые кольца.png"

import homeHotDog from '../images/photoдомашний ход-дог.png'
import spiceHotDog from '../images/photoжгучий ъот.png'
import classicHotDog from '../images/photoклассический хот-дог.png'


import burgerCombo from "../images/бургер комбо.jpg"
import comboThree from "../images/Комбо на троих.jpg"
import bigMac from "../images/Биг мак комбо.jpg"

import peperoni from "../images/пеперони.jpg"
import cezar from "../images/пицца цезарь.jpg"
import italian from "../images/итальянскася пицца.jpg"

import cheez from "../images/клубничный чизкейк.jpg"
import pirojnoe from "../images/пирожное.jpg"
import morojnoe from "../images/ягодное морожное.jpeg"

import cheezs from "../images/сырный.jpg"
import shashlick from "../images/шашлычный.jpeg"
import tereyaki from "../images/терияки.jpg"



export const buttonLinks = [
  {
    image: burgerImage,
    title: "Бургеры",
    path: "/"
  }, {
    image: onionImage,
    title: "Закуски",
    path: "/snack"
  }, {
    image: hotdogImage,
    title: "Хот - доги",
    path: "/hot-dog"
  }, {
    image: food,
    title: "Комбо",
    path: "/combo"
  }, {
    image: buritoImage,
    title: "Шаурма",
    path: "/shaurma"
  }, {
    image: pizzaImage,
    title: "Пицца",
    path: "/pizza"
  }, {
    image: vokImage,
    title: "Вок",
    path: "/vok"
  }, {
    image: desertImage,
    title: "Десерты",
    path: "/deserts"
  }, {
    image: souseImage,
    title: "Соусы",
    path: "/sauces"
  }
]

export const burgers = [
  {
    title: "Мясная бомба",
    image: myasnayaBomba,
    price: 689,
    mass: "520г",
    id: "ыsdadsasda2314"
  }, {
    title: "Супер сырный",
    image: superSir,
    price: 550,
    mass: "512г",
    id: "d3123edasda"
  }, {
    title: "Сытный",
    image: sytniyi,
    price: 639,
    mass: "580г",
    id: "adsa2312312"
  }, {
    title: "Тяжелый удар",
    image: hardJab,
    price: 480,
    mass: "470г",
    id: "qdsad213213"
  }, {
    title: "Вечная классика",
    image: vechnayaClassic,
    price: 450,
    mass: "450г",
    id: "fqdssad213123"
  }, {
    title: "Итальянский",
    image: italiya,
    price: 560,
    mass: "510г",
    id: "kfsqfjdj233"
  }
]


export const snack = [
  {
    title: "Начос",
    image: nachos,
    price: 250,
    mass: "220г",
  }, {
    title: "Картошка фри",
    image: free,
    price: 245,
    mass: "180г",
  }, {
    title: "Луковые кольца",
    image: luck,
    price: 230,
    mass: "160г",
  }
]

export const hotDogs = [
  {
    title: "Домашний хот-дог",
    image: homeHotDog,
    price: 290,
    mass: "250г",
  }, {
    title: "Жгучий хот-дог",
    image: spiceHotDog,
    price: 239,
    mass: "245г",
  }, {
    title: "Классический хот-дог",
    image: classicHotDog,
    price: 220,
    mass: "215г",
  }
]

export const pizza = [
  {
    title: "Пеперони",
    image: peperoni,
    price: 550,
    mass: "630г",
  }, {
    title: "Цезарь",
    image: cezar,
    price: 600,
    mass: "700г",
  }, {
    title: "Итальянская",
    image: italian,
    price: 720,
    mass: "800г",
  }
]

export const deserts = [
  {
    title: "Чизкейк",
    image: cheez,
    price: 240,
    mass: "190г",
  }, {
    title: "Шоколадное пирожное",
    image: pirojnoe,
    price: 190,
    mass: "210г",
  }, {
    title: "Ягодное морожное",
    image: morojnoe,
    price: 250,
    mass: "300г",
  }
]
export const souse = [
  {
    title: "Сырный",
    image: cheezs,
    price: 70,
    mass: "100г",
  }, {
    title: "Шашлычный",
    image: shashlick,
    price: 70,
    mass: "100г",
  }, {
    title: "Терияки",
    image: tereyaki,
    price: 70,
    mass: "100г",
  }
]
export const combo = [
  {
    title: "Комбо бургер",
    image: burgerCombo,
    price: 450,
    mass: "830г",
  }, {
    title: "Комбо на троих",
    image: comboThree,
    price: 1300,
    mass: "2700г",
  }, {
    title: "Комбо с двойным бурегром",
    image: bigMac,
    price: 510,
    mass: "1010г",
  }
]