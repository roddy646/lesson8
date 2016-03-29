 window.onload = function() {
     var inputText = document.getElementById('text');
     var button = document.getElementById('button');
     var container = document.querySelector('.container');
     var popup = document.getElementById('popup');
     var body = document.body;
     var a = 0;
     var popupSpan = document.querySelector('.popupSpan')
     var inputText2 = document.getElementById('text2');

     inputText.focus();
     inputText.selectionStart = inputText.value.length;

     if (button) {
         button.addEventListener('click', event1);
     }

     function event1() {

         if (inputText.value) {
             a = a + 1;
             var spanElement = document.createElement('span');
             var newElement = document.createElement('div');
             newElement.className = 'newDiv';
             spanElement.innerHTML = 'x';
             newElement.innerHTML = a + '. ' + inputText.value;
             newElement.appendChild(spanElement);
             container.appendChild(newElement);
             //inputText.value = '';
             inputText.focus();
             inputText.selectionStart = inputText.value.length;

         } else {
             alert('enter text');
         }
         if (spanElement) {
             spanElement.addEventListener('click', event2);
         }

         function event2() {
             container.removeChild(newElement);
         }


         if (newElement) {
             newElement.addEventListener('click', eventPopup);

         }

         function eventPopup() {
             popup.style.visibility = "visible";
             body.style.background = "#6E6E6E";
             inputText.style.background = "#6E6E6E";
             inputText2.value = inputText.value;
             inputText2.focus();
             inputText2.selectionStart = inputText2.value.length;

         }
     }
     if (popupSpan) {
         popupSpan.addEventListener('click', eventSpan);
     }

     function eventSpan() {
         popup.style.visibility = "hidden";
         body.style.background = "none";
         inputText.style.background = "none";
     }

 }
