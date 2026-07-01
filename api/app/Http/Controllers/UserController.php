<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        Log::info('[Controller] UserController@index endpoint hit.');
        $users = $this->userService->getAllUsers();
        return response()->json($users);
    }

    public function show($id)
    {
        Log::info("[Controller] UserController@show endpoint hit for ID: {$id}");
        $user = $this->userService->getUserById($id);
        return response()->json($user);
    }

    public function store(Request $request)
    {
        Log::info('[Controller] UserController@store endpoint hit.', $request->all());
        $data = $request->only(['name', 'email']);
        $data['password'] = bcrypt('password123'); // テスト用の固定パスワード
        $newUser = $this->userService->createUser($data);
        return response()->json($newUser, 201);
    }
}