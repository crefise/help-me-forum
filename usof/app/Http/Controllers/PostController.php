<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function createNewPost(Request $request)
    {
        try {
            $data = $request->all();
            $label = $data['label'];
            $text = $data['text'];
            $user_id = auth()->user()->getKey();

            $newPost = Post::create([
                'label' => $label,
                'text' => $text,
                'user_id' => $user_id
            ]);

            return response()->json([
                'status' => true,
                'description' => 'Post was created',
                'post' => $newPost
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }

    public function showAllPosts(Request $request)
    {
        try {
            $posts = Post::all();
            return response()->json([
                'status' => true,
                'description' => 'All okay!',
                'posts' => $posts
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }

    public function showCurrentPost(Request $request, $id)
    {

        try {
            $data = User::select([
                'users.id as user_id',
                'users.name as user_name',
                'posts.id as post_id',
                'posts.label',
                'posts.text',
                'posts.status',
                'posts.created_at'
            ])->join('posts', 'posts.user_id', '=', 'users.id')->where('posts.id', $id)->get()->first();

            return response()->json([
                'status' => true,
                'description' => 'All okay',
                'post' => $data
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }
    /*
    public function create(Request $request) {
        $data = $request->all();
        $label = $data['label'];
        $text = $data['text'];
        $author_id = auth()->user()->getKey();

        $categories = $data['categories'];

        $categories_array = explode(',', $categories);

        $post = Post::create([ 'label' => $label,
                        'text' => $text,
                        'user_id' => $author_id]);

    
        foreach ($categories_array as $key) {
            if ($key == "") {
                continue;
            } else {
                $category_id = Category::where('name', '=', $key)->get()[0]['id'];
                Category_entry::create([
                    'post_id' => $post['id'],
                    'category_id' => $category_id
                ]);
            }
        }

        return $post;
        
    }
    public function index(Request $request) {
        return Post::all();       
    }
    public function show(Request $request, $id) {
        return Post::find($id);
    }

    public function update(Request $request, $id) {
        $post = Post::find($id)->get();
        if ($post[0]['user_id'] == auth()->user()->getKey()) {
            $post = Post::find($id);
            $post->update($request->all());
            return $post;
        } else {
            return 'User is not owner';
        }
    }

    public function delete(Request $request, $id) {
        $post = Post::find($id)->get();
        if ($post[0]['user_id'] == auth()->user()->getKey()) {
            $post = Post::destroy($id);
            return $post;
        } else {
            return 'User is not owner';
        }
    }
    */
}
