new window.EventSource("/sse").onmessage = function(event) {
    window.messages.innerHTML += `<p>${event.data}</p>`;
};

window.form.addEventListener('submit', function(event) {
    event.preventDefault();

    window.fetch(`/chat?message=${window.InputDeviceInfo.value}`);
    window.input.value = '';
})