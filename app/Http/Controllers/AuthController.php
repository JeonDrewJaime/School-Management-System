<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegStudentReq;
use App\Http\Requests\StudLoginReq;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use Exception;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register_student(RegStudentReq $request)
    {
        $data = $request->validated();
        /** @var Student $student */ //annonation so we can use the createToken
        $student = Student::create([

            //column name(db) =>  data sent by frontend
            'student_name' => $data['student_name'],
            'student_pass' => bcrypt($data['student_pass'])

        ]);
        $token = $student->createToken('main')->plainTextToken;
        return response(compact('student', 'token'));
    }

    public function student_login(StudLoginReq $request)
    {
        try {

            $student = $request->validated();

            $student = Student::where('id', '=', $request->student_id)->first();
            if ($student && Hash::check($request->student_pass, $student->student_pass)) {
                Auth::login($student);
            }
            
            else {
                return response([
                    'message' => 'USER NOT FOUND'
                ], 422); //422 =  validation error code for react conditional statement
            }
        } catch (Exception $e) {

            $error = $e->__toString();
            var_dump('Error', $error);
        }

        /** @var Student $student */ //annonation so we can use the createToken
        $student = Auth::user();
        $token = $student->createToken('main')->plainTextToken;
        return response(compact('student', 'token'));
    }

    //di pa naman implemented so comment out muna
    // public function student_logout(Request $request) {

    //     // /** @var User $student */
    //     // $student = $request->user();
    //     // $student->currentAccessToken()->delete();
    //     // return response('', 204);
    // }
}
