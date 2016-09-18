<?php

/* @var $this yii\web\View */

$this->title = 'Game';
?>
<body>
<h1>Gomoku Jogo</h1>
    <link rel="stylesheet" href="index.css" charset="utf-8">
    <button id="start" type="button" name="button">Iniciar</button>

    <div class="sidebar">
      <h4 id="sidebar-title" >Jogador da vez</h4>
      <img id="player1" class="active" src="1.gif" />
      <img id="player2" src="2.gif" />
    </div>

    <div id="container" class="container">

    </div>

    <script src="index.js"></script>
</body>