const input = document.getElementById("input");
// const btn = document.getElementById("form-btn");

input.addEventListener("keyup", (e) => {
    e.preventDefault();
    const regEx = /^[a-zA-Z0-9]{6,10}$/;

    if (regEx.test(e.target.value)) {
        e.target.classList.add("success");
        e.target.classList.remove("error");
    }
    else {
        e.target.classList.add("error");
        e.target.classList.remove("success");
    }

})