// احصل على العناصر التي سنقوم بالتلاعب بها
const mainElement = document.querySelector('main');
const changeColorButton = document.createElement('button');
changeColorButton.textContent = 'تغيير لون الخلفية';

// قم بإضافة طريقة لتغيير لون الخلفية عند النقر على الزر
changeColorButton.addEventListener('click', () => {
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#f2ff33', '#33f2ff','#000000','#eee'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainElement.style.backgroundColor = randomColor;
});

// أضف الزر إلى الصفحة
document.body.appendChild(changeColorButton);
