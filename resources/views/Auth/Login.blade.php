@extends('layouts.app')


@section('title')
 | Login
@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/components/views/Auth/LoginPage.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="LoginPage"></div>
@endsection
    

    
