/* 
   Consegna:
   Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
   * Per i multipli di 3 stampi “Fizz” al posto del numero
   * Per i multipli di 5 stampi “Buzz”.
   * Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 
   BONUS 1:
   Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
   BONUS 2:
   Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

/* Creo gli elementi della DOM */
const bodyElement = document.querySelector('body');
const containerElement = document.createElement('div');
const ulElement = document.createElement('ul');
const titleElement = document.createElement('h1')

/* Aggiungo gli elementi alla DOM */
bodyElement.append(titleElement);
titleElement.append('FizzBuzz');
bodyElement.append(containerElement);
containerElement.append(ulElement);

/* Stilizzo gli elementi della DOM */
titleElement.classList.add('text-light');
titleElement.classList.add('text-center');
titleElement.classList.add('my_fs_1');

containerElement.classList.add('container');
bodyElement.classList.add('bg-dark')
ulElement.classList.add('d-flex');
ulElement.classList.add('flex-wrap');
ulElement.classList.add('list-unstyled');

/* 
    Creo dei list Item con all'interno dei valori secondo le seguenti regole:
        * Per i multipli di 3 stampi “Fizz” al posto del numero
        * Per i multipli di 5 stampi “Buzz”.
        * Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
        * Altrimenti stampo il numero.
*/
for (let i = 1; i <= 100; i++) {

    /* Creo il List Item */
    const liElement = document.createElement('li');
    ulElement.append(liElement);

    liElement.classList.add('d-flex');
    liElement.classList.add('justify-content-center');
    liElement.classList.add('align-items-center');
    liElement.classList.add('m-3');
    liElement.classList.add('w-90');
    liElement.classList.add('aspect-ratio');

    /* Eseguo il controllo secondo il quale stampero i vari risultati */
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
        liElement.append("FizzBuzz")
        liElement.classList.add('bg-success');
    } else if ((i % 3) === 0) {
        console.log("Fizz");
        liElement.append("Fizz")
        liElement.classList.add('bg-warning');
    } else if ((i % 5) === 0) {
        console.log("Buzz");
        liElement.append("Buzz")
        liElement.classList.add('bg-danger');
    } else {
        console.log(i);
        liElement.append(i);
        liElement.classList.add('bg-primary');
    }
}