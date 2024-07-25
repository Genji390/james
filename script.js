document.getElementById('sendBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const botToken = '7444795439:AAEFkiauRttHobHEfJnS2n8wWJtieDOYiYM';
        const chatId = '6233708690'; // Your chat ID
        const text = `Name: ${name}\nMessage: ${message}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Message sent successfully!');
                } else {
                    alert('Failed to send message.');
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
    } else {
        alert('Please fill in both fields.');
    }
});
