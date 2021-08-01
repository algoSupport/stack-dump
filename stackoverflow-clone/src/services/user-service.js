export async function fetchUserById(userId) {
    const usersByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`);
    return await usersByIdResponse.json();
}