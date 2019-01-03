<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <title>Laravel</title>
		<link href="{{mix('css/app.css')}}?{{ time() }}" rel="stylesheet" type="text/css">
    </head>
    <body>
		<div id="content"></div>
		<script> 
			var csrf_token = '<?php echo csrf_token(); ?>'; 
		</script>
		<script src="{{mix('js/app.js')}}?{{ time() }}" ></script>
    </body>
</html>
