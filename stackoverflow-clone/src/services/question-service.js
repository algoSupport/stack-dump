export async function fetchQuestions() {
    try {
        const response = await fetch('https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow');
        if (response.status >= 400 && response.status < 600) {
            throw new Error("Bad response from server");
        }
        return await response.json();
    }
    catch (err) {
        console.log("An error occurred inside question-service:", err.toString());
        throw err;
    }
}