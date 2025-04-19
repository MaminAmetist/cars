// Сортируем карточки
const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

// Получаем поля формы
const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

// Функция проверки номера телефона
function isValidPhone(phone) {
  return phone.length >= 10;
}

// Обработчик кнопки
document.getElementById('order-action').addEventListener('click', function () {
  // Собираем поля в массив
  const fields = [carField, nameField, phoneField];
  let hasError = true;

  // Проверяем поля
  fields.forEach((field) => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      hasError = true;
    } else {
      field.style.borderColor = 'white';
    }
  });

  // Проверяем номер телефона
  if (!isValidPhone(phoneField.value)) {
    phoneField.style.borderColor = 'red';
    hasError = true;
  }

  // Если ок
  if (!hasError) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами.');

    // Очищаем поля
    fields.forEach((field) => (field.value = ''));
  }
});
