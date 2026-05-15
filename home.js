
const featureData = [
    {
        title: "کتابونه ۱۰۰۰۰+",
        img: "./assets/icons/stack-of-books.png",
        link: "books.html"
    },
    {
        title: "کتاب ارډر او ډیلوري",
        img: "./assets/icons/delivery.png",
        link: "books.html"
    },
    {
        title: "کتابونه پورکول",
        img: "./assets/icons/signing.png",
        link: "books.html"
    },
    {
        title: "کتابتون غړیتوب ترلاسه کول",
        img: "./assets/icons/member-card.png",
        link: "register.html"
    }
];

function createFeatureCard(item, index) {
    const card = document.createElement("div");
    card.className = "featureCard";
    card.id = `feature-${index}`;

    const iconDiv = document.createElement("div");
    iconDiv.className = "featureIcon";

    const link = document.createElement("a");
    link.href = item.link;

    const img = document.createElement("img");
    img.src = item.img;
    img.width = 100;
    img.height = 100;

    link.appendChild(img);
    iconDiv.appendChild(link);

    const title = document.createElement("h3");
    title.className = "featureTitle";
    title.textContent = item.title;

    card.appendChild(iconDiv);
    card.appendChild(title);

    return card;
}

const featureContainer = document.getElementById("featureCards");
featureData.forEach((item, i) => {
    featureContainer.appendChild(createFeatureCard(item, i));
});


const popularBooksData = [
    {
        title: "سیرت النبي",
        author: "احمد",
        img: "./assets/books/Seerat-Ul-Nabi-S.A.W-By-Maulana-Muhammad-Idrees-Kandhlavi.jpg",
        price: "10$",
        actualPrice: "14$"
    },
    {
        title: "Who is Allah",
        author: "محمد",
        img: "./assets/books/who-is-allah-by-umm-abdurrahman-sakina-hirschfelder-ebook.jpg",
        price: "10$",
        actualPrice: "14$"
    },
    {
        title: "Allah and his Prophet",
        author: "حشمت",
        img: "./assets/books/who-is-allah-and-his-prophet-pbuh-darussalam-20180420-143947.webp",
        price: "10$",
        actualPrice: "14$"
    },
    {
        title: "صحیح المسلم",
        author: "خان",
        img: "./assets/books/sahih-muslim-abridged.jpg",
        price: "10$",
        actualPrice: "14$"
    }
];

function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "featured_book";
    
    
    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    
    const link = document.createElement("a");
    link.href = "books.html";

    const img = document.createElement("img");
    img.src = book.img;
    
    link.appendChild(img);
    imgDiv.appendChild(link);
    
    const content = document.createElement("div");
    content.className = "book-contents";
    
    const title = document.createElement("h2");
    title.textContent = book.title;
    
    const author = document.createElement("p");
    author.textContent = book.author;
    
    content.appendChild(title);
    content.appendChild(author);

    const sellInfo = document.createElement("div");
    sellInfo.className = "sellInfo";
    
    const price = document.createElement("p");
    price.className = "discountPrice";
    
    const priceText = document.createTextNode(book.price + " ");
    const actualPrice = document.createElement("span");
    actualPrice.className = "actualPrice";
    actualPrice.textContent = book.actualPrice;
    
    price.appendChild(priceText);
    price.appendChild(actualPrice);
    
    const rating = document.createElement("p");
    rating.textContent = "★★★★★";
    
    sellInfo.appendChild(price);
    sellInfo.appendChild(rating);
    
    card.appendChild(imgDiv);
    card.appendChild(content);
    card.appendChild(sellInfo);
    
    return card;
}

const popularContainer = document.getElementById("popularBooks");
popularBooksData.forEach(book => {
    popularContainer.appendChild(createBookCard(book));
});


const whyChooseData = [
    {
        title: "زرګونه کتابونه په یوه ځای کي",
        desc: "زرګونه کتابونه ستاسو د مطالعي او پوهي د ودي لپاره شتون لري",
        img: "./assets/icons/book.png"
    },
    {
        title: "پر وخت ډیلوري",
        desc: "موږ ستاسو ارډر په مشخص وخت کی تر تاسو پوری در رسو",
        img: "./assets/icons/chronometer.png"
    },
    {
        title: "د پوهي وده",
        desc: "زموږ سره خپلي پوهي ته وده ورکړي",
        img: "./assets/icons/books.png"
    },
    {
        title: "په اساني سره د کتابونو پور کول",
        desc: "تاسو کولای سي کتابونه په انلاین ډول پور کړي",
        img: "./assets/icons/loan.png"
    }
];

function createWhyCard(item) {
    const card = document.createElement("div");
    card.className = "featureCard";
    
    const iconDiv = document.createElement("div");
    iconDiv.className = "featureIcon";
    
    const img = document.createElement("img");
    img.src = item.img;
    img.width = 100;
    img.height = 100;
    
    iconDiv.appendChild(img);
    
    const title = document.createElement("h2");
    title.className = "featureTitle";
    title.textContent = item.title;
    
    const desc = document.createElement("p");
    desc.textContent = item.desc;
    
    card.appendChild(iconDiv);
    card.appendChild(title);
    card.appendChild(desc);
    
    return card;
}

const whyContainer = document.getElementById("featureCards1");
whyChooseData.forEach(item => {
    whyContainer.appendChild(createWhyCard(item));
});

const testimonialData = [
    {
        name: "روح الله",
        role: "غړی",
        img: "./assets/humans/20251220_114409.jpg",
        message: "زما د مطالعي لپاره ډيري اسانتیاوي رامنځته کړي"
    },
    {
        name: "احمد",
        role: "غړی",
        img: "./assets/humans/20251220_114153.jpg",
        message: "کور مو ودان چی انلاین کتابتون مو جوړ کړي"
    },
    {
        name: "حکمت الله",
        role: "غړي",
        img: "./assets/humans/20251220_114340.jpg",
        message: "مننه"
    }
];

function createTestimonial(item) {
    const card = document.createElement("div");
    card.className = "testimonial";
    
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    
    const img = document.createElement("img");
    img.src = item.img;
    
    const infoDiv = document.createElement("div");
    
    const name = document.createElement("h4");
    name.textContent = item.name;
    
    const role = document.createElement("span");
    role.textContent = item.role;
    
    infoDiv.appendChild(name);
    infoDiv.appendChild(role);
    
    userDiv.appendChild(img);
    userDiv.appendChild(infoDiv);
    
    const message = document.createElement("p");
    message.className = "message";
    message.textContent = `“ ${item.message} ”`;
    
    card.appendChild(userDiv);
    card.appendChild(message);
    
    return card;
}

const testimonialContainer = document.getElementById("testimonialContainer");
testimonialData.forEach(item => {
    testimonialContainer.appendChild(createTestimonial(item));
});



let searchedBooksData = [];
fetch("./books.json")
.then(res => res.json())
.then(data => {
    searchedBooksData = data
    createMostSearchedBooks()
  });

const searchedContainer = document.getElementById("searchedBooks");
function createMostSearchedBooks(){

    for(book of searchedBooksData){
        
        const card = document.createElement("div");
        card.className = "featured_book";
        
        
    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    
    const link = document.createElement("a");
    link.href = "books.html";
    
    const img = document.createElement("img");
    img.src = book.cover;
    
    link.appendChild(img);
    imgDiv.appendChild(link);
    
    const content = document.createElement("div");
    content.className = "book-contents";
    
    const title = document.createElement("h2");
    title.textContent = book.title;
    
    const author = document.createElement("p");
    author.textContent = book.author;
    
    content.appendChild(title);
    content.appendChild(author);

    const searchInfo = document.createElement("div")
    const numberOfSearches = document.createElement("p")
    numberOfSearches.textContent = "سرچ شمیر: "+book.numberOfSearchTimes
  
    
    searchInfo.append(numberOfSearches)
    
    card.append(imgDiv,content,searchInfo);
 
    searchedContainer.append(card)
}
}



