function autoGeneratedIDClick() {
    data = {
        method: 'countUp',
        component: 'ButtonCounter',
        count: props.autoGeneratedPropIDForCount,
    }

    serverUpdate(data, (resp) => {
        $('#autoGeneratedID').html(resp.html);
        props.autoGeneratedPropIDForCount = resp.autoGeneratedPropIDForCount;
    });
}

function serverUpdate(data, cb) {
    $.post('NeUIUpdate', JSON.stringify(data)).done(cb);
}

let props = {
    autoGeneratedPropIDForCount: 0,
}