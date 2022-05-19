function replace() {
    let searchText = document.getElementById('searchText').value;
    let replaceText = document.getElementById('replaceText').value;
    let text = document.getElementById('text').innerHTML;
    let newText = document.getElementById('text');
    let regex = new RegExp(searchText, 'gi');
    text = text.replace(regex, replaceText);
    newText.innerHTML = text;
}