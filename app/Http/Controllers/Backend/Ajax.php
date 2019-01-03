<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Ajax extends Controller
{
    //
	public function Show(Request $request)
	{
		return json_encode($request->all());
	}
}
