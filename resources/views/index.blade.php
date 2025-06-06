@extends('layouts.app')


@section('title')

@endsection


@section('libs')
    @viteReactRefresh
    @vite(['resources/js/routes/index.tsx','resources/css/app.css'])
@endsection


@section('content')
    <div id="App"></div>
@endsection
    
