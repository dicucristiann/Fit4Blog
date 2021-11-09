//Side bar
const menuItems = document.querySelectorAll('.menu-item');

//=Msg
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector ('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 =document.querySelector('.bg-1');
const Bg2 =document.querySelector('.bg-2');
const Bg3 =document.querySelector('.bg-3');

//==========SIDEBAR==============
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');
            if (item.id != 'notifications') {
                document.querySelector('.notifications-popup').style.display = 'none';
            } else {
                document.querySelector('.notifications-popup').style.display = 'block';
                document.querySelector('#notifications .notification-count').style.display = 'none';
            }

        })
    })
    //============MESSAGES===============
    //search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
           chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}


//serch chat
messageSearch.addEventListener('keyup', searchMessage);




//highlight box-shadow
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


//==========Theme-Custom=========
//open.mod
const openThemeModal =() =>{
    themeModal.style.display = 'grid';
}
//close.mod 
const closeThemeModal =  (e) =>{
if(e.target.classList.contains('customize-theme')){
    themeModal.style.display ='none';
}
}



//close.mod  
themeModal.addEventListener('click' , closeThemeModal)

theme.addEventListener('click', openThemeModal);


//Font-size
// remove active class from font-size selector
const removeSizeSelector = () =>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    

 size.addEventListener('click',()=>{
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
        fontSize ='10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if(size.classList.contains('font-size-2')){
        fontSize ='13px';
         root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize ='16px';
         root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize ='19px';
         root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize ='22px';
         root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-33rem');
    }
    //change the font size of the html element
document.querySelector('html').style.fontSize =fontSize;
    })


})
//remove active class from colors
const changeActiveColorClass =() => {
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}


//change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 229;
           
        }else if(color.classList.contains('color-2')){
            primaryHue = 56;
        }else if(color.classList.contains('color-3')){
            primaryHue = 204;
        }else if(color.classList.contains('color-4')){
            primaryHue = 337;
        }else if(color.classList.contains('color-5')){
            primaryHue = 120;
        }
         color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// Theme Background val
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//change back.-color
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}
 Bg1.addEventListener('click', () =>{
     
     Bg1.classList.add('active');
     Bg2.classList.remove('active');
     Bg3.classList.remove('active');
     window.location.reload();
 })

 Bg2.addEventListener('click', () =>{
     darkColorLightness ='95%';
     whiteColorLightness='20%';
     lightColorLightness ='15%';
     Bg2.classList.add('active');
     Bg1.classList.remove('active');
     Bg3.classList.remove('active');
     changeBG();
 })
 Bg3.addEventListener('click', ()=> {
     darkColorLightness ='95%';
     whiteColorLightness='10%';
     lightColorLightness ='0%';
      Bg3.classList.add('active');
     Bg1.classList.remove('active');
     Bg2.classList.remove('active');
     changeBG();
 })
//----------end-----------