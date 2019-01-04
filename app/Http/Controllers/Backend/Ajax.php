<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Chat;

class Ajax extends Controller
{
    //
	public function OpenChat(Request $request)
	{
		if ($request->chatName && $request->chatCode)
		{
			$Chatcode = md5($request->chatName . $request->chatCode);
			$currentChat = Chat::where('code', $Chatcode)->first();
			if ($currentChat)
			{
				return $Chatcode;
			}
			else
			{
				return 'not exist';
			}
		}
		else
		{
			return 'false';
		}
	}
	
	public function newChat(Request $request)
	{
		if ($request->chatName && $request->chatCode)
		{
			$Chatcode = md5($request->chatName . $request->chatCode);
			
			$currentChat = Chat::where('code', $Chatcode)->first();
			
			if (!$currentChat)
			{
				$chat = new Chat();
				$chat->code = $Chatcode;
				$chat->messages = serialize(Array());
				$chat->save();
				return $Chatcode;
			}
			else
			{
				return 'current exist';
			}
		}
		else
		{
			return 'false';
		}
	}
}
