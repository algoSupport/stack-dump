export async function fetchUserById(userId) {
    try {
        const usersByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`);
        if (usersByIdResponse.status >= 400 && usersByIdResponse.status < 600) {
            throw new Error("Bad response from server");
        }
        return await usersByIdResponse.json();
    }
    catch (err) {
        throw err;
    }
}

export async function fetchQuestionsById(userId) {
    try {
        const questionsByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}/questions?order=desc&sort=votes&site=stackoverflow`);
        if (questionsByIdResponse.status >= 400 && questionsByIdResponse.status < 600) {
            throw new Error("Bad response from server");
        }
        return await questionsByIdResponse.json();
    }
    catch (err) {
        throw err;
    }
}

export async function fetchTagsById(userId) {
    try {
        const tagsByIdResponse = await fetch(`https://api.stackexchange.com/2.3/users/${userId}/tags?order=desc&sort=popular&site=stackoverflow`);
        if (tagsByIdResponse.status >= 400 && tagsByIdResponse.status < 600) {
            throw new Error("Bad response from server");
        }
        return await tagsByIdResponse.json();
    }
    catch (err) {
        throw err;
    }
}