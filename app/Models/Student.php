<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Spatie\FlareClient\Concerns\HasContext;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{
    use HasFactory, HasApiTokens, HasContext;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'users';
    protected $pk = 'id';
    protected $fillable = [
        
        'first_name',
        'last_name',
        'password',
        'user_course',
        'user_year_level',
        'user_section',
        'user_term',
        'user_email_address',
        'user_contact_number',
        'user_age',
        'birth_date',
        'user_religion',
        'fathers_name',
        'mothers_name',
        'guardians_name',
        'payment_type',
        'mode_of_payment',
        'display_image'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
    ];
}
