<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render('Products');
    }

    public function store(Request $request){

        return Inertia::render('Products',[
            'category' => $request->input('category'),
            'query' => $request->input('query')
        ]);
    }
}
