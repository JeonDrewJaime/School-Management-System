<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegAdminReq;
use App\Http\Requests\RegStudentReq;
use App\Models\Admin;
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

    //temporary method
    public function add_admin(Request $request)
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
        try {

            //validate the request from the react
            $validateCredentials = $request->validate([

                'user_id' => 'required',
                'user_pass' => 'required',

            ]);

            $user = array(

                'user_id' => $request->get('user_id'),
                'user_pass' => $request->get('user_pass')

            );
            //checking if the request exists in the models
            $student = Student::where('id', '=', $request->user_id)->first();
            $admin = Admin::where('id', '=', $request->user_id)->first();
            //student exists
            $role = "";

            if ($student && Hash::check($request->user_pass, $student->student_pass)) { //Hash::check(request from the front end, exists in model)
                Auth::login($student);
                $role = "student";
                /** @var Student $student */ //annonation so we can use the createToken
                $student = Auth::user();
                $token = $student->createToken('main')->plainTextToken;
                return response(compact('student', 'token', 'role'));
            } else if ($admin && Hash::check($request->user_pass, $admin->admin_pass)) { //admin exists
                Auth::login($admin);
                $role = "admin";
                /** @var Admin $admin */ //annonation so we can use the createToken
                $admin = Auth::user();
                $token = $admin->createToken('main')->plainTextToken;
                return response(compact('admin', 'token', 'role'));
            } else {
                return response([
                    'message' => 'USER NOT FOUND!'
                ], 422); //422 =  validation error code for react conditional statement
            }
        } catch (Exception $e) {

            $error = $e->__toString();
            var_dump('Error', $error);
        }

    }

    //di pa naman implemented so comment out muna
    // public function student_logout(Request $request) {

    //     // /** @var User $student */
    //     // $student = $request->user();
    //     // $student->currentAccessToken()->delete();
    //     // return response('', 204);
    // }
}