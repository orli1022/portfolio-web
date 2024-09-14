let form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("my-form-status");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                status.style.opacity = "1";
                status.innerHTML = "感謝您的來信！我會盡快與您聯繫！";
                form.reset();
                setTimeout(() => {
                    status.style.opacity = "0";
                    status.innerHTML = "";
                }, 3000); // 只顯示三秒
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map(error => error["message"])
                            .join(", ");
                    } else {
                        status.innerHTML =
                            "訊息發送失敗！請檢查您的網路連線，稍後再試一次。";
                    }
                    setTimeout(() => {
                        status.style.opacity = "0";
                        status.innerHTML = "";
                    }, 3000);
                });
            }
        })
        .catch(error => {
            status.innerHTML =
                "訊息發送失敗！請檢查您的網路連線，稍後再試一次。";
            setTimeout(() => {
                status.style.opacity = "0";
                status.innerHTML = "";
            }, 3000);
        });
}
form.addEventListener("submit", handleSubmit);
