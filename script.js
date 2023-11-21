let fieldPlayer = document.getElementById('fieldPlayer')
let fieldEnemy = document.getElementById('fieldEnemy')
let size = 10
let fieldPlayerArray = [[]]
let fieldEnemyArray = [[]]

window.addEventListener('load', ()=>{
    createFieldPlayer(size)
    createFieldEnemy(size)
})

function createFieldPlayer(size) {
    let topTempParam = 0
    let topParam = topTempParam + 'px'
    let leftTempParam = 0
    let leftParam = leftTempParam + 'px'
    for (let i = 1; i <= size*size; i++) {
        fieldPlayerArray.push([])
        fieldPlayerArray[i][0] = i
        fieldPlayerArray.push([])
        fieldPlayerArray[i][1] = document.createElement('div')
        fieldPlayerArray[i][1].style.width = '50px'
        fieldPlayerArray[i][1].style.height = '50px'
        fieldPlayerArray[i][1].style.backgroundColor = 'white';
        fieldPlayerArray[i][1].style.position = 'absolute'
        fieldPlayerArray[i][1].style.marginLeft = leftParam
        fieldPlayerArray[i][1].style.marginTop = topParam
        fieldPlayerArray[i][1].textContent = fieldPlayerArray[i][0]
        fieldPlayer.prepend(fieldPlayerArray[i][1])
        leftTempParam += 50
        leftParam = leftTempParam + 'px'
        if (Number.isInteger(i/size)){
            leftTempParam = 0
            leftParam = leftTempParam + 'px'
            topTempParam += 50
            topParam = topTempParam + 'px'
        }
    }
}

function createFieldEnemy(size) {
    let topTempParam = 0
    let topParam = topTempParam + 'px'
    let leftTempParam = 0
    let leftParam = leftTempParam + 'px'
    for (let i = 1; i <= size*size; i++) {
        fieldEnemyArray.push([])
        fieldEnemyArray[i][0] = i
        fieldEnemyArray.push([])
        fieldEnemyArray[i][1] = document.createElement('div')
        fieldEnemyArray[i][1].style.width = '50px'
        fieldEnemyArray[i][1].style.height = '50px'
        fieldEnemyArray[i][1].style.backgroundColor = 'white';
        fieldEnemyArray[i][1].style.position = 'absolute'
        fieldEnemyArray[i][1].style.marginLeft = leftParam
        fieldEnemyArray[i][1].style.marginTop = topParam
        fieldEnemyArray[i][1].textContent = fieldEnemyArray[i][0]
        fieldEnemy.prepend(fieldEnemyArray[i][1])
        leftTempParam += 50
        leftParam = leftTempParam + 'px'
        if (Number.isInteger(i/size)){
            leftTempParam = 0
            leftParam = leftTempParam + 'px'
            topTempParam += 50
            topParam = topTempParam + 'px'
        }
    }
}