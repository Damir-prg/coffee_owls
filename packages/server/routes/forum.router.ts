import express from 'express';
import { getTopics, createTopic, getTopicDetail } from '../controllers/topic.controller';
import { createComment, updateComment, deleteComment } from '../controllers/comment.controller';

export const forumRouter = express.Router();

forumRouter.get('/topics', getTopics);
forumRouter.post('/topics', createTopic);
forumRouter.get('/topics/:topicId', getTopicDetail);

forumRouter.post('/topics/:topicId/comments', createComment);
forumRouter.patch('/comments/:commentId', updateComment);
forumRouter.delete('/comments/:commentId', deleteComment);
