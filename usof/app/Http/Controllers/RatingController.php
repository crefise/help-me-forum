<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;

class RatingController extends Controller
{

    public function updateRating(Request $request, $id)
    {
        try {


            $user_id = auth()->user()->getKey();
            $data_id = $id;
            $belong = $request->only(['belong'])['belong'];
            $type =  $request->only(['type'])['type'];
            $createFor = "";
            $untype = "";

            if ($type == 'like') {
                $untype = 'dislike';
            } else {
                $untype = 'like';
            }


            if ($belong === 'post') {
                $createFor = 'post_id';
            } else if ($belong === 'comment') {
                $createFor = 'comment_id';
            } else {
                return response()->json([
                    'status' => false,
                    'description' => 'Bad "belong"'
                ]);
            }

            $checkExistInverse = Rating::where([
                ['user_id', '=', $user_id],
                [$createFor, '=', $data_id],
                ['belong', '=', $belong],
                ['type', '=', $untype]
            ]);

            if ($checkExistInverse->first()) {
                $checkExistInverse->delete();
            }


            $entryExist = Rating::where([
                ['user_id', '=', $user_id],
                [$createFor, '=', $data_id],
                ['belong', '=', $belong],
                ['type', '=', $type]
            ]);

            if ($entryExist->first()) {
                $entryExist->delete();

                return response()->json([
                    'status' => true,
                    'description' => 'Your Rating was deleted',
                    'type' => 'remove'
                ]);
            } else {
                Rating::create([
                    'user_id' => $user_id,
                    $createFor => $data_id,
                    'belong' => $belong,
                    'type' => $type
                ]);


                return response()->json([
                    'status' => true,
                    'description' => 'Rating was created',
                    'type' => 'create'
                ]);
            }
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }


    public function getCalculatedPostRating($id)
    {
        try {

            $rating = 0;

            $Likes = sizeof(Rating::where([
                ['post_id', '=', $id],
                ['type', '=', 'like']
            ])->get());

            $Dislikes = sizeof(Rating::where([
                ['post_id', '=', $id],
                ['type', '=', 'dislike']
            ])->get());

            $rating = $Likes - $Dislikes;

            return response()->json([
                'status' => true,
                'description' => 'Rating was calculated',
                'rating' => $rating
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }
    /*

        public function create(Request $request, $id) {
        $user_id = auth()->user()->getKey();
        $post_id = $id;
        $type = $request->only(['type'])['type'];
        return Like::create(['user_id' => $user_id,
                            'post_id' => $post_id,
                            'type' => $type]);
    }

    public function get_likes(Request $request, $id) {
        return Like::where("post_id", '=', $id)->get();
    }

    public function delete(Request $request, $id) {
        $user_id = auth()->user()->getKey();
        $like = Like::where('post_id', '=', $id)->where('user_id', '=', $user_id)->get();
        
        for ($i=0; $i < count($like); $i++) { 
            Like::destroy($like[$i]['id']);
        }
    }

    */
}
