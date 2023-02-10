<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\course;


class courseController extends Controller
{
    public function store(Request $request)
    {
        $course = new course;
        $course->Course_Name = $request->input('Course_Name');
        $course->Course_Type = $request->input('Course_Type');
        $course->Time = $request->input('Time');
        $course->Professor = $request->input('Professor');
        $course->save();

        return response()->json([
            'status', 200, 'message'=>'Course added'
        ]);

    }
    public function display(){
        $users = course::all();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }

    public function cdelete(Request $request){
        $user = course::where('id', $request->id)->delete();
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



    public function updatecourse(Request $request){
        $user = course::where('id', $request->id)->first();
        $user->Course_Name = $request->Course_Name;
        $user->Course_Type = $request->Course_Type;
        $user->Time = $request->Time;
        $user->Professor = $request->Professor;
        $user->save();

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }
}
