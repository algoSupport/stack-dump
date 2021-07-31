export async function fetchQuestions() {
    const response = await fetch('https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow');
    return await response.json();
}