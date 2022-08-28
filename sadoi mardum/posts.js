const newPosts = document.querySelector('.new-posts');
const presidentNews = document.querySelector('.president-news');
const oliNews = document.querySelector('.oli-news');

const postsArr = [
        {
        title: 'Мулоқоти  Пешвои миллат муҳтарам Эмомалӣ Раҳмон бо Раиси иҷлоси 76-уми Маҷмаи Умумии СММ Абдулло Шоҳид',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/52312482253_e2b5934ecd_o.jpg',
        date: '№ 21.08.2022',
        tag: 'president',
        favri: true,
    
        },
        {
        title: 'Фармони Президенти Ҷумҳурии Тоҷикистон  Дар бораи таъин ва озод намудани судяҳоГуфтугӯи Рустами Эмомалӣ бо Мэрилин Йосефсон',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/DSC09535.jpg',
        date: '№ 26 август 2022',
        tag: 'oli',
        favri: false,
        
        },
        {
        title: 'Маросими супоридани мукофотҳои давлатӣ',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/52309085567_f0172b7c98_o.jpg',
        date: '№ 23.08.2022',
        tag: "president",
        favri: true,
            
        },
        {
        title: 'Суҳбати телефонии Пешвои миллат бо Президенти Федератсияи Россия',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/Standarti-Sadoi-mardum-putin.jpg',
        date: '№ 21.08.2022',
        tag: 'president',
        favri: false,
        
        },
        {
        title: 'Қарори Комиссияи марказии интихобот ва раъйпурсии Ҷумҳурии Тоҷикистон',
        photo: './img/posts-default-img.png',
        date: '№106 (4526) 26.08.2022',
        tag: 'oli',
        favri: false,
            
        },
        {
        title: 'Дастоварду бунёдкориҳои даврони соҳибистиқлолӣ беназиранд',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/1029072106_0_0_3000_1688_1920x0_80_0_0_31b2cb1f5042cd8b0b02d04222bd0127.jpg',
        date: '№104 (4524) 22.08.2022',
        tag: 'siyosat',
        favri: false,
                
        },
        {
        title: 'Дар қитъаи тоҷикистонии «CASA — 1000» 70 дарсади кор ба анҷом расидааст',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/broshure-1193x1200.png',
        date: '№ 24.08.2022',
        tag: 'iqtisod',
        favri: false,
            
        },
        {
        title: 'Фармони Президенти Ҷумҳурии Тоҷикистон  Дар бораи таъин ва озод намудани судяҳо',
        photo: './img/posts-default-img.png',
        date: '№ 21.08.2022',
        tag: 'matbuot',
        favri: false,
                
        },
        {
        title: '«Помиринвест — 2022»: қадами устувор дар ҷодаи рушд',
        photo: './img/posts-default-img.png',
        date: '№106 (4526) 26.08.2022',
        tag: 'mintaqa',
        favri: false,
                
        },
        {
        title: 'Имконоти таҳсил дар хориҷи кишвар дар замони соҳибистиқлолӣ',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/Kollazh2.jpg',
        date: '№106 (4526) 26.08.2022',
        tag: 'maorif',
        favri: false,
                    
        },
        
        {
        title: 'Ҳомии қонуну адолат',
        photo: 'http://sadoimardum.tj/wp-content/uploads/2022/08/h-436-1.jpg',
        date: '№106 (4526) 26.08.2022',
        tag: 'farhang',
        favri: false,
                        
        },
];

class Posts{
    constructor(options){
        this.title = options.title;
        this.photo = options.photo;
        this.date = options.date;
        this.tag = options.tag;
        this.favri = options.favri;
    }
}
        
let presidentTag = 0, oliTag = 0, siyosatTag = 0, iqtisodTag = 0, mintaqaTag = 0, farhangTag = 0, maorifTag = 0, matbuotTag = 0; 


for(let i = 0; i < postsArr.length ; i++){
    const posts = new Posts(postsArr[i])

    let lastPostsItems = document.querySelector('.last-items-posts');
    lastPostsItems.innerHTML += `
        <div class="last-posts">
            <img class="posts-img" src="${posts.photo}">
            <a class='posts-title' href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
    `
    const favriNews = document.querySelector('.favri');
    if(posts.favri){
        favriNews.innerHTML += `
            <a href="#">${posts.title}</a>
        `
    }


    if(posts.tag == 'president' && presidentTag == 0){
        let presidentPostBig = document.querySelector('.president-tag-body');
        presidentPostBig.innerHTML += `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        presidentTag++;

    }else if(posts.tag == 'president' && presidentTag > 0){
        const presidentPostSmall = document.querySelector('.president-small-items');
        presidentPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

    if(posts.tag == 'oli' && oliTag == 0){
        let oliPostBig = document.querySelector('.oli-tag-body');
        oliPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        oliTag++;

    }else if(posts.tag == 'oli' && oliTag > 0){
        const oliPostSmall = document.querySelector('.oli-small-items');
        oliPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

    if(posts.tag == 'siyosat' && siyosatTag == 0){
        let siyosatPostBig = document.querySelector('.siyosat-tag-body');
        siyosatPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        siyosatTag++;
        
    }else if(posts.tag == 'siyosat' && siyosatTag > 0){
        const oliPostSmall = document.querySelector('.siyosat-small-items');
        oliPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

    if(posts.tag == 'iqtisod' && iqtisodTag == 0){
        let iqtisodPostBig = document.querySelector('.iqtisod-tag-body');
        iqtisodPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        iqtisodTag++;

    }else if(posts.tag == 'iqtisod' && iqtisodTag > 0){
        const iqtisodPostSmall = document.querySelector('.iqtisod-small-items');
        iqtisodPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

    if(posts.tag == 'mintaqa' && mintaqaTag == 0){
        let mintaqaPostBig = document.querySelector('.mintaqa-tag-body');
        mintaqaPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        mintaqaTag++;

    }else if(posts.tag == 'mintaqa' && mintaqaTag > 0){
        const mintaqaPostSmall = document.querySelector('.mintaqa-small-items');
        mintaqaPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

    if(posts.tag == 'maorif' && maorifTag == 0){
        let maorifPostBig = document.querySelector('.maorif-tag-body');
        maorifPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        maorifTag++;

    }else if(posts.tag == 'maorif' && maorifTag > 0){
        const maorifPostSmall = document.querySelector('.maorif-small-items');
        maorifPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

    if(posts.tag == 'farhang' && farhangTag == 0){
        let farhangPostBig = document.querySelector('.farhang-tag-body');
        farhangPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        farhangTag++;

    }else if(posts.tag == 'farhang' && farhangTag > 0){
        const farhangPostSmall = document.querySelector('.farhang-small-items');
        farhangPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }
    if(posts.tag == 'matbuot' && matbuotTag == 0){
        let matbuotPostBig = document.querySelector('.matbuot-tag-body');
        matbuotPostBig.innerHTML = `
            <div class="post-big">
                <img class="post-big-img" src="${posts.photo}">
                <a href="#" class="post-big-text">${posts.title}</a>
                <p class="post-big-date">${posts.date}</p>
            </div>
        `
        matbuotTag++;

    }else if(posts.tag == 'matbuot' && matbuotTag > 0){
        const matbuotPostSmall = document.querySelector('.matbuot-small-items');
        matbuotPostSmall.innerHTML += `
        <div class="posts-small">
            <img class="posts-img" src="${posts.photo}">
            <a class="posts-title" href="#">${posts.title}</a>
            <p class="posts-date">${posts.date}</p>
        </div>
        `
    }

}
       
