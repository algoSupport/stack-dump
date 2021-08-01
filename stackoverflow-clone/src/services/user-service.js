export async function fetchUserById(userId) {
    const usersByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`);
    return await usersByIdResponse.json();
}

export async function fetchQuestionsById(userId) {
    const questionsByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}/questions?order=desc&sort=votes&site=stackoverflow`);
    return await questionsByIdResponse.json();
}

export async function fetchTagsById(userId) {
    const tagsByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}/tags?order=desc&sort=popular&site=stackoverflow`);
    return await tagsByIdResponse.json();
}