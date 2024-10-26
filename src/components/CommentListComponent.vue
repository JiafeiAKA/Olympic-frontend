<template>

    <div>
        <ul class="comment-list bg-gray-100 p-4">
            <li v-for="comment in comments" :key="comment.commentId" class="bg-white p-4 rounded-lg shadow mb-4">
                <div class="flex justify-between items-center">
                    <div class="text-gray-800 font-semibold">{{ comment.username }}</div>
                    <div class="text-gray-600">{{ comment.commentText }}</div>
                </div>
            </li>
        </ul>
        <textarea v-model="newComment" placeholder="เขียนความคิดเห็นที่นี่..." rows="4" class="w-full mt-4"></textarea>

        <button @click="submitComment" class="mt-2 bg-blue-500 text-white rounded px-4 py-2 float-right">
            ส่งความคิดเห็น
        </button>
    </div>

</template>

<script setup lang="ts">
import { apiClient } from '@/services/ApiService';
import { loginRespone, userIdKey, usernameKey } from '@/services/AuthenticationService';
import { CommentResponse, getCommentByCountryCode, postComment } from '@/services/CommentService';
import { onMounted, ref } from 'vue';


const newComment = ref<string>(''); // State to hold the new comment

const comments = ref<CommentResponse[]>([]);

const fetchComments = async () => {
    try {
        const response = await getCommentByCountryCode('USA');
        comments.value = response;
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
};

const submitComment = async () => {
    if (newComment.value.trim() === '') return; // Avoid submitting empty comments
    try {

        const now = new Date();
        const createdAt = now.toISOString().slice(0, 19);
        /**
         *
         *  comment: string,
  countryCode: string,
  createdAt: string,
  userId: number,
  username: string
         *   */


        const userId = parseInt(localStorage.getItem(userIdKey) ?? '0', 10);
        const username = localStorage.getItem(usernameKey)
        //TODO Country Id
        await postComment(newComment.value, 'USA', createdAt, userId ?? 0, username ?? 'Unkown');
        newComment.value = ''; // Clear textarea after submitting
        await fetchComments(); // Refresh the comment list
    } catch (error) {
        console.error('Error submitting comment:', error);
    }
};


onMounted(() => {
    fetchComments();
});

</script>

<style scoped></style>