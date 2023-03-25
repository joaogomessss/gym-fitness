



// check if browser supports notifications
if ("Notification" in window) {
    // request permission to show notifications
    Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
        console.log(permission);
    // create notification on button click
    var button = document.getElementById("notification-button");
    button.addEventListener("click", function() {
    var notification = new Notification("Hello, World!" , { body:"canguru"    });
    console.log(notification);
    
    });
    }
    });
}