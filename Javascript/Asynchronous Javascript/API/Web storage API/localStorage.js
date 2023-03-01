/*Local storage is a web storage object which are not sent to server with each request.
If we restart the browser, refresh the your page your data will not go anywhere it will be safe in your local storage.

Methods:
1) setItem(key, value) => set the value.
2) getItem(key) => get value by key.
3) removeItem(key) => remove the key with value.
4) clear() => delete everything.
5) key(index) => get the key on given position.
6) length => the number of stored items. */

localStorage.setItem("name", "Robert")

let key = prompt("Enter the key you want");
let value = prompt("Enter the value you want");

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == 'red' || key == 'blue'){
    localStorage.removeItem(key);
}

console.log(localStorage.length);

console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));

if(key == 0){
    localStorage.clear();
}


