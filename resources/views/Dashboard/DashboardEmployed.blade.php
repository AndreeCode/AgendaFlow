@extends('layouts.app')


@section('title')
 | Home
@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/components/views/DashboardEmployedPage.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="DashboardEmployedPage"></div>
@endsection
    
