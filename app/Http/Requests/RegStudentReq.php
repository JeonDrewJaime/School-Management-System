<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegStudentReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'student_name' => 'required|string|max:60',
            'student_pass' => 'required',   
        ];
    }
}
