

const images = [
    {
        src:"https://static.vecteezy.com/system/resources/previews/013/394/758/non_2x/3d-rendering-of-cyber-security-bug-icon-illustration-insect-virus-warning-png.png"
    },
    {
        src:"https://cdn3d.iconscout.com/3d/premium/thumb/ant-3d-icon-download-in-png-blend-fbx-gltf-file-formats--colony-worker-tiny-crawl-insects-pack-animal-icons-9862075.png"
    },
    {
        src:"https://freepngimg.com/save/131756-ant-red-png-download-free/512x512"
    },
    {
        src:"https://freepngimg.com/save/9724-ant-png/800x800"
    },
    {
        src:"https://cdn.pixabay.com/photo/2023/06/13/09/13/insect-8060425_1280.png"
    }
]

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click",function(e){
    let image = document.createElement("img");
    let randomLength = Math.floor(Math.random() * images.length);
    image.setAttribute("src",`${images[randomLength].src}`);
    image.style.position = "absolute";
    image.style.height = "100px"
    image.style.width = "100px"
    image.style.top = Math.random()*(window.innerHeight - image.offsetHeight - 100) + "px";
    image.style.left = Math.random()*(window.innerWidth - image.offsetWidth - 100) + "px";
    body.appendChild(image);
    console.log(window.innerHeight - image.offsetHeight,window.innerWidth - image.offsetWidth);
})