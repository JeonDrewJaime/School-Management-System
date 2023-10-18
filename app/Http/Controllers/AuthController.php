<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegAdminReq;
use App\Http\Requests\RegStudentReq;
use App\Models\Admin;
use App\Models\Student;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function fetchStudentData()
    {

        $data = Users::where('role', '=', 'student')->get();
        return response()->json($data);
    }

    public function register_student(RegStudentReq $request)
    {
        $data = $request->validated();
        /** @var Student $student */ //annonation so we can use the createToken
        $student = Student::create([

            //column name(db) =>  data sent by frontend
            'user_name' => $data['student_name'],
            'user_pass' => bcrypt($data['student_pass']),
            'role' => 'student'

        ]);
        $token = $student->createToken('main')->plainTextToken;
        return response(compact('student', 'token'));
    }

    //temporary method
    public function add_admin(RegAdminReq $request)
    {
        $data = $request->validated();
        /** @var Admin $admin */ //annonation so we can use the createToken
        $admin = Admin::create([

            //column name(db) =>  data sent by frontend
            'admin_name' => $data['admin_name'],
            'admin_pass' => bcrypt($data['admin_pass'])

        ]);
        $token = $admin->createToken('main')->plainTextToken;
        return response(compact('admin', 'token'));
    }
    public function user_login(Request $request)
    {
        //checking if the request exists in the models
        $userData = Users::where('id', '=', $request->user_id)->first();
        $role = "";

        if ($userData && $request->user_pass == $userData->password) { //Hash::check(request from the front end, exists in model)
            Auth::login($userData);
            /** @var Users $userData */ //annonation so we can use the createToken
            $userData = Auth::user();
            $token = $userData->createToken('main')->plainTextToken;
            if ($userData->role == 'admin') {

                $role = "admin";
            } else {
                $role = "student";
            }
            return response(compact('userData', 'token', 'role'));
        } else {
            return response([
                'message' => 'USER NOT FOUND'
            ], 422); //422 =  validation error code for react conditional statement
        }
    }

    public function studentPaymentSection(Request $request)
    {
    }

    //di pa naman implemented so comment out muna
    // public function student_logout(Request $request) {

    //     // /** @var User $student */
    //     // $student = $request->user();
    //     // $student->currentAccessToken()->delete();
    //     // return response('', 204);
    // }
}
