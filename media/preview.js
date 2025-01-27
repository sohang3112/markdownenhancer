console.log("MarkdownEnhancer: preview.js loaded");

function randomNDigits(digits) {
    const base = 10 ** (digits-1);
    return Math.floor((1 + Math.random()) * base);
}

window.addEventListener('load', () => {
    // Find all checkboxes with [-] syntax and set them to indeterminate
    console.log('MarkdownEnhancer: preview.js: window loaded');
    for (let elem of document.querySelectorAll('li:not(.task-list-item)')) {
        console.log(elem);
        // TODO: didn't trim before checking startswith - spaces should already be handled by markdown preview (check this)
        // NOTE: textContent is more performant than innerText (because it doesn't check for eg. hidden elements), that's why it's used
        // Source: https://stackoverflow.com/a/35213639/12947681
        if (elem.textContent.startsWith('[-]')) {
            const cid = `task-item-${randomNDigits(7)}`;        // checkbox id
            const elemHtml = elem.innerHTML.slice(3);              // remove "[-]" from start
            elem.innerHTML = `<input class="task-list-item-checkbox indeterminate" type="checkbox" id="${cid}"> 
                              <label class="task-list-item-label" for="${cid}">${elemHtml}</label>`;
            let checkbox = document.getElementById(cid);
            checkbox.indeterminate = true;

            elem.classList.add('task-list-item', 'enabled');       // remove list bullet that's present for non-checkbox list items
            elem.parentElement.classList.add('contains-task-list');
        }
    }
});
