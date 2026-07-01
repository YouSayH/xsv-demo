<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserService
{
    public function getAllUsers()
    {
        Log::info('[Service] UserService@getAllUsers cluster chain triggered.');
        return User::all();
    }

    public function getUserById($id)
    {
        Log::info("[Service] UserService@getUserById chain triggered for ID: {$id}");
        return User::find($id);
    }

    public function createUser(array $data)
    {
        Log::info('[Service] UserService@createUser chain triggered.', $data);
        return User::create($data);
    }
}