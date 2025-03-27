// Button status
const buttonStatus = document.querySelectorAll("[button-status]"); 
//thuộc tính tự định nghĩa phải thêm []
if(buttonStatus.length > 0){
  let url = new URL(window.location.href);
  // để thay đổi url thêm new URL
  buttonStatus.forEach(button => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status"); //lấy giá trị thuộc tính button-status của các buttonv  
      if(status){
        // "": params, sau là giá trị
        url.searchParams.set("status", status);
      }
      else{
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    }); 
  });
}
// End Button status


// Form Search
const formSearch = document.querySelector("#form-search");
if(formSearch){
  let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    
    if(keyword){
      url.searchParams.set("keyword", keyword);
    }
    else{
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  })
}

// End Form Search

// Pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
if(buttonPagination){
  let url = new URL(window.location.href);
  buttonPagination.forEach(button => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");
      url.searchParams.set("page", page);
      window.location.href = url.href;
    })
  })
}
// End Pagination