<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImagesController extends Controller
{
    public function index()
    {
        dd('im here');
    }

    public function store(Request $request)
    {
        dd($request->all());
    }
}
