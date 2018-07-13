
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
  constructor(name, power, speed, mental){
    this.name = name;
    this.power = power;
    this.speed = speed;
    this.mental = mental;
  }
}

class Bjj extends Fighter{
  constructor(name, attribute){
    super()
    this.name = name;
    this.attribute = 40;

  }
}






























