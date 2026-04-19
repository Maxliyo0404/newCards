let container = document.getElementById("containerId");
let searchInput = document.getElementById("input");

let datas =[

  { "id": 1, "ism": "Ali", "familiya": "Vaxobov", "yosh": 24, "shahar": "Toshkent", "email": "ali@example.com" },
  { "id": 2, "ism": "Madina", "familiya": "Sodiqova", "yosh": 21, "shahar": "Samarqand", "email": "madina@example.com" },
  { "id": 3, "ism": "Javohir", "familiya": "Umarov", "yosh": 30, "shahar": "Buxoro", "email": "javohir@example.com" },
  { "id": 4, "ism": "Laylo", "familiya": "Karimova", "yosh": 27, "shahar": "Namangan", "email": "laylo@example.com" },
  { "id": 5, "ism": "Sardor", "familiya": "Aliyev", "yosh": 29, "shahar": "Andijon", "email": "sardor@example.com" },
  { "id": 6, "ism": "Guli", "familiya": "Nasimova", "yosh": 23, "shahar": "Farg'ona", "email": "guli@example.com" },
  { "id": 7, "ism": "Otabek", "familiya": "Xasanov", "yosh": 32, "shahar": "Xiva", "email": "otabek@example.com" },
  { "id": 8, "ism": "Zilola", "familiya": "Rustamova", "yosh": 25, "shahar": "Navoiy", "email": "zilola@example.com" },
  { "id": 9, "ism": "Doston", "familiya": "Qodirov", "yosh": 28, "shahar": "Jizzax", "email": "doston@example.com" },
  { "id": 10, "ism": "Nigora", "familiya": "Tursunova", "yosh": 22, "shahar": "Qarshi", "email": "nigora@example.com" },
  { "id": 11, "ism": "Bobur", "familiya": "Mansurov", "yosh": 35, "shahar": "Termiz", "email": "bobur@example.com" },
  { "id": 12, "ism": "Malika", "familiya": "Egamberdiyeva", "yosh": 26, "shahar": "Guliston", "email": "malika@example.com" },
  { "id": 13, "ism": "Sanjar", "familiya": "Ismoilov", "yosh": 31, "shahar": "Nukus", "email": "sanjar@example.com" },
  { "id": 14, "ism": "Shaxlo", "familiya": "Azizova", "yosh": 24, "shahar": "Angren", "email": "shaxlo@example.com" },
  { "id": 15, "ism": "Farrux", "familiya": "Toirov", "yosh": 27, "shahar": "Olmaliq", "email": "farrux@example.com" },
  { "id": 16, "ism": "Kamola", "familiya": "Yusupova", "yosh": 20, "shahar": "Chirchiq", "email": "kamola@example.com" },
  { "id": 17, "ism": "Murod", "familiya": "Sultonov", "yosh": 33, "shahar": "Marg'ilon", "email": "murod@example.com" },
  { "id": 18, "ism": "Mohira", "familiya": "Axmedova", "yosh": 29, "shahar": "Qo'qon", "email": "mohira@example.com" },
  { "id": 19, "ism": "Bekzod", "familiya": "Zokirov", "yosh": 26, "shahar": "Bekobod", "email": "bekzod@example.com" },
  { "id": 20, "ism": "Sevara", "familiya": "G'ofurova", "yosh": 23, "shahar": "Zarafshon", "email": "sevara@example.com" }

]
 function renderUser(data){
   let malumot = datas.map(data => `
       <div class="cards" keys = {el.id}>
               <img src="https://picsum.photos/200/300?random=${item.id} " alt="rasm">
               <h2>${data.ism}</h2>
               <p>${data.familiya}</p>
               <a href="#">${data.email}</a>
      </div>
    `)
 }