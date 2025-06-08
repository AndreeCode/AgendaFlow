<?php

namespace Database\Seeders\Users;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user=User::create([
            "name"=>"ejemplo1",
            "email"=>"ejemplo1@ejemplo.com",
            'password'=>Hash::make("123456789")
        ]);
        $user->assignRole('admin');
        $user=User::create([
            "name"=>"ejemplo2",
            "email"=>"ejemplo2@ejemplo.com",
            'password'=>Hash::make("123456789")
        ]);
        $user->assignRole('employee');
        $user=User::create([
            "name"=>"ejemplo3",
            "email"=>"ejemplo3@ejemplo.com",
            'password'=>Hash::make("123456789")
        ]);
        $user->assignRole('client');
    }
}
