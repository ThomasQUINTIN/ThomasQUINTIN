// https://api.github.com/repos/ThomasQUINTIN/portfolio/commits

function date_compare(day,month,year,hour,minutes) {
    let nowdate = new Date();
    let nowmonth = nowdate.getMonth() + 1;
    let nowday = nowdate.getDate();
    let nowhours = nowdate.getHours();
    let nowminutes = nowdate.getMinutes();

    if ((nowmonth - month) == 0) {
        if ((nowday - day) == 0) {

        } else if ((nowday - day) == 1) {
            return 'yesterday';
        } else {
            if (( nowday - day) < 7 )
                return (nowday - day ) + ' day ago';
            return Math.floor((nowday - day) / 7) + ' week ago';
        }
    }
    return nowday + '/' + nowmonth + '/' + nowhours + ':' + nowminutes;
}

function date_parsing(data) {
    let day = data.substr(8, 2);
    let month = data.substr(5, 2);
    let year = data.substr(0, 4);
    let hours = data.substr(11, 2);
    let minutes = data.substr(14, 2);

    let date = '<div class="gitoption"><p> ' + "Date: " + date_compare(day,month,year,hours,minutes) + ' <\p><\div>';
    return date;
}

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
    if (type == 'date')
        div = date_parsing(data);
    if (type == 'image')
        div = '<div class="gitoptionimg"><img alt="'+ name +'" src="'+ data +'"/><\div>';
    if (type == 'link')
        div = '<a href="' + data +'" target="_blank"><div class="gitoption">' + name + '<\div></a>';
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