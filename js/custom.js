
let btn = document.querySelector("#btn_toggle");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-search");



btn.onclick = function(){
    sidebar.classList.toggle("active");
    if($(this).hasClass('fa-angle-right')){
        $(this).removeClass('fa-angle-right');
        $(this).addClass("fa-angle-left")
    }else{
        $(this).addClass('fa-angle-right');
    }
}

// searchBtn.onclick = function(){
//     sidebar.classList.toggle("active");
// }









