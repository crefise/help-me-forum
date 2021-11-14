@include('common.headers.default-headers', array('title' => 'Welcome'))


<body>
    
@include('common.headers.sitecap')


    <div id="react-app"></div>


    <script src="{{ asset('js/pages/welcome.js') }}" defer></script>
    <link rel='stylesheet' href="{{ asset('css/main.css') }}">
</body>
</html>