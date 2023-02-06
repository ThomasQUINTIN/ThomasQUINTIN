// https://api.github.com/repos/ThomasQUINTIN/portfolio/commits

function add_info(name, data ,type) {
    let div = '<div class="gitoption"><p> ' + name + data + ' <\p><\div>';

    if (type == 'commit') {
        if (data.length >= 10)
            div = '<div class="gitoption"><p> ' + name + '<span title=' + data + '>' + data.substr(0, 8) + '..</span>' + ' <\p><\div>';
        else
            div = '<div class="gitoption"><p> ' + name + data + ' <\p><\div>';
    }
    if (type == 'message') {
        if (data.length >= 20)
            div = '<div class="gitoption"><p> ' + name + '<span title=' + data + '>' + data.substr(0, 15) + '..</span>' + ' <\p><\div>';
        else
            div = '<div class="gitoption"><p> ' + name + data + ' <\p><\div>';
    }
    if (type == 'date') {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        div = '<div class="gitoption"><p> ' + name + data.substr(8, 2) + ' ' + months[data.substr(5, 2).charCodeAt(0) - 47] + ' ' + data.substr(0, 4) + '  ' + data.substr(11, 2) + ':' + data.substr(14, 2) + ' <\p><\div>';
    }
    if (type == 'image')
        div = '<div class="gitoptionimg"><img alt="'+ name +'" src="'+ data +'"/><\div>';
    if (type == 'link')
        div = '<div class="gitoption"><a href="' + data +'">' + name + '</a><\div>';
    document.getElementById('git').innerHTML += div;
}
function get_hash(jsondata) {
    add_info("avatar: ", jsondata['author']['avatar_url'], 'image');
    add_info("Autor: ", jsondata['author']['login']);
    add_info("Commit: ", jsondata['sha'], 'commit');
    add_info("Message: ", jsondata['commit']['message'], 'message');
    add_info("Date: ", jsondata['commit']['committer']['date'], 'date');
    add_info("Url Repositorie ", 'https://github.com/ThomasQUINTIN/portfolio', 'link');
    console.log('Last commit: ', jsondata['sha']);
    console.log('Date: ', jsondata['commit']['committer']['date']);
    console.log('message: ', jsondata['commit']['message']);
    console.log('Autor: ', jsondata['author']['login']);
    console.log('avatar: ', jsondata['author']['avatar_url']);
}

fetch('https://api.github.com/repos/ThomasQUINTIN/portfolio/commits')
    .then(res => res.json())
    .then((out) => {
        get_hash(out[0]);
}).catch(err => console.error(err));