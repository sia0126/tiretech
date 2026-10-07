// more버튼을 누르면 sns내용이 더 보임
document.querySelector('.moreBtn').addEventListener('click',function(){
  document.querySelector('.itemWrap2').style.display = 'block';
  document.querySelector('.more').style.display = 'none';
})

const popup = document.querySelector('#popup');
const checkbox = document.querySelector('#popup input[type="checkbox"]');
const closeBtn = document.querySelector('.popup_close');

const today = new Date().toDateString();

if (localStorage.getItem('popupDate') !== today) {
  popup.style.display = 'flex';
} else {
  popup.style.display = 'none';
}

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (checkbox.checked) {
    localStorage.setItem('popupDate', today);
  }

  popup.style.display = 'none';
});