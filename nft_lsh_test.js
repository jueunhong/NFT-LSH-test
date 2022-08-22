
var round; //사용자가 선택한 round -> 게임이 끝나는 시점
var gameArr; // 게임 한번 진행시 사용할 배열
var selectArr; // 사용자가 선택한 정보를 저장할 배열
var showArr; //화면에 nft 출력 시 중복을 제거하기위한 배열
var count; // 이미지를 왼쪽/오른쪽에 배치하기위한 구분번호
var printNo; //라운드 진행정보 표현용
var allNft = []; //전체 nft 정보가 들어있는 배열

allNft.push({img: "https://img.seadn.io/files/72de9cd5c45fc6d70bc0c9ba641075e9.png?fit=max&w=600", 
name: "CryptoPunk", link: "https://opensea.io/collection/cryptopunks"});
allNft.push({img: "https://img.seadn.io/files/8e8a31ecc7e358da961800f8ec648454.png?fit=max&w=600", 
name: "goblintown", link: "https://opensea.io/collection/goblintownwtf"});
allNft.push({img: "https://img.seadn.io/files/39fc2efb78d0a5c981fcf328dc79bacf.png?fit=max&w=600",
name: "Doodle", link: "https://opensea.io/collection/doodles-official"});
allNft.push({img: "https://img.seadn.io/files/6c4b022eba9937f5ae10352642ce5a94.png?fit=max&w=600", 
name: "Murakami.Flower", link: "https://opensea.io/collection/murakami-flowers-2022-official"});
allNft.push({img: "https://img.seadn.io/files/dc21adc5cf72489bf0751755522923ce.png?fit=max&w=600",
name: "mfer", link: "https://opensea.io/collection/mfers"});
allNft.push({img: "https://img.seadn.io/files/d50caaf766024a838ae9bebc675ee246.png?fit=max&w=600",
name: "Cool Cat", link: "https://opensea.io/collection/cool-cats-nft"});
allNft.push({img: "https://img.seadn.io/files/4443456ba0fe15c156fca125062b98c5.png?fit=max&w=600",
name: "Decentraland", link: "https://opensea.io/collection/decentraland"});
allNft.push({img: "https://img.seadn.io/files/1dd4295315777825ad3fe9bf45592afd.png?fit=max&w=600",
name: "CyberKongz", link: "https://opensea.io/collection/cyberkongz"});
allNft.push({img: "https://lh3.googleusercontent.com/1BaKSBMAr05EDc_V7ZOmcV7W0vsMfMKjNdThJSZ_xGrDLc9SqN1Uti6x1eN-rNrqG-HJ7b-cC9NjSew7m9s7xQedMgT3SB4CgAd8lQ=w600",
name: "Invisible Friends", link: "https://opensea.io/collection/invisiblefriends"});
allNft.push({img: "https://img.seadn.io/files/4562a77e9f5894699219a0859a7f13fc.png?fit=max&w=600",
name: "Damien Hirst - The Currency", link: "https://opensea.io/collection/thecurrency"});
allNft.push({img: "https://img.seadn.io/files/7703735b09bcf463d098d2352a94c767.png?fit=max&w=600",
name: "VeeFriends", link: "https://opensea.io/collection/veefriends"});
allNft.push({img: "https://lh3.googleusercontent.com/4a03om7W7W5XfafNpCST8fQIJGoZfQ4wAjcdGYueW09qG4pkx-QjnNEI8ydKMNeX3GwrMVFTxgc90YA2plADTNMv0VliMZN1ihuBeQ=w600",
name: "sunmiya-club", link: "https://opensea.io/collection/sunmiya-club-official"});
allNft.push({img: "https://img.seadn.io/files/aa64e4a4620ded9b24046d70a534585b.png?fit=max&w=600",
name: "moonbirds", link: "https://opensea.io/collection/proof-moonbirds"});
allNft.push({img: "https://img.seadn.io/files/df513c4d04ae10d5dd1f5f940462a01e.png?fit=max&w=600",
name: "Yurei: The Lost Spirit", link: "https://opensea.io/collection/yureiofficial"});
allNft.push({img: "https://img.seadn.io/files/03037a2046cc62f0f295b3e38b991d44.png?fit=max&w=600",
name: "Bored Ape Yacht Club", link: "https://opensea.io/collection/boredapeyachtclub"});
allNft.push({img: "https://img.seadn.io/files/f803a12630f4014b00c0777cc167281b.png?fit=max&w=600",
name: "cool pets", link: "https://opensea.io/collection/coolpetsnft"});
				

//open toggle
function open(e){
    e.preventDefault();
    selectBox.classList.remove("hidden");
}

const toggleBtn = document.querySelector(".toggle_btn");
const selectBox = document.getElementById("selectbox_option_hidden");

toggleBtn.addEventListener("click", open);


//choose round
const option_btn4 = document.querySelector(".option_btn4");
const option_btn8 = document.querySelector(".option_btn8");
const option_btn16 = document.querySelector(".option_btn16");

const text4 = option_btn4.querySelector("span");
const text8 = option_btn8.querySelector("span");
const text16 = option_btn16.querySelector("span");


function Round4(){
    var value = option_btn4.value;
    localStorage.setItem("sel", value);
    text4.style.color = "rgb(0, 247, 255)";
}

function Round8(){
    var value = option_btn8.value;
    localStorage.setItem("sel", value);
    text8.style.color = "rgb(0, 247, 255)";
}

function Round16(){
    var value = option_btn16.value;
    localStorage.setItem("sel", value);
    text16.style.color = "rgb(0, 247, 255)";
}


//start game

function startGame() {
	document.getElementsByClassName('item')[0].style.display = 'block';
	document.getElementsByClassName('item')[1].style.display = 'block';
    document.getElementById('final').style.display = 'none';
    document.getElementById('cont_wrap').style.display = 'block';

    var sel = localStorage.getItem("sel");
    round = sel;
    count = 0;
    printNo = 1;
    gameArr = [];
    showArr = [];
    selectArr = [];
    for (var i = 0; i < allNft.length; i++) {
        gameArr.push(i);
    }
    play();
}


function play() {
    if (selectArr.length != round / 2) {
        showImage(count++);
        showImage(count++);
    } else {
        // alert('다음라운드진행');
        round /= 2;
        if (round == 1) {
            document.getElementsByClassName('item')[0].style.display = 'none';
            document.getElementsByClassName('item')[1].style.display = 'none';
            document.getElementById('round-info').innerHTML =
                'The Winner';
            document.getElementById('final').style.display = 'block';
            document.getElementById('final-img').src =
                allNft[selectArr[0]].img;
            document.getElementById('final-name').innerHTML =
                allNft[selectArr[0]].name;
            document.getElementById('final-link').innerHTML =
            allNft[selectArr[0]].name;
            return;
        }
        showArr = [];
        gameArr = selectArr;
        selectArr = [];
        count = 0;
        printNo = 1;
        play();
    }
}

function showImage(cnt) {
    while (true) {
        // Math.random() 0 포함 1포함아님!
        var ran = Math.floor(Math.random() * gameArr.length);
        var check = showArr.indexOf(gameArr[ran]);
        if (check == -1) {
            var img;
            var name;
            if (cnt % 2 == 0) {
                img = document.getElementById('left');
                name = document.getElementById('left-name');
            } else {
                if (round == 2) {
                    document.getElementById('round-info').innerHTML =
                        'Finals';
                } else {
                    document.getElementById('round-info').innerHTML =
                        round +
                        'round ' +
                        printNo++ +
                        '/' +
                        round / 2;
                }
                img = document.getElementById('right');
                name = document.getElementById('right-name');
            }
            showArr.push(gameArr[ran]);
            img.src = allNft[gameArr[ran]].img;
            img.value = gameArr[ran];
            name.innerHTML = allNft[gameArr[ran]].name;
            break;
        }
    }
}

function selectImg(obj) {
    selectArr.push(obj.value);
    play();
}