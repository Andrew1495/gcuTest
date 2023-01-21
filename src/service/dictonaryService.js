const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

// fetch request that returns false if search fails

export async function getDictionaryResults(word) {
    const response = await fetch(baseURL + word);
    if (!response.ok) {
        console.log('Error fetching api request', response.ok)
        return false
    }
    const data = await response.json()
        return data
}