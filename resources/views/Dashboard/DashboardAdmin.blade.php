@extends('layouts.app')


@section('title')
 | Home
@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/components/views/DashboardAdminPage.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="DashboardAdminPage"></div>
@endsection
    
