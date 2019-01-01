<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Main extends Controller
{
    //
	public function Show()
	{
		return view('main', Array('id' => 'is main', 'chatId' => ''));
	}
}
