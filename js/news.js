const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategories(data.data));
};
const showCategories = data =>{
    console.log(data)
    // capture  categories container data in nav bar
    const categoriesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCategory=>{
    //  console.log(singleCategory);
    
    // first way to create innerHtml
    // categoriesContainer.innerHTML += `
    // <a class = "nav-link" href="#">${singleCategory?.category_name}</a>`

    // second way to create innerHtml
    let linkContainer = document.createElement('p')
    linkContainer.innerHTML = `<a class = "nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`
     categoriesContainer.appendChild(linkContainer);    
});
    
}

// fetch all news available in category
const fetchCategoryNews = (category_id, category_name) =>{
    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data,category_name));

}

const showAllNews = (data, category_name) => {
console.log(data, category_name);
document.getElementById('news-count').innerText = data.length;
document.getElementById('category-name').innerText = category_name;

const newsContainer = document.getElementById('all-news');
newsContainer.innerHTML = '';

data.forEach(singleNews => {
    console.log(singleNews)
    // newsContainer.innerHTML +=
   const  card = document.createElement('div');
   card.classList.add('card', 'mb-3');
   card.innerHTML = `
   
   <div class="row g-0">
   <div class="col-md-4">
     <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${singleNews.title}</h5>
       <p class="card-text">${singleNews.details.slice(0, 200)}</p>
       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
     </div>
   </div>
 </div>
   
   `;
   newsContainer.appendChild(card)

})
};