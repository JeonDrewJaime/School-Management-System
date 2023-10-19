<?php

use App\Http\Controllers\AuthenticationController;
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

Route::prefix('sti')->as('sti')->controller(AuthenticationController::class)->group(function () {

    Route::get('/students','fetchStudentData');

    Route::post('/login', 'user_login');
    Route::post('/regAdmin', 'add_admin');
    Route::post('/register', 'register_student');
    Route::post('/paymentSection', 'studentPaymentSection');
    Route::post('/logout', 'logoutUser');

});