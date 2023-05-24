<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FetchStudentController extends Controller
{
    //SEECT * FROM STUDENTS
    public function fetchStudent() {
        
        $students = DB::table('students')->select('id', 'student_name')->get();
        return response(compact('students'));
        
    }
}
