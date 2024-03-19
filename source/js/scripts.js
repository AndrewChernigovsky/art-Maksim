const navBurger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navCart = document.querySelector('.nav__cart');

navBurger.addEventListener('click', () => {
  navCart.classList.toggle('nav__cart--unvisible');
  navList.classList.toggle('nav__list--visible');
});

// Логика фильтров стран

const list = document.querySelector('.reproduction__countries'),
  items = document.querySelectorAll('.reproduction__list'),
  listItems = document.querySelectorAll('.reproduction__name-country')

function filter() {
  list.addEventListener('click', e => {
    const targetId = e.target.dataset.id
    const target = e.target



    if (target.classList.contains('reproduction__name-country')) {
      listItems.forEach(listItem => listItem.classList.remove('reproduction__name-country--active'))
      target.classList.add('reproduction__name-country--active')
    }

    switch(targetId) {
      case 'France':
        getItems(targetId)
        break;
      case 'Germany':
        getItems(targetId)
        break;
      case 'England':
        getItems(targetId)
        break;
    }
  })
}
filter();

function getItems(className) {
  items.forEach(item => {
    if(item.classList.contains(className)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}
