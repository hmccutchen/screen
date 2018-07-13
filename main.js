
// totalUsers = 0;
// totalPosts = 0;
// Users = {}
// Posts = {}

// function createUser(name, email) {

//   totalUsers += 1;
//   propertyName = 'user' + totalUsers;

//   Users[totalUsers] = {
//     name: name,
//     email: email,
//     id: totalUsers,
//     posts: [],
//     createPost: function(title, content) {
//       totalPosts += 1;
//       propertyName = 'post' + totalPosts;

//       Posts[totalPosts] = {
//         title: title,
//         content: content,
//         id: totalPosts
//       }
//       this.posts.push(Posts[totalPosts]);
//     }
//   }

// }

// class Player {
//   constructor(name, health){

//         this.name = name;
//         this.health = health;


//   }


// }


// class Dude extends Player {
//   constructor(name){
//     super()
//    this.name = name;
//   }
// }

class Fighter {
  constructor(){
    this.speed = 20;
      }

}

class Bjj extends Fighter{
  constructor(name){
    super();
    this.name = name;
    this.speed += 30;
  }
  screen(fighter){
    for(x in fighter){
      var x = document.getElementById('fight-name');
      var y = document.getElementById('fight-speed');
      x.innerHTML = `Name: ${this.name}`
      y.innerHTML =`speed: ${this.speed}`;
    }
  }
}


class MuyThai extends Fighter {
  constructor(name){
    super();
    this.name = name;
    this.speed += 50;
  }
}


class Wrestler extends Fighter{
  constructor(name){
    super()
    this.name = name;
      this.speed += 60;
  }
}




// for(name in Fighter){
// var x = document.getElementById("fight-name");

// x.innerHTML = new Fighter(this.name);

// }
















