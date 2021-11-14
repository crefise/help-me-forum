<div class="sitecap">
    <div class="main-sitecap">
        <a href="/">
            <div class="logo element">Help Me</div>
        </a>
        <a href="/posts">
            <div class="element">Posts</div>
        </a>
        @admin
        <a href="/users">
            <div class="element">Users</div>
        </a>
        @endadmin
        @authJwt
        <a href="/login">
            <div class="element">Sign in</div>
        </a>
        <a href="/registration">
            <div class="element">Sign up</div>
        </a>
        @else
        <a href="/profile">
            <div class="element">Profile</div>
        </a>
        <a href="/logout">
            <div class="element">Logout</div>
        </a>
        @endauthJwt
    </div>
</div>