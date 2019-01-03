<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewChat extends Controller
{
    //
	public function Show()
	{
		return view('new', Array());
	}
}
