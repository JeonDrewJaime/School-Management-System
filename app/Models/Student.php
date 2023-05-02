<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Student extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    /** @var array<int, string  */
    protected $table = 'students';
    protected $pk = 'id';
    protected $fillable = [
      'student_name',
      'student_pass'  
    ];

    /** @var array<int, string  */
    protected $hidden = [
      'student_pass',
      'remember_token'  
    ];
    
    /** @var array<string, string  */
    protected $casts = [
        'created_at' => 'datetime', 
      ];
}
