//Функция для проверки длины строки
const setLength = (str, maxLength) => str.length <= maxLength;
setLength('проверяемая строка', 20);

//Функция для проверки, является ли строка палиндромом
const setPalindrom = (str) => {
  if(!str?.trim().length) {
    return false;
  }
  const normalizedString = str.replaceAll(' ', '').toUpperCase();
  let reverseString = ('');
  for (let i = (normalizedString.length - 1); i >= 0; i--) {
    reverseString = reverseString + normalizedString[i];
  }
  return normalizedString === reverseString;
};
setPalindrom('топот');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const setNumbers = (str) => {
  if (typeof str === 'number'){
    return str;
  }

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str.at(i), 10))) {
      result += str.at(i);
    }
  }
  return parseInt(result,10);
};
setNumbers('2023 год');

