function newImage( w, y, z){
    let character = document.createElement('img')
    character.src = w
    character.style.position='fixed'
    //character.style.left=(y+'px') can also be used
    //character.style.bottom=(z+'px') 
    //I chose to use this method of allowing the entire string instead of concatenating it
    character.style.left=( y)
    character.style.bottom=(z)
    document.body.append(character)
    return;
}

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })
function newItem(linksrc, y, z){
    let item = document.createElement('img')
    item.src = linksrc
    item.style.position = 'fixed'
    item.style.left = y+'px'
    item.style.bottom = z+'px'
    // Can also use with item.style.left = y or y+'px' if you have the number.
    // item.style.bottom = z
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
    return;
}
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

//window.innerWidth - 
// //window.innerHeight - for the size of the screen.
// console.log(window.innerWidth)
// // console.log(window.innerHeight)
// function addBackground(x, y, z, height,width,){
//     for (let i=0; i< width; i++)
//     {{
//         for (let u=0; u<height; u++)
//         newImage(x, (y+ width*100), (z+height*100))
//     }
// }
// }
// addBackground('assets/grass.png', 0, 0, window.innerHeight, window.innerWidth)