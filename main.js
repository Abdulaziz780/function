let text1 = prompt('Birinchi sonni kiriting:')
let text2 = prompt('Ikkinchi sonni kiriting:')

function showAlertWithMaxValue(text1, text2) {
    if(text1 > text2) {
        alert(`Eng kotta son:${text1}`)
    }

    if (text1 < text2) {
        alert(`Eng kotta son:${text2}`)
    }
    var maxValue = Math.max(text1, text2);
    alert("Наибольшее значение: " + maxValue);
  }
//   showAlertWithMaxValue(10, 20);
//   showAlertWithMaxValue(-5, 3);  
//   showAlertWithMaxValue(8, 8); 