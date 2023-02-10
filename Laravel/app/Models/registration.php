<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class registration extends Model
{
    use HasFactory;
    protected $table = 'registration';
    protected $fillable =[
        'First_Name',
        'Last_Name',
        'email',
        'reg_role',
        'pincode',
        'reg_add',
        'fpassword',
        'gender',
        'phoneno',
        'url',
        'image',
    ];
}
