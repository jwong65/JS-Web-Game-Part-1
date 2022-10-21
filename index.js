function newImage(w, x, y, z){
    let x = document.createElement('img')
    x.src = w
    x.style.position='fixed'
    x.style.left=(y)
    x.style.bottom=(z)
    document.body.append(x)

}

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
newImage('assets/green-character.gif', 'greenCharacter', '100px', '200px')

let tree =document.createElement('img')
tree.src ='assets/pine-tree.png'
// tree.style.position='fixed'
// tree.style.left='450px'
// tree.style.bottom='200px'
// document.body.append(tree)

newImage(tree, 450, 200)