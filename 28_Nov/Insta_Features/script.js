
const users = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];

const story_data = [
  {
    name: "My story",
    img: "https://images.unsplash.com/photo-1731353160468-9bac2e2e894f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  },
  {
    name: "c_tal sharma",
    img: "https://images.unsplash.com/photo-1731484396266-b80443ec385b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ritu_pathak",
    img: "https://images.unsplash.com/photo-1732825892754-b2af908be8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Divyansh_",
    img: "https://images.unsplash.com/photo-1732878946664-9209edbf6b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hypr_Jaat",
    img: "https://images.unsplash.com/photo-1732813316053-1ab6342a821a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "iam_chaudhary",
    img: "https://images.unsplash.com/photo-1732825892754-b2af908be8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shayar_384",
    img: "https://images.unsplash.com/photo-1732823170284-0d3da1fce106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  },
];

const stories_container = document.querySelector(".stories-container");
const card_items = document.querySelector(".card-items");
const parent = document.querySelector(".parent");

function show_posts() {
  let clutter = "";
  users.forEach(function (elem, idx) {
    clutter += `<div class="card w-full pb-8">
                    <div class="name_profile w-full flex items-center justify-between px-3 py-2">
                        <div class="left flex items-center gap-4">
                            <div class="image-div w-20 h-20 rounded-full p-[2px] border-[3px] border-pink-600 border-solid cursor-pointer">
                                <img src="${elem.userprofile}" alt="" class="w-full h-full rounded-full object-cover">
                            </div>
                            <div class="name-location">
                                <h2 class="text-lg font-bold">${elem.username}</h2>
                                <p class="text-sm">${elem.userlocation}</p>
                            </div>
                        </div>
                        <div class="right flex items-center gap-5">
                            <button class="px-4 py-2 bg-gray-100 font-semibold text-sm">Follow</button>
                            <span class="rotate-90 text-xl"><i class="ri-more-2-fill"></i></span>
                        </div>
                    </div>

                    <div class="image-div w-full h-[50vh] bg-black ">
                      <img id="${idx+10}" src="${elem.userPost}" alt="" class="w-full h-full object-cover">
                    </div>

                    <div class="bottom-div w-full mt-2 px-4">
                        <div class="icons w-full flex items-center justify-between  py-2">
                            <div class="left flex items-center gap-4 ">
                                <div class="like flex items-center gap-2 text-2xl">
                                    <span id="${idx}" class="${elem.like ? 'text-red-600' : ""}">${elem.like ? '<i class="ri-heart-3-fill pointer-events-none"></i>' : '<i class="ri-heart-3-line pointer-events-none"></i>'}</span>
                                    <p class="text-lg">${elem.likeCount}</p>
                                </div>
                                <div class="comment flex items-center gap-2 text-2xl">
                                    <span><i class="ri-chat-ai-line"></i></span>
                                    <p class="text-lg">${elem.commentCount}</p>
                                </div>
                                <div class="share flex items-center gap-2 text-2xl">
                                    <span><i class="ri-share-forward-fill"></i></span>
                                    <p class="text-lg">${elem.shareCount}</p>
                                </div>
                            </div>
                            <div class="right">
                                <span class="text-2xl"><i class="ri-bookmark-fill"></i></span>
                            </div>
                        </div>

                        <div class="caption text-base opacity-85">
                            <p>${elem.caption}</p>
                        </div>
                        <div class="comment text-sm opacity-85 mt-1">
                            <p>View all comments</p>
                        </div>
                        <div class="time text-base opacity-85 mt-1">
                            <p>${elem.timeAgoUploaded} Days ago</p>
                        </div>
                    </div>

                </div>`;
  });
  card_items.innerHTML = clutter;
}
show_posts();

function render_story() {
  let clutter = "";
  story_data.forEach(function (elem,idx) {
    clutter += `<div class="story flex items-center gap-1 flex-col flex-shrink-0" >
                    <div class="image-div w-20 h-20 rounded-full border-pink-600 border-[3px] border-solid p-[2px] cursor-pointer">
                        <img id="${idx}" src="${elem.img}" alt="" class="w-full h-full object-cover rounded-full">
                    </div>
                    <p class="font-medium text-xs">${elem.name}</p>
              </div>`;
  });
  stories_container.innerHTML = clutter;
}
render_story();

let modal = document.querySelector(".modal");
function show_modal() {
  let modalImg = document.querySelector(".modal .big-image");
  let growth = document.querySelector(".growth");
  let user_profile = document.querySelector(".user-profile");

  let stories = document.querySelectorAll(".story");
  stories.forEach(function (story) {
    story.addEventListener("click", function (e) {
      let grow = 0;
      let clutter = `<div class="left flex gap-4">
              <div class="image-div w-14 h-14 rounded-full cursor-pointer">
                <img
                  src="${story_data[e.target.id].img}"
                  alt=""
                  class="w-full h-full rounded-full object-cover"
                />
              </div>
              <div class="name-location flex items-center gap-2">
                <p class="text-xl font-semibold text-white">${story_data[e.target.id].name}</p>
                <span class="text-white opacity-70">20h</span>
              </div>
            </div>
            <div class="right flex items-center gap-5">
              <span class="rotate-90 text-xl text-white"
                ><i class="ri-more-2-fill"></i
              ></span>
            </div>`
      
      if (e.target.tagName === "IMG") {
        let int = setInterval(function(){
          grow++;
          growth.style.width = `${grow}%`;
        },25)
        setTimeout(function(){
          clearInterval(int);
          modal.style.display = "none";
        },2500)
        modal.style.display = "block";
        user_profile.innerHTML = clutter;
        modalImg.setAttribute("src", `${e.target.src}`);
      }
    });
  });
}
show_modal();

function like_dislike_feature(){
  card_items.addEventListener("dblclick",function(e){
    if(users[e.target.id-10].like){
      users[e.target.id-10].likeCount--;
      users[e.target.id-10].like = false;
    }
    else{
      users[e.target.id-10].likeCount++;
      users[e.target.id-10].like = true;
    }
    show_posts();
  })
  
  card_items.addEventListener("click",function(e){
    console.log(e.target);
    if(users[e.target.id].like){
      users[e.target.id].likeCount--;
      users[e.target.id].like = false;
    }
    else{
      users[e.target.id].likeCount++;
      users[e.target.id].like = true;
    }
    show_posts();
  })
}
like_dislike_feature();