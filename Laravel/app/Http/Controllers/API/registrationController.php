<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\registration;
use Illuminate\Support\Facades\Hash;

class registrationController extends Controller
{
    public function store(Request $request)
    {
        echo 'hi';
        $registration = new registration;
        $registration->First_Name = $request->input('First_Name');
        $registration->Last_Name = $request->input('Last_Name');
        $registration->email = $request->input('email');
        $registration->reg_role = $request->input('reg_role');
        $registration->reg_add = $request->input('reg_add');
        $registration->pincode = $request->input('pincode');
        $registration->phoneno = $request->input('phoneno');
        $registration->fpassword = Hash::make($request->input('fpassword'));
        $registration->gender = $request->input('gender');
        //$registration->url = $request->input('url');
        $registration->save();

        return response()->json([
            'status'=> 200,
            'message' =>'registred',
        ]);
    }
    public function user(){
        $users = registration::all();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }

    public function userprofessor(){
        $users = registration::where('reg_role', 'professor') -> get();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }


    public function userstudent(){
        $users = registration::where('reg_role', 'student') -> get();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }



    public function login(Request $request){
        $user = registration::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->fpassword, $user->fpassword)){
            return ["error"=>"Email or password is not correct"];
        }

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function delete(Request $request){
        $user = registration::where('id', $request->id)->delete();
        echo $user;
        if($user){
            return response()->json([
                'status'=>200,
                'result'=>"User has been deleted"
            ]);
        }else{
            return ["result"=>"Operation failed"];
        }
    }
    

    public function update(Request $request){
        $user = registration::where('email', $request->email)->first();
        $user->First_Name = $request->First_Name;
        $user->Last_Name = $request->Last_Name;
        $user->email = $request->email;
        $user->gender = $request->gender;
        $user->reg_role = $request->reg_role;
        $user->save();

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function recording(Request $request){
        $user = registration::where('email', $request->email)->first();
        // $mediaurl =  "sayitright1112.s3.amazonaws.com/"+. $user->url;
        $data = "https://sayitright1112.s3.amazonaws.com/". $request->url;
        $user->url=$data;
        $user->save();

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function uploadimage(Request $request){
        $user = registration::where('email', $request->email)->first();
        // $mediaurl =  "sayitright1112.s3.amazonaws.com/"+. $user->url;
        $data = "https://sayitright1112.s3.amazonaws.com/". $request->image;
        $user->image=$data;
        $user->save();

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }


    public function count(Request $request)
    {
        $roles = registration::all()->count();
        return response()->json([
            'status'=>200,
            'users'=>$roles
        ]);
    }





}
