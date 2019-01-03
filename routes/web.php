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
Route::get('/new-chat', 'Frontend\NewChat@show');

//Route::get('/{chatId}/', 'Frontend\Chat@show');

Route::post('/open-chat', 'Backend\Ajax@OpenChat');
Route::post('/new-chat', 'Backend\Ajax@NewChat');
