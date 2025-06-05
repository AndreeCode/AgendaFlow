@extends('layouts.app')


@section('title')

@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/components/views/Principal.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="Principal"></div>
@endsection
    
