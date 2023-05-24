<?php

namespace App\Http\Middleware;

use Closure;


// use Symfony\Component\HttpFoundation\Response;

class cors
{
    public function handle($request, Closure $next) {
   
        return $next($request)
          ->header('Access-Control-Allow-Origin', '*')
          ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
          ->header('Access-Control-Allow-Headers',' Origin, Content-Type, Accept, Authorization, X-Request-With')
          ->header('Access-Control-Allow-Credentials',' true');
    }
}
