<?php

Route::get('/', function () {
	$posts = App\Post::latest('published_at')->get();

    return view('welcome', compact('posts'));
});

Route::get('admin', function(){
	return view('admin.home');
});

Route::get('posts', function(){
	return App\Post::all();
});

Route::get('/home', 'HomeController@index');
