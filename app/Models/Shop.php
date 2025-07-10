<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Shop extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'status',
        'image',
        'user_id',
        'shop_type_id',
        'city_id',
    ];
}
