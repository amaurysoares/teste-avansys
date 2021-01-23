<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', 'Api\AuthController@register');

Route::post('/login', 'Api\AuthController@login');

Route::post('/logout', 'Api\AuthController@logout');

Route::apiResource('operators', 'Api\CreditCardOperatorController')->middleware('auth:api');;