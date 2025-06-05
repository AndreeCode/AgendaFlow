@extends('layouts.app')


@section('title')
 | Home
@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/components/views/DashboardClientPage.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="DashboardClientPage"></div>
@endsection
    
