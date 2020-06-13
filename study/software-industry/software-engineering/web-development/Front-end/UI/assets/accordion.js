const accordians = document.querySelectorAll(".accordian");

for (let i = 0; i < accordians.length; i++) {
    accordians[i].onclick = function () {
        let content = this.nextElementSibling;
        // content.style.maxHeight = !content.style.maxHeight;
        if (content.style.maxHeight) {
            // accordian is open, need to close it.
            content.style.maxHeight = null;
        }
        else {
            // accordian is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}