<!DOCTYPE html>
<html lang="en">

@include('common.headers.default-headers', array('title' => 'Login'))

@include('common.headers.sitecap')

<body>
    <div id="react-app"></div>
    <script src="{{ asset('js/pages/login.js') }}" defer></script>
    <link rel='stylesheet' href="{{ asset('css/loginPage.css') }}">
    <link rel='stylesheet' href="{{ asset('css/main.css') }}">
</body>
</html>