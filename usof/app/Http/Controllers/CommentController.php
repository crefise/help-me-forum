<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{

    public function createNewComment(Request $request)
    {
        try {
            $data = $request->all();
            $text = $data['text'];
            $post_id = $data['post_id'];
            $user_id = auth()->user()->getKey();

            $comment = Comment::create([
                'text' => $text,
                'user_id' => $user_id,
                'post_id' => $post_id
            ]);

            return response()->json([
                'status' => true,
                'description' => 'Comment was created',
                'comment' => $comment
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }

    public function loadCurrentPostComments(Request $request) {
        try {
            $post_id = $request->only('post_id')['post_id'];
            $comments= Comment::where('post_id', $post_id)->get();
            return response()->json([
                'status' => true,
                'description' => 'All okay!',
                'comments' => $comments
            ]);

        } catch(\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }
    /*
     public function create_commment(Request $request, $id) {
        $data = $request->all();
        $text = $data['text'];
        $author_id = auth()->user()->getKey();

        $comment = Comment::create(['text' => $text,
                                    'author_id' => $author_id]);
                         
        Comments_entries::create(['comment_id' => $comment['id'],
                                'post_id' => $id]);
    }

    public function get_comments(Request $request, $id) {
        return Comments_entries::join('comments', 'Comments_entries.id', '=', 'comments.id')->where('post_id', '=', $id)->get();
    }
    */
}
