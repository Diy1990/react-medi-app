<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    //
    public function index(){
        $patients = Patient::all();
        return $patients;
    }  
    
    
    public function store(Request $request){
        $patient = Patient::create($request->all());
        return response()->json($patient,201);
    }

    public function update(Request $request, string $id){

        $patient = Patient::findOrFail($id);
        $patient->update($request->all());
        return response ()->json($patient,200);

    }

    public function updateStatus(Request $request, $id){
        
        $patient = Patient::findOrFail($id);
        $newStatus = $request->input('Inactive');



    }

    
}

