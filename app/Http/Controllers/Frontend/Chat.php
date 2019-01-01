<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Chat extends Controller
{
    //
	public function Show($chatId)
	{
		return view('main', Array('id' => 'is chat', 'chatId' => $chatId));
	}
}
