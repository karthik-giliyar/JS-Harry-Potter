let popularss=[]

const popular=async()=>{
    const response1=await fetch("https://hp-api.herokuapp.com/api/characters");
    const populars=await response1.json();
    popularss.push(populars)
    UpcomingMovie(populars);
}
popular()


const loginbtn=document.getElementsByClassName("login-btn")[0]
const loginPage=document.getElementsByClassName("login-page")[0]
const loginContainer=document.getElementsByClassName("login-container")[0]
const inputVals=document.getElementsByClassName("input-val")[0]
const btns=document.getElementsByClassName("btn")[0]


loginbtn.addEventListener('click', e=>{
    loginPage.style.zIndex="1000";
})

loginPage.addEventListener('dblclick', e=>{
    console.log(e)
    if(e.target.className=="login-page" || e.target.className=="btn"){
        loginPage.style.zIndex="-1";
    }
})




function UpcomingMovie(populars) {
    let result1 = populars;
    let data1 = "";
    let totaldata1 = "";


    result1.forEach((result) => {
        data1 = `
        <div class="slider">
                        <div class="slider-img-container">
                            <div class="slider-img">
                                <img src="${result.image}" alt="movie-poster">
                            </div>
                            <div class="slider-content">
                                <div class="names"><p>${result.name}</p></div>
                                <div class="contents">
                                    <div class="rating">
                                        IMBD : <span>10</span>
                                    </div>
                                    <button class="btn2">View more</button>
                                </div>
                                <div class="fav">
                                    <div class="fav-img">
                                        <i onclick="redheart(this)" ondblclick="blackheart(this)" class="fa fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> `;

        totaldata1 = totaldata1 + data1;
    });

    let movie_container = document.getElementsByClassName("movie-container")[0];
    movie_container.innerHTML = totaldata1;

}



let count=0
function redheart(a){
    const counter = document.getElementsByClassName("num")[0]
    if(a.style.color !="red"){
        count=parseInt(counter.innerHTML)
        console.log(count)
        count+=1
        a.style.color = "red";
        counter.innerHTML =count;
        counter.style.display= "block";
    }
}

let recount=0
function blackheart(b){
    const counter = document.getElementsByClassName("num")[0]
    if(b.style.color =="red"){
        recount=counter.innerHTML
        recount-=1
        b.style.color = "black";
        counter.innerHTML =recount;
        counter.style.display= "block";
        if(recount==0){
        counter.style.display= "none";
        }
    }
}



const BannerSpan=document.getElementsByTagName("span");
const BannerDiv= document.getElementsByClassName("banner-img");
const dots=document.getElementsByClassName("dot")



let click=0;
BannerSpan[0].onclick = ()=>{
    click+=1;

    if(click==1)
    {
        BannerDiv[0].style.zIndex ="0";
        BannerDiv[1].style.zIndex ="1";
        BannerDiv[2].style.zIndex ="0";
        dots[1].style.backgroundColor="black";
        dots[0].style.backgroundColor="rgb(77, 77, 77)";
        dots[2].style.backgroundColor="rgb(77, 77, 77)";
    }
    if(click==2)
    {
        BannerDiv[0].style.zIndex ="0";
        BannerDiv[1].style.zIndex ="0";
        BannerDiv[2].style.zIndex ="1";
        dots[2].style.backgroundColor="black";
        dots[0].style.backgroundColor="rgb(77, 77, 77)";
        dots[1].style.backgroundColor="rgb(77, 77, 77)";

    }

    if(click==3)
    {
        BannerDiv[0].style.zIndex ="1";
        BannerDiv[1].style.zIndex ="0";
        BannerDiv[2].style.zIndex ="0";
        dots[0].style.backgroundColor="black";
        dots[2].style.backgroundColor="rgb(77, 77, 77)";
        dots[1].style.backgroundColor="rgb(77, 77, 77)";

    }
    if(click==3){
        click=0
    }
}

let rclick=0;
BannerSpan[1].onclick = ()=>{
    rclick+=1;
    if(rclick==1)
    {
        BannerDiv[0].style.zIndex ="0";
        BannerDiv[1].style.zIndex ="1";
        BannerDiv[2].style.zIndex ="0";
        dots[1].style.backgroundColor="black";
        dots[0].style.backgroundColor="rgb(77, 77, 77)";
        dots[2].style.backgroundColor="rgb(77, 77, 77)";


    }
    if(rclick==2)
    {
        BannerDiv[0].style.zIndex ="1";
        BannerDiv[1].style.zIndex ="0";
        BannerDiv[2].style.zIndex ="0";
        dots[0].style.backgroundColor="black";
        dots[1].style.backgroundColor="rgb(77, 77, 77)";
        dots[2].style.backgroundColor="rgb(77, 77, 77)";

    }
    
    if(rclick==3)
    {
        BannerDiv[0].style.zIndex ="0";
        BannerDiv[1].style.zIndex ="0";
        BannerDiv[2].style.zIndex ="1";
        dots[2].style.backgroundColor="black";
        dots[0].style.backgroundColor="rgb(77, 77, 77)";
        dots[1].style.backgroundColor="rgb(77, 77, 77)";

    }

    if(rclick==3){
        rclick=0
    }

}


// selectorconst 
const iClass = document.getElementsByClassName("iclass")[0]
const faSearch = document.getElementsByClassName("fa-search")[0]
const searchInputVal = document.getElementsByClassName("search-bar")[0]

// addEventListner
// iClass.addEventListener("click",searches)
searchInputVal.addEventListener("keyup",searchess)


// function
function searchess(e) {

    // console.log("hellooooooo");
    let moviesData = popularss[0]

    // let searchVal = searchInputVal.value

    let names = e.target.value

    console.log(names);

    let newMovieData = moviesData.filter(function (movieDatas) {
        return (
            movieDatas.name.toUpperCase().includes(names.toUpperCase())
        );
    });
    console.log(newMovieData);
    UpcomingMovie(newMovieData)
}



