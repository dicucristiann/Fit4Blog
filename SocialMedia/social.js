//Side bar
const menuItems = document.querySelectorAll('.menu-item');


//remove avtive class from all menu items


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');

    })
}
menuItems.forEach(item => {
    changeActiveItem();
    item.classList.add('active');
    if(item.id != "notifications"){
        document.querySelector(".notifications-popup").style.display ='none';
    } else{
        document.querySelector('.notification-popup').style.display ='block';
        document.querySelector('#notifications .notification-count').style.display = 'none';

    }
})
