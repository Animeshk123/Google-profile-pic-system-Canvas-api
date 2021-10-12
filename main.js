setTimeout(() => {
    document.body.style.opacity = "1";
},500);



const data = localStorage.getItem("imgsrc");

const name = document.querySelector("#name");
const button = document.querySelector("button");
const viewBox = document.querySelector(".viewBox");
const lastBox = document.querySelector(".lastBox");
const profileimg = document.querySelector(".profile img");
const text = document.querySelector(".lastname");
let dataUrl = "images (5).jpeg";
const colors = ["#482ff7","#2d6cdf","#46c3db","#fc5c9c","#581b98","#3d5af1","#0e153a","#364f6b","#17b978"]


profileimg.addEventListener("click", () => {
    const isDelete = confirm("are you sure to that you want a new profile pic ?");
    if(isDelete) {
    localStorage.removeItem("imgsrc");
    name.value = "";
    alert("please refresh the page");
    }
    else {
        return;
    }
})

if(data === null) {
    viewBox.style.display = "block";
    lastBox.style.display = "none";
button.addEventListener("click", () => {
    if (name.value === '') {
        alert("enter your name");
    }
    else {
        const realvalue = name.value.charAt(0).toUpperCase();
        const canvas = document.querySelector("#mycanvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        let number = Math.floor(Math.random() * colors.length -1);
        ctx.fillStyle = colors[number];
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "bold 63px sans-serif";
        ctx.lineHeight = "1.6";
        ctx.fillText(realvalue, canvas.width / 2 - 23, canvas.height / 2 + 24);
        dataUrl = canvas.toDataURL("image/jpeg");
        localStorage.setItem("imgsrc",JSON.stringify({img:dataUrl,text:name.value}));
        viewBox.style.display = "none";
        lastBox.style.display = "block";
        profileimg.src = dataUrl;
        text.innerText = name.value;
        name.value = "";
    }
})
}
else {
    name.value = "";
    const obj = JSON.parse(data);
    viewBox.style.display = "none";
    lastBox.style.display = "block";
    profileimg.src = obj.img;
    text.innerText = obj.text;
}
