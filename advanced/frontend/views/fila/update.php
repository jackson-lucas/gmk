<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Fila */

$this->title = 'Update Fila: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Filas', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="fila-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
