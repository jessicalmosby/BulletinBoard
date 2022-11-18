const SUPABASE_URL = 'https://uuxnounuxbgphldtwpld.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1eG5vdW51eGJncGhsZHR3cGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjksImV4cCI6MTk4MzY4NDA2OX0.X0has-XP8I6mpbJtyM-bfmgJBZ7Iy0neL2xNIHEyxJc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    const response = await client.from('posts').select('*');
    return response.data;
}

export async function loadData() {
    await client.auth.loadData();
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signOut() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export async function createPost() {
    const response = await client.from('posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}
