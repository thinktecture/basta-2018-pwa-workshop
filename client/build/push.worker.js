self.addEventListener('push', function (event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    console.log(event.data);
    console.log(event.data.json());

    const data = event.data.json().notification;
    if (data) {
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
        });
    }
});
