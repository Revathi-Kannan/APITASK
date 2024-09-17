const apiUrl = 'https://emojihub.yurace.pro/api/all';
const emojiContainer = document.getElementById('emojiContainer');
const loadEmojiBtn = document.getElementById('loadEmojiBtn');

async function fetchEmoji() {
    try {
        const response = await fetch(apiUrl);
        const emojiData = await response.json();

        // Clear the container before adding new emojis
        emojiContainer.innerHTML = '';

        // Loop through the array of emojis in the response
        emojiData.forEach(emojiItemData => {
            // Create a new emoji element
            const emojiItem = document.createElement('div');
            emojiItem.className = 'emoji-item';
            
            // Set the innerHTML with the first htmlCode entry to display the emoji
            emojiItem.innerHTML = emojiItemData.htmlCode[0];

            // Append to container
            emojiContainer.appendChild(emojiItem);
        });
    } catch (error) {
        console.error('Error fetching the emoji:', error);
    }
}

loadEmojiBtn.addEventListener('click', fetchEmoji);
