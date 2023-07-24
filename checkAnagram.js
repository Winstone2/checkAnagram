function areAnagrams(str1, str2) {
    // Convert both strings to lowercase to make the comparison case-insensitive
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Create character frequency maps for both strings
    const charFrequency1 = getCharacterFrequency(str1);
    const charFrequency2 = getCharacterFrequency(str2);

    // Compare the character frequency maps to check if they are anagrams
    return compareFrequencyMaps(charFrequency1, charFrequency2);
}

function getCharacterFrequency(str) {
    const charFrequency = new Map();
    for (let char of str) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    return charFrequency;
}

function compareFrequencyMaps(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (let [key, value] of map1) {
        if (value !== map2.get(key)) {
            return false;
        }
    }

    return true;
}
const str1 = "Listen";
const str2 = "Silent";

const result = areAnagrams(str1, str2);
console.log(result); // Output: true (Listen and Silent are anagrams)
