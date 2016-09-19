<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "fila".
 *
 * @property integer $id
 * @property integer $user_id
 *
 * @property User $id0
 */
class Fila extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'fila';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id'], 'required'],
            [['user_id'], 'integer'],
            [['id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getId0()
    {
        return $this->hasOne(User::className(), ['id' => 'id']);
    }

    /**
     * @inheritdoc
     * @return FilaQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new FilaQuery(get_called_class());
    }
}
