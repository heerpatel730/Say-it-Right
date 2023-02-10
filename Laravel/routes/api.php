<?php
use App\Http\Controllers\API\registrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\courseController;

Route::post('/regi', [registrationController::class,'store']);
Route::post('/login', [registrationController::class,'login']);
Route::post('/delete', [registrationController::class,'delete']);
Route::post('/update', [registrationController::class,'update']);
Route::post('/recording', [registrationController::class,'recording']);
Route::post('/user', [registrationController::class,'user']);
Route::post('/userprofessor', [registrationController::class,'userprofessor']);
Route::post('/userstudent', [registrationController::class,'userstudent']);
Route::post('/store', [courseController::class,'store']);
Route::post('/display', [courseController::class,'display']);
Route::post('/cdelete', [courseController::class,'cdelete']);
Route::post('/updatecourse', [courseController::class,'updatecourse']);
Route::post('/uploadimage', [registrationController::class,'uploadimage']);
Route::post('/count', [registrationController::class,'count']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
