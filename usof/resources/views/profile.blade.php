<html>
@include('common.headers.default-headers', array('title' => 'Profile'))

<body>
    @include('common.headers.sitecap')
    <div id="profile"></div>
    <link rel='stylesheet' href="{{ asset('css/main.css') }}">
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>