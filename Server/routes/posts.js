import express from 'express';
import { getPostsBySearch,getPost,getPosts,createPost,updatePost,deletePost,likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const  router = express.Router();


router.get('/search',getPostsBySearch);
router.get('/',getPosts);
router.get('/:id', getPost);

router.post('/',auth,createPost);
//to update post
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);


export default router