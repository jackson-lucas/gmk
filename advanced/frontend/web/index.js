var container = document.getElementById('container')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var startButton = document.getElementById('start')
var sidebarTitle = document.getElementById('sidebar-title')

var gameEnded = false
var turn = 1
var matrix = []

startButton.addEventListener('click', start)

function switchPlayer () {
  if (turn==1) {
    player1.className = 'active'
    player2.className = ''
  } else {
    player1.className = ''
    player2.className = 'active'
  }
}

function onClickImage (event) {
  var element = event.target

  if (element.src.endsWith('0.gif') && !gameEnded) {
    element.src = turn == 1 ? '1.gif' : '2.gif'
    matrix[element.coordinates[0]][element.coordinates[1]] = turn

    if ((allLeft(element.coordinates[0], element.coordinates[1], turn)
    + allRight(element.coordinates[0], element.coordinates[1], turn)
    >= 4)
    || (allUp(element.coordinates[0], element.coordinates[1], turn)
    + allDown(element.coordinates[0], element.coordinates[1], turn)
    >= 4)
    || (allUpLeft(element.coordinates[0], element.coordinates[1], turn)
    + allDownRight(element.coordinates[0], element.coordinates[1], turn)
    >= 4)
    || (allDownLeft(element.coordinates[0], element.coordinates[1], turn)
    + allUpRight(element.coordinates[0], element.coordinates[1], turn)
    >= 4)
  ){
    end(turn)
    return
  }

    turn = turn == 1 ? 2 : 1
    switchPlayer()
  }
}

function image (x, y)  {
  var img = document.createElement('img')
  img.src = '0.gif'
  img.coordinates = [x, y]
  img.addEventListener('click', onClickImage)
  container.appendChild(img)
}

function getSquare (coordinates) {
  var squares = container.children

  var index;

  for (index=0; index < squares.length; index++) {
    if (
      squares[index].nodeName == 'IMG'
      && squares[index].coordinates[0] == coordinates[0]
      && squares[index].coordinates[1] == coordinates[1]
    ) {
      return squares[index]
    }
  }

  return undefined
}

function allLeft (x, y, player) {
  var index, counter;
  for (index=y-1, counter = 0; index >= 0 && counter < 4; index--, counter++) {
    if (player != matrix[x][index]) {
      return counter
    }
  }
  return counter
}

function allRight (x, y, player) {
  var index, counter;
  for (index=y+1, counter = 0; index < matrix[x].length && counter < 4; index++, counter++) {
    if (player != matrix[x][index]) {
      return counter
    }
  }
  return counter
}

function allUp (x, y, player) {
  var index, counter;
  for (index=x-1, counter = 0; index >= 0 && counter < 4; index--, counter++) {
    if (player != matrix[index][y]) {
      return counter
    }
  }
  return counter
}

function allDown (x, y, player) {
  var index, counter;
  for (index=x+1, counter = 0; index < matrix[y].length && counter < 4; index++, counter++) {
    if (player != matrix[index][y]) {
      return counter
    }
  }
  return counter
}

function allDownLeft (x, y, player) {
  var index, counter;
  for (
    index=x+1, index2=y-1, counter = 0;
    index < matrix[y].length && index2 >= 0 && counter < 4;
    index++, index2--, counter++
  ) {
    if (player != matrix[index][index2]) {
      return counter
    }
  }
  return counter
}

function allDownRight (x, y, player) {
  var index, counter;
  for (
    index=x+1, index2=y+1, counter = 0;
    index < matrix[y].length && index2 < matrix[x].length && counter < 4;
    index++, index2++, counter++
  ) {
    if (player != matrix[index][index2]) {
      return counter
    }
  }
  return counter
}

function allUpLeft (x, y, player) {
  var index, counter;
  for (
    index=x-1, index2=y-1, counter = 0;
    index >= 0 && index2 >= 0 && counter < 4;
    index--, index2--, counter++
  ) {
    if (player != matrix[index][index2]) {
      return counter
    }
  }
  return counter
}

function allUpRight (x, y, player) {
  var index, counter;
  for (
    index=x-1, index2=y+1, counter = 0;
    index >= 0 && index2 < matrix[x].length && counter < 4;
    index--, index2++, counter++
  ) {
    if (player != matrix[index][index2]) {
      return counter
    }
  }
  return counter
}

function start () {
  matrix = []
  gameEnded = false
  container.innerHTML = ''

  turn = 1
  switchPlayer()

  var index, index2;
  for (index=0; index < 15; index++) {
    var row = [];
    for (index2=0; index2 < 15; index2++) {
      image(index, index2)
      row.push(0)
    }
    matrix.push(row)
    container.appendChild(document.createElement('br'))
  }
}

function end(player) {
  gameEnded = true
  sidebarTitle.innerHTML = 'Vencedor'

  if (player == 1) {
    player2.className = 'hide'
  } else {
    player1.className = 'hide'
  }
}

start()
// end(1)

