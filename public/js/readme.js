fetch('https://api.github.com/repos/mrtrvl/Curriculum-Visualizer/readme', {
    headers: new Headers({
        'Accept': 'application/vnd.github.VERSION.html'
    })
})
.then(response => response.text())
.then(data => {
    document.getElementById('readmeContainer').innerHTML = data;
});
