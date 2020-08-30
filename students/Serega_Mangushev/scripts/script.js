//const products = document.querySelector('.shop__list');
class ProductСard {
  constructor(item = []) { 
    this.root = item.root;
    this.title = item.title;
    this.price = item.price;
  }

  getComponent(component) {
    return component;
  }
}
 
class Goods {
  constructor() { 
    this.getVariables();
    this.getGoods();
    this.sum = this.getSumProduct(this.goods, "price");   
    this.maxNumPrice.innerHTML = `Общая цена товаров на сумму: ${this.sum} Руб`;
    this.render();
  } 

  getVariables(){  
    this.products = document.querySelector(".shop__list");
    this.maxNumPrice = document.querySelector(".shop__max-price");
    this.sum = 0; 
    this.goods = [];
  }
  getGoods() {
    this.goods = [
      {
        root: "./image/coffee1.webp",
        title: "Шоколадное кофе",
        price: 57,
      },
      {
        root: "./image/coffee2.webp",
        title: "Ванильное кофе",
        price: 39,
      },
      {
        root: "./image/coffee3.webp",
        title: "Черное кофе",
        price: 32,
      },
      {
        root: "./image/coffee3.webp",
        title: "Черное кофе",
        price: 32,
      },
    ];
  }

  getSumProduct(arr, key) {
    return arr.reduce((all, cur) => all + cur[key], 0); 
  }

  render() {
    let domTree = this.goods
      .map((item) => {
        const card = new ProductСard(item);
        return card.getComponent([
          ` <div class="shop__product product">
                <img class="product__img" src="${card.root}" alt="Черное">
                <div class="product__group">
                    <p class="product-description">${card.title}</p>  
                    <span class="product__price">${card.price} Р</span> 
                    <button class="product__btn btn">Заказать</button>
                </div>
            </div>`,
        ]);
      })
      .join("");
    this.products.innerHTML = domTree;
  }
}
const goods =  new Goods(); 



     
/*
 
class Basket{ 
    constructor(){ 
        
    } 

    openBasket(){ 
        //Открываем корзину.
    } 

    closeBasket(){ 
        //Закрываем корзину.
    } 

    //Еще метод подсчета общей стоимости товаров в корзине, но в планах реализация через getSumProduct 

    getProduct(){ 
        //Купить товар разумеется.
    }
} 

//Могу предположить, что этот класс должен будет быть в Basket
class ElementBasket{ 
    constructor(){ 
        
    } 

    remove(item){ 
        //Удаляем  item (Не обязательно только в корзине)
    } 
}  

//Временная мера и некоторые методы могут в будущем являться функциональщиной. 


/* 
Небольшое пояснение.  Мы можем предположить, что Корзина - это один класс/объект,  
ее составляющая - это  product/item.  
У product  не планируется создавать метод /купить.  
Логично, что мы добавляем собственность корзины  
и уже делаем заказ через корзину, т.е покупая товары 
 - мы покупаем общие товары, которые собственность корзины  
 и логично, что у товара не может быть метода покупки.  
 
 Противоречие: Конечно купить n  товар мы не можем,  
 но нам доступна возможность удалить товар.  
 Товар один и его мы удаляем, это уже не метод корзины,  
 а именно метод товара (Удалить) (Добавить) 
*/

class Hamburger {
  constructor() {
    //Инициализация конструктора.
    this.type = [
      {
        max: {
          id: 1,
          description: "Большой гамбургер ",
          price: 100,
          kalloriynostyu: 40,
        },
        min: {
          id: 2,
          description: "Маленький гамбургер ",
          price: 50,
          kalloriynostyu: 20,
        },
      },
    ];

    this.filling = [
      {
        cheese: {
          id: 1,
          description: "С сыром ",
          price: 10,
          kalloriynostyu: 20,
        },

        salad: {
          id: 2,
          description: "С салатом ",
          price: 10,
          kalloriynostyu: 20,
        },

        potato: {
          id: 3,
          description: "С картошкой ",
          price: 15,
          kalloriynostyu: 10,
        },

        seasoning: {
          id: 4,
          description: "Заправить приправой ",
          price: 15,
          kalloriynostyu: 0,
        },

        mayonnaise: {
          id: 5,
          description: "Заправить майонезом ",
          price: 20,
          kalloriynostyu: 5,
        },
      },
    ];

    this.sum = 0; 

    //Не работает, почему-то показывает NAN
    this.sum = goods.getSumProduct(Object.values(this.type[0], "price")); 
    console.log(this.sum); 

    //Выбираем какой гамбургер и специи к нему. Специй по умолчанию может не быть.
    this.getChoice("2", "да"); //Второй аргумент может называться как угодно, главное, что он есть
  }
 

  //Проверяем , что такой гамбургер есть.
  getChoice(variant, filling = false) {
    if (variant === "1") {
      variant = this.type[0].max.id;
    }
    if (variant === "2") {
      variant = this.type[0].min.id;
    }
    this.whatGetBurger(variant, filling);
  }
 
  //Проверяем что вообще выбрал пользователь из того, что есть.
  whatGetBurger(variant, filling = false) {
    //Если пользователь выбрал большой гамбургер.
    if (variant === this.type[0].max.id) this.price = this.type[0].max.price;
    //Если пользователь выбрал маленький гамбургер.
    else if (variant === this.type[0].min.id)
      this.price = this.type[0].min.price;
    //Если ошибка.
    else throw new Error("Гамбургер не был выбран");
    this.thereIsfilling(variant, filling);
  }
 
  //По умолчанию если нет специй, тогда сразу покупаем Гамбургер.
  thereIsfilling(variant, filling = false) {
    if (filling !== false) this.checkGetFilling(variant, 1);
    else this.checkWhichBurger(variant);
  }
 

  //Проверка на то, какие специи были выбраны пользователем.
  checkGetFilling(variant, filling) {
    if (filling === 1) {
      filling = this.filling[0].cheese.id;
      this.price += this.filling[0].cheese.price;
    } else if (filling === 2) {
      filling = this.filling[0].salad.id;
      this.price += this.filling[0].salad.price;
    } else if (filling === 3) {
      filling = this.filling[0].potato.id;
      this.price += this.filling[0].potato.price;
    } else if (filling === 4) {
      filling = this.filling[0].seasoning.id;
      this.price += this.filling[0].seasoning.price;
    } else if (filling === 5) {
      filling = this.filling[0].mayonnaise.id;
      this.price += this.filling[0].mayonnaise.price;
    }
    this.checkWhichBurger(variant);
  }
 
  //Вывод результата в консоль логе.
  checkWhichBurger(variant) {
    if (variant === this.type[0].max.id)
      console.log(
        `Вы заказали ${this.type[0].max.description} по цине ${this.price}`
      );
    if (variant === this.type[0].min.id)
      console.log(
        `Вы заказали ${this.type[0].min.description} по цине ${this.price}`
      );
    return;
  }
}

const hamburger = new Hamburger();
    