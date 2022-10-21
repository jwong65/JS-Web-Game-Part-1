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
    return character
}

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
newImage('assets/green-character.gif', '100px', '100px');

// let tree =document.createElement('img')
// tree.src ='assets/pine-tree.png'
// tree.style.position='fixed'
// tree.style.left='450px'
// tree.style.bottom='200px'
// document.body.append(tree)

newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')