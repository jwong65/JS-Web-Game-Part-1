function newImage( w, y, z){
    let character = document.createElement('img')
    character.src = w
    character.style.position='fixed'
    character.style.left=( y+'px')
    character.style.bottom=(z+'px')
    document.body.append(character)
    return character
}

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
newImage('assets/green-character.gif', 100, 100);

// let tree =document.createElement('img')
// tree.src ='assets/pine-tree.png'
// tree.style.position='fixed'
// tree.style.left='450px'
// tree.style.bottom='200px'
// document.body.append(tree)

newImage('assets/pine-tree.png', 450, 200)

newImage('assets/tree.png', 200, 300)
