@extends('layouts.app')


@section('title')
 | Logout
@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/components/views/Auth/RegisterPage.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="RegisterPage"></div>
@endsection
    

    
