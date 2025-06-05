<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{env('APP_NAME')}} @yield('title')</title>

    @yield('libs')
</head>
<body>
    @yield('content')
</body>
</html>