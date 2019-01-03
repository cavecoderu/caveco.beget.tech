<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Ajax extends Controller
{
    //
	public function OpenChat(Request $request)
	{
		return json_encode($request->all());
	}
	
	public function newChat(Request $request)
	{
		return json_encode($request->all());
	}
}
