<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Frontend\Main@show');
Route::post('/open-chat', 'Backend\Ajax@show');
//Route::get('/{chatId}/', 'Frontend\Chat@show');
