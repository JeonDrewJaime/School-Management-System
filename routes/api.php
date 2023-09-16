<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FetchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// custom middleware
Route::middleware('auth:sanctum')->get('/student', function (Request $request) {
    return $request->user();
});

Route::post('/login',[AuthController::class, 'user_login']);
Route::post('/regAdmin', [AuthController:: class, 'add_admin']);
Route::post('/register',[AuthController::class, 'register_student']);
Route::get('/students',[FetchController::class, 'fetchStudentData']);