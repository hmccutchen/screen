
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
  constructor(name){
    this.name = name;
    this.speed = 20;
      }

}

class Bjj extends Fighter{
  constructor(name){
    super(name);
    // this.name = name;
    this.speed += 30;
    screenUpdate(this);
  }
}


class MuyThai extends Fighter {
  constructor(name){
    super(name);
    // this.name = name;
    this.speed += 50;
    screenUpdate(this);
  }

}


class Wrestler extends Fighter{
  constructor(name){
    super(name)
    // this.name = name;
      this.speed += 60;
    screenUpdate(this);
  }

}




function screenUpdate(fighter){
  var x = document.createElement("h1");
  var y = document.createElement("p");

  var a = document.createTextNode(fighter.name);
  var b = document.createTextNode(fighter.speed);
x.appendChild(a);
y.appendChild(b);

  var c = document.getElementById("characters");

  c.appendChild(x);
  c.appendChild(y);

}









