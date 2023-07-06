var mixedMode = {
    name: "htmlmixed",
    scriptTypes: [{
            matches: /\/x-handlebars-template|\/x-mustache/i,
            mode: null
                },
        {
            matches: /(text|application)\/(x-)?vb(a|script)/i,
            mode: "vbscript"
                }
            ]
};

var editor = CodeMirror.fromTextArea(document.getElementById("textHTMLResult"), {
    mode: mixedMode,
    selectionPointer: true,
    lineNumbers: true
});

var editorCss = CodeMirror.fromTextArea(document.getElementById("textCssResult"), {
    mode: "css",
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    lineNumbers: true
});

var editorJS = CodeMirror.fromTextArea(document.getElementById("textJSResult"), {
    mode: "javascript",
    lineNumbers: true,
    matchBrackets: true,
    continueComments: "Enter",
    extraKeys: {
        "Ctrl-Q": "toggleComment"
    }
});

editor.on('blur', function () {
    $(".CodeMirror-cursors").css('visibility', 'visible');
});

function IframeCompile() {
    var text = "<!doctype html><html><head><link href='bootstrap3.3.6/css/bootstrap.min.css' rel='stylesheet'><style>" + editorCss.getValue() + "</style></head><body>" + editor.getValue() + "<script src='jquery/jquery-2.1.4.min.js'></script><script src='bootstrap3.3.6/js/bootstrap.min.js'></script><script>" + editorJS.getValue() + "</script></body></html>";
    var ifr = document.createElement("iframe");
    ifr.setAttribute("id", "iframeResult");
    if ($("#selectView").val() <= 4) {
        ifr.setAttribute("style", "height: 330px;");
    } else {
        ifr.setAttribute("style", "height: 665px;");
    }
    document.getElementById("divIframeResult").innerHTML = "";
    document.getElementById("divIframeResult").appendChild(ifr);
    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);
    ifrw.document.close();
};

function ClearTextarea() {
    editor.setValue("");
    editorCss.setValue("");
    editorJS.setValue("");
};

function ClearHTML(){
    editor.setValue("");
}

function ClearCSS(){
    editorCss.setValue("");
}

function ClearJS(){
    editorJS.setValue("");
}

function ConfigureView() {
    var type = $("#selectView").val();
    switch (type) {
        case "1":
            $(".CodeMirror,#iframeResult").css("height", "330px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").addClass("col-md-6");
            break;
        case "2":
            $(".CodeMirror,#iframeResult").css("height", "330px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divTextResult,#divCssResult").addClass("col-md-6");
            $("#divIframeResult").addClass("col-md-12");
            $("#divJSResult").addClass("hidden-md hidden-lg");
            break;
        case "3":
            $(".CodeMirror,#iframeResult").css("height", "330px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divTextResult,#divJSResult").addClass("col-md-6");
            $("#divIframeResult").addClass("col-md-12");
            $("#divCssResult").addClass("hidden-md hidden-lg");
            break;
        case "4":
            $(".CodeMirror,#iframeResult").css("height", "330px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divCssResult,#divJSResult").addClass("col-md-6");
            $("#divIframeResult").addClass("col-md-12");
            $("#divTextResult").addClass("hidden-md hidden-lg");
            break;
        case "5":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divTextResult,#divIframeResult").addClass("col-md-6");
            $("#divCssResult,#divJSResult").addClass("hidden-md hidden-lg");
            break;
        case "6":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divCssResult,#divIframeResult").addClass("col-md-6");
            $("#divTextResult,#divJSResult").addClass("hidden-md hidden-lg");
            break;
        case "7":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divJSResult,#divIframeResult").addClass("col-md-6");
            $("#divCssResult,#divTextResult").addClass("hidden-md hidden-lg");
            break;
        case "8":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divTextResult").addClass("col-md-12");
            $("#divCssResult,#divJSResult,#divIframeResult").addClass("hidden-md hidden-lg");
            break;
        case "9":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divCssResult").addClass("col-md-12");
            $("#divTextResult,#divJSResult,#divIframeResult").addClass("hidden-md hidden-lg");
            break;
        case "10":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divJSResult").addClass("col-md-12");
            $("#divCssResult,#divTextResult,#divIframeResult").addClass("hidden-md hidden-lg");
            break;
        case "11":
            $(".CodeMirror,#iframeResult").css("height", "665px");
            $("#divTextResult,#divCssResult,#divJSResult,#divIframeResult").removeClass("col-md-6 col-md-12 hidden-md hidden-lg");
            $("#divIframeResult").addClass("col-md-12");
            $("#divCssResult,#divJSResult,#divTextResult").addClass("hidden-md hidden-lg");
            break;
    };
};

function AddElement(element) {
    editor.replaceRange(element, CodeMirror.Pos(editor.getCursor().line, editor.getCursor().ch));
    editor.autoFormatRange({
        line: 0,
        ch: 0
    }, {
        line: editor.lineCount()
    });
};

function AddStyle(element) {
    var text = editorCss.getValue();
    text = text.replace(/[\n ]/g, '');
    if (text.indexOf(element.replace(/[\n ]/g, '')) !== -1) {
        return;
    };

    editorCss.replaceRange(element, CodeMirror.Pos(editorCss.lastLine(), 0));
    editorCss.autoFormatRange({
        line: 0,
        ch: 0
    }, {
        line: editorCss.lineCount()
    });
};

function AddScript(element) {
    var text = editorJS.getValue();
    text = text.replace(/[\n ]/g, '');
    if (text.indexOf(element.replace(/[\n ]/g, '')) !== -1) {
        return;
    };

    editorJS.replaceRange(element, CodeMirror.Pos(editorJS.lastLine(), 0));
    editorJS.autoFormatRange({
        line: 0,
        ch: 0
    }, {
        line: editorJS.lineCount()
    });
};

function Break(type) {
    switch (type) {
        case 1:
            return AddElement('<br/>');
            break;
        case 2:
            return AddElement('<hr/>');
            break;
    };
};

function Containers(type) {
    switch (type) {
        case 1:
            return AddElement('<div class="container"></div>');
            break;
        case 2:
            return AddElement('<div class="container-fluid"></div>');
            break;
        case 3:
            return AddElement('<div class="jumbotron"></div>');
            break;
        case 4:
            return AddElement('<div class="well well-sm"></div>');
            break;
        case 5:
            return AddElement('<div class="well"></div>');
            break;
        case 6:
            return AddElement('<div class="well well-lg"></div>');
            break;
    };
};

function Grids(row) {
    if (row == true) {
        return AddElement('<div class="row"></div>');
    };

    var xs = $("#gridXS").val();
    var sm = $("#gridSM").val();
    var md = $("#gridMD").val();
    var lg = $("#gridLG").val();
    if (xs != "") {
        xs = xs + " ";
    };
    if (sm != "") {
        sm = sm + " ";
    };
    if (md != "") {
        md = md + " ";
    };
    var element = '<div class="' + xs + sm + md + lg + '"></div>';
    return AddElement(element);
};

function Typography(type) {
    switch (type) {
        case 1:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<h1>Heading 1</h1>');
            } else {
                return AddElement('<h1 class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Heading 1</h1>');
            };
        case 2:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<h2>Heading 2</h2>');
            } else {
                return AddElement('<h2 class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Heading 2</h2>');
            };
        case 3:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<h3>Heading 3</h3>');
            } else {
                return AddElement('<h3 class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Heading 3</h3>');
            };
        case 4:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<h4>Heading 4</h4>');
            } else {
                return AddElement('<h4 class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Heading 4</h4>');
            };
        case 5:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<h5>Heading 5</h5>');
            } else {
                return AddElement('<h5 class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Heading 5</h5>');
            };
        case 6:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<h6>Heading 6</h6>');
            } else {
                return AddElement('<h6 class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Heading 6</h6>');
            };
        case 7:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<p>Paragraph</p>');
            } else {
                return AddElement('<p class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Paragraph</p>');
            };
        case 8:
            if ($("#typoColor").val() == "" && $("#typoBg").val() == "" && $("#typoAlign").val() == "") {
                return AddElement('<pre>Preformatted Text</pre>');
            } else {
                return AddElement('<pre class="' + $("#typoColor").val() + ' ' + $("#typoBg").val() + ' ' + $("#typoAlign").val() + '">Preformatted Text</pre>');
            };
        case 9:
            AddElement('<mark>Highlighted Text</mark>');
            break;
        case 10:
            AddElement('<abbr title="Defines an Abbreviation or an Acronym">abbr</abbr>');
            break;
        case 11:
            AddElement('<blockquote>For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</blockquote>');
            break;
        case 12:
            AddElement('<blockquote class="blockquote-reverse">For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</blockquote>');
            break;
        case 13:
            AddElement('<code>&lt;p&gt;online Designer&lt;/p&gt;</code>');
            break;
        case 14:
            AddElement('<kbd>Ctrl + Alt + Shift</kbd>');
            break;
    };
};

function Tables() {
    var element;
    if ($("#tableResponsive").is(":checked")) {
        element = '<div class="table-responsive"><table class="table';
    } else {
        element = '<table class="table';
    };
    for (i = 1; i < 5; i++) {
        if ($("#tableClass" + i).is(":checked")) {
            element = element + " " + $("#tableClass" + i).val();
        };
    };
    element = element + '"><tr>';
    for (l = 1; l <= $("#tableColumn").val(); l++) {
        element = element + '<th>Column Header ' + l + '</th>';
    };
    element = element + '</tr>';
    for (j = 1; j <= $("#tableRow").val(); j++) {
        element = element + '<tr>';
        for (k = 1; k <= $("#tableColumn").val(); k++) {
            element = element + '<td>Cell ' + j + '-' + k + '</td>';
        };
        element = element + '</tr>';
    };
    if ($("#tableResponsive").is(":checked")) {
        element = element + '</table></div>';
    } else {
        element = element + '</table>';
    };
    return AddElement(element);
};

function Images(type) {
    switch (type) {
        case 1:
            return AddElement('<img src="img1.jpg" alt="SetAlternative"/>');
            break;
        case 2:
            return AddElement('<img src="img2.jpg" alt="SetAlternative" class="img-responsive"/>');
            break;
        case 3:
            return AddElement('<img src="img3.jpg" alt="SetAlternative" class="img-rounded"/>');
            break;
        case 4:
            return AddElement('<img src="img4.jpg" alt="SetAlternative" class="img-circle"/>');
            break;
        case 5:
            return AddElement('<img src="img1.jpg" alt="SetAlternative" class="img-thumbnail"/>');
            break;
        case 6:
            return AddElement('<img src="img2.jpg" alt="SetAlternative" class="img-responsive img-rounded"/>');
            break;
        case 7:
            return AddElement('<img src="img3.jpg" alt="SetAlternative" class="img-responsive img-circle"/>');
            break;
        case 8:
            return AddElement('<img src="img4.jpg" alt="SetAlternative" class="img-responsive img-thumbnail"/>');
            break;
    };
};

function Alerts(type) {
    switch (type) {
        case 1:
            return AddElement('<div class="alert alert-success"><strong>Success!</strong> Indicates a successful or positive action.</div>');
            break;
        case 2:
            return AddElement('<div class="alert alert-info"><strong>Info!</strong> Indicates a neutral informative change or action.</div>');
            break;
        case 3:
            return AddElement('<div class="alert alert-warning"><strong>Warning!</strong> Indicates a warning that might need attention.</div>');
            break;
        case 4:
            return AddElement('<div class="alert alert-danger"><strong>Danger!</strong> Indicates a dangerous or potentially negative action.</div>');
            break;
        case 5:
            return AddElement('<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> Indicates a successful or positive action.</div>');
            break;
        case 6:
            return AddElement('<div class="alert alert-info"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Info!</strong> Indicates a neutral informative change or action.</div>');
            break;
        case 7:
            return AddElement('<div class="alert alert-warning"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Warning!</strong> Indicates a warning that might need attention.</div>');
            break;
        case 8:
            return AddElement('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Danger!</strong> Indicates a dangerous or potentially negative action.</div>');
            break;
        case 9:
            return AddElement('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> Indicates a successful or positive action.</div>');
            break;
        case 10:
            return AddElement('<div class="alert alert-info fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Info!</strong> Indicates a neutral informative change or action.</div>');
            break;
        case 11:
            return AddElement('<div class="alert alert-warning fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Warning!</strong> Indicates a warning that might need attention.</div>');
            break;
        case 12:
            return AddElement('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Danger!</strong> Indicates a dangerous or potentially negative action.</div>');
            break;
    };
};

function Buttons(type) {
    switch (type) {
        case 's1':
            return AddElement('<button class="btn btn-default btn-sm">default sm</button>');
            break;
        case 's2':
            return AddElement('<button class="btn btn-primary btn-sm">primary sm</button>');
            break;
        case 's3':
            return AddElement('<button class="btn btn-danger btn-sm">danger sm</button>');
            break;
        case 's4':
            return AddElement('<button class="btn btn-warning btn-sm">warning sm</button>');
            break;
        case 's5':
            return AddElement('<button class="btn btn-info btn-sm">info sm</button>');
            break;
        case 's6':
            return AddElement('<button class="btn btn-success btn-sm">seccess sm</button>');
            break;
        case 's7':
            return AddElement('<button class="btn btn-link btn-sm">link sm</button>');
            break;
        case 'm1':
            return AddElement('<button class="btn btn-default">default</button>');
            break;
        case 'm2':
            return AddElement('<button class="btn btn-primary">primary</button>');
            break;
        case 'm3':
            return AddElement('<button class="btn btn-danger">danger</button>');
            break;
        case 'm4':
            return AddElement('<button class="btn btn-warning">warning</button>');
            break;
        case 'm5':
            return AddElement('<button class="btn btn-info">info</button>');
            break;
        case 'm6':
            return AddElement('<button class="btn btn-success">seccess</button>');
            break;
        case 'm7':
            return AddElement('<button class="btn btn-link">link</button>');
            break;
        case 'l1':
            return AddElement('<button class="btn btn-default btn-lg">default lg</button>');
            break;
        case 'l2':
            return AddElement('<button class="btn btn-primary btn-lg">primary lg</button>');
            break;
        case 'l3':
            return AddElement('<button class="btn btn-danger btn-lg">danger lg</button>');
            break;
        case 'l4':
            return AddElement('<button class="btn btn-warning btn-lg">warning lg</button>');
            break;
        case 'l5':
            return AddElement('<button class="btn btn-info btn-lg">info lg</button>');
            break;
        case 'l6':
            return AddElement('<button class="btn btn-success btn-lg">seccess lg</button>');
            break;
        case 'l7':
            return AddElement('<button class="btn btn-link btn-lg">link lg</button>');
            break;
    };
};

function ButtonGroups(type) {
    switch (type) {
        case 1:
            AddElement('<div class="btn-group"><button type="button" class="btn btn-primary">Item 1</button><button type="button" class="btn btn-primary">Item 2</button><div class="btn-group"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Item 3 <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#">Item 3-1</a></li><li><a href="#">Item 3-2</a></li></ul></div></div>');
            break;
        case 2:
            AddElement('<div class="btn-group-vertical"><button type="button" class="btn btn-primary">Item 1</button><button type="button" class="btn btn-primary">Item 2</button><div class="btn-group"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Item 3 <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#">Item 3-1</a></li><li><a href="#">Item 3-2</a></li></ul></div></div>');
            break;
        case 3:
            AddElement('<div class="btn-group btn-group-justified"><a href="#" class="btn btn-primary">Item 1</a><a href="#" class="btn btn-primary">Item 2</a><a href="#" class="btn btn-primary">Item 3</a></div>');
            break;
        case 4:
            AddElement('<div class="btn-group"><button type="button" class="btn btn-primary">Items</button><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li></ul></div>');
            break;
    };
};

function Glyphicons(type) {
    switch (type) {
        case "asterisk":
            return AddElement('<span class="glyphicon glyphicon-asterisk"></span>');
            break;
        case "euro":
            return AddElement('<span class="glyphicon glyphicon-euro"></span>');
            break;
        case "cloud":
            return AddElement('<span class="glyphicon glyphicon-cloud"></span>');
            break;
        case "envelope":
            return AddElement('<span class="glyphicon glyphicon-envelope"></span>');
            break;
        case "pencil":
            return AddElement('<span class="glyphicon glyphicon-pencil"></span>');
            break;
        case "plus":
            return AddElement('<span class="glyphicon glyphicon-plus"></span>');
            break;
        case "minus":
            return AddElement('<span class="glyphicon glyphicon-minus"></span>');
            break;
        case "glass":
            return AddElement('<span class="glyphicon glyphicon-glass"></span>');
            break;
        case "music":
            return AddElement('<span class="glyphicon glyphicon-music"></span>');
            break;
        case "search":
            return AddElement('<span class="glyphicon glyphicon-search"></span>');
            break;
        case "heart":
            return AddElement('<span class="glyphicon glyphicon-heart"></span>');
            break;
        case "star":
            return AddElement('<span class="glyphicon glyphicon-star"></span>');
            break;
        case "star-empty":
            return AddElement('<span class="glyphicon glyphicon-star-empty"></span>');
            break;
        case "user":
            return AddElement('<span class="glyphicon glyphicon-user"></span>');
            break;
        case "film":
            return AddElement('<span class="glyphicon glyphicon-film"></span>');
            break;
        case "th-large":
            return AddElement('<span class="glyphicon glyphicon-th-large"></span>');
            break;
        case "th":
            return AddElement('<span class="glyphicon glyphicon-th"></span>');
            break;
        case "th-list":
            return AddElement('<span class="glyphicon glyphicon-th-list"></span>');
            break;
        case "ok":
            return AddElement('<span class="glyphicon glyphicon-ok"></span>');
            break;
        case "remove":
            return AddElement('<span class="glyphicon glyphicon-remove"></span>');
            break;
        case "zoom-in":
            return AddElement('<span class="glyphicon glyphicon-zoom-in"></span>');
            break;
        case "zoom-out":
            return AddElement('<span class="glyphicon glyphicon-zoom-out"></span>');
            break;
        case "off":
            return AddElement('<span class="glyphicon glyphicon-off"></span>');
            break;
        case "signal":
            return AddElement('<span class="glyphicon glyphicon-signal"></span>');
            break;
        case "cog":
            return AddElement('<span class="glyphicon glyphicon-cog"></span>');
            break;
        case "trash":
            return AddElement('<span class="glyphicon glyphicon-trash"></span>');
            break;
        case "home":
            return AddElement('<span class="glyphicon glyphicon-home"></span>');
            break;
        case "file":
            return AddElement('<span class="glyphicon glyphicon-file"></span>');
            break;
        case "time":
            return AddElement('<span class="glyphicon glyphicon-time"></span>');
            break;
        case "road":
            return AddElement('<span class="glyphicon glyphicon-road"></span>');
            break;
        case "download-alt":
            return AddElement('<span class="glyphicon glyphicon-download-alt"></span>');
            break;
        case "download":
            return AddElement('<span class="glyphicon glyphicon-download"></span>');
            break;
        case "upload":
            return AddElement('<span class="glyphicon glyphicon-upload"></span>');
            break;
        case "inbox":
            return AddElement('<span class="glyphicon glyphicon-inbox"></span>');
            break;
        case "play-circle":
            return AddElement('<span class="glyphicon glyphicon-play-circle"></span>');
            break;
        case "repeat":
            return AddElement('<span class="glyphicon glyphicon-repeat"></span>');
            break;
        case "refresh":
            return AddElement('<span class="glyphicon glyphicon-refresh"></span>');
            break;
        case "list-alt":
            return AddElement('<span class="glyphicon glyphicon-list-alt"></span>');
            break;
        case "lock":
            return AddElement('<span class="glyphicon glyphicon-lock"></span>');
            break;
        case "flag":
            return AddElement('<span class="glyphicon glyphicon-flag"></span>');
            break;
        case "headphones":
            return AddElement('<span class="glyphicon glyphicon-headphones"></span>');
            break;
        case "volume-off":
            return AddElement('<span class="glyphicon glyphicon-volume-off"></span>');
            break;
        case "volume-down":
            return AddElement('<span class="glyphicon glyphicon-volume-down"></span>');
            break;
        case "volume-up":
            return AddElement('<span class="glyphicon glyphicon-volume-up"></span>');
            break;
        case "qrcode":
            return AddElement('<span class="glyphicon glyphicon-qrcode"></span>');
            break;
        case "barcode":
            return AddElement('<span class="glyphicon glyphicon-barcode"></span>');
            break;
        case "tag":
            return AddElement('<span class="glyphicon glyphicon-tag"></span>');
            break;
        case "tags":
            return AddElement('<span class="glyphicon glyphicon-tags"></span>');
            break;
        case "book":
            return AddElement('<span class="glyphicon glyphicon-book"></span>');
            break;
        case "":
            return AddElement('<span class="glyphicon glyphicon-bookmark"></span>');
            break;
        case "print":
            return AddElement('<span class="glyphicon glyphicon-print"></span>');
            break;
        case "camera":
            return AddElement('<span class="glyphicon glyphicon-camera"></span>');
            break;
        case "font":
            return AddElement('<span class="glyphicon glyphicon-font"></span>');
            break;
        case "bold":
            return AddElement('<span class="glyphicon glyphicon-bold"></span>');
            break;
        case "italic":
            return AddElement('<span class="glyphicon glyphicon-italic"></span>');
            break;
        case "text-height":
            return AddElement('<span class="glyphicon glyphicon-text-height"></span>');
            break;
        case "text-width":
            return AddElement('<span class="glyphicon glyphicon-text-width"></span>');
            break;
        case "align-left":
            return AddElement('<span class="glyphicon glyphicon-align-left"></span>');
            break;
        case "align-center":
            return AddElement('<span class="glyphicon glyphicon-align-center"></span>');
            break;
        case "align-right":
            return AddElement('<span class="glyphicon glyphicon-align-right"></span>');
            break;
        case "align-justify":
            return AddElement('<span class="glyphicon glyphicon-align-justify"></span>');
            break;
        case "list":
            return AddElement('<span class="glyphicon glyphicon-list"></span>');
            break;
        case "indent-left":
            return AddElement('<span class="glyphicon glyphicon-indent-left"></span>');
            break;
        case "indent-right":
            return AddElement('<span class="glyphicon glyphicon-indent-right"></span>');
            break;
        case "facetime-video":
            return AddElement('<span class="glyphicon glyphicon-facetime-video"></span>');
            break;
        case "picture":
            return AddElement('<span class="glyphicon glyphicon-picture"></span>');
            break;
        case "map-marker":
            return AddElement('<span class="glyphicon glyphicon-map-marker"></span>');
            break;
        case "adjust":
            return AddElement('<span class="glyphicon glyphicon-adjust"></span>');
            break;
        case "tint":
            return AddElement('<span class="glyphicon glyphicon-tint"></span>');
            break;
        case "edit":
            return AddElement('<span class="glyphicon glyphicon-edit"></span>');
            break;
        case "share":
            return AddElement('<span class="glyphicon glyphicon-share"></span>');
            break;
        case "check":
            return AddElement('<span class="glyphicon glyphicon-check"></span>');
            break;
        case "move":
            return AddElement('<span class="glyphicon glyphicon-move"></span>');
            break;
        case "step-backward":
            return AddElement('<span class="glyphicon glyphicon-step-backward"></span>');
            break;
        case "fast-backward":
            return AddElement('<span class="glyphicon glyphicon-fast-backward"></span>');
            break;
        case "backward":
            return AddElement('<span class="glyphicon glyphicon-backward"></span>');
            break;
        case "play":
            return AddElement('<span class="glyphicon glyphicon-play"></span>');
            break;
        case "pause":
            return AddElement('<span class="glyphicon glyphicon-pause"></span>');
            break;
        case "stop":
            return AddElement('<span class="glyphicon glyphicon-stop"></span>');
            break;
        case "forward":
            return AddElement('<span class="glyphicon glyphicon-forward"></span>');
            break;
        case "fast-forward":
            return AddElement('<span class="glyphicon glyphicon-fast-forward"></span>');
            break;
        case "step-forward":
            return AddElement('<span class="glyphicon glyphicon-step-forward"></span>');
            break;
        case "eject":
            return AddElement('<span class="glyphicon glyphicon-eject"></span>');
            break;
        case "chevron-left":
            return AddElement('<span class="glyphicon glyphicon-chevron-left"></span>');
            break;
        case "chevron-right":
            return AddElement('<span class="glyphicon glyphicon-chevron-right"></span>');
            break;
        case "plus-sign":
            return AddElement('<span class="glyphicon glyphicon-plus-sign"></span>');
            break;
        case "minus-sign":
            return AddElement('<span class="glyphicon glyphicon-minus-sign"></span>');
            break;
        case "remove-sign":
            return AddElement('<span class="glyphicon glyphicon-remove-sign"></span>');
            break;
        case "ok-sign":
            return AddElement('<span class="glyphicon glyphicon-ok-sign"></span>');
            break;
        case "question-sign":
            return AddElement('<span class="glyphicon glyphicon-question-sign"></span>');
            break;
        case "info-sign":
            return AddElement('<span class="glyphicon glyphicon-info-sign"></span>');
            break;
        case "screenshot":
            return AddElement('<span class="glyphicon glyphicon-screenshot"></span>');
            break;
        case "remove-circle":
            return AddElement('<span class="glyphicon glyphicon-remove-circle"></span>');
            break;
        case "ok-circle":
            return AddElement('<span class="glyphicon glyphicon-ok-circle"></span>');
            break;
        case "ban-circle":
            return AddElement('<span class="glyphicon glyphicon-ban-circle"></span>');
            break;
        case "arrow-left":
            return AddElement('<span class="glyphicon glyphicon-arrow-left"></span>');
            break;
        case "arrow-right":
            return AddElement('<span class="glyphicon glyphicon-arrow-right"></span>');
            break;
        case "arrow-up":
            return AddElement('<span class="glyphicon glyphicon-arrow-up"></span>');
            break;
        case "arrow-down":
            return AddElement('<span class="glyphicon glyphicon-arrow-down"></span>');
            break;
        case "share-alt":
            return AddElement('<span class="glyphicon glyphicon-share-alt"></span>');
            break;
        case "resize-full":
            return AddElement('<span class="glyphicon glyphicon-resize-full"></span>');
            break;
        case "resize-small":
            return AddElement('<span class="glyphicon glyphicon-resize-small"></span>');
            break;
        case "exclamation-sign":
            return AddElement('<span class="glyphicon glyphicon-exclamation-sign"></span>');
            break;
        case "gift":
            return AddElement('<span class="glyphicon glyphicon-gift"></span>');
            break;
        case "leaf":
            return AddElement('<span class="glyphicon glyphicon-leaf"></span>');
            break;
        case "fire":
            return AddElement('<span class="glyphicon glyphicon-fire"></span>');
            break;
        case "eye-open":
            return AddElement('<span class="glyphicon glyphicon-eye-open"></span>');
            break;
        case "eye-close":
            return AddElement('<span class="glyphicon glyphicon-eye-close"></span>');
            break;
        case "warning-sign":
            return AddElement('<span class="glyphicon glyphicon-warning-sign"></span>');
            break;
        case "plane":
            return AddElement('<span class="glyphicon glyphicon-plane"></span>');
            break;
        case "calendar":
            return AddElement('<span class="glyphicon glyphicon-calendar"></span>');
            break;
        case "random":
            return AddElement('<span class="glyphicon glyphicon-random"></span>');
            break;
        case "comment":
            return AddElement('<span class="glyphicon glyphicon-comment"></span>');
            break;
        case "magnet":
            return AddElement('<span class="glyphicon glyphicon-magnet"></span>');
            break;
        case "chevron-up":
            return AddElement('<span class="glyphicon glyphicon-chevron-up"></span>');
            break;
        case "chevron-down":
            return AddElement('<span class="glyphicon glyphicon-chevron-down"></span>');
            break;
        case "retweet":
            return AddElement('<span class="glyphicon glyphicon-retweet"></span>');
            break;
        case "shopping-cart":
            return AddElement('<span class="glyphicon glyphicon-shopping-cart"></span>');
            break;
        case "folder-close":
            return AddElement('<span class="glyphicon glyphicon-folder-close"></span>');
            break;
        case "folder-open":
            return AddElement('<span class="glyphicon glyphicon-folder-open"></span>');
            break;
        case "resize-vertical":
            return AddElement('<span class="glyphicon glyphicon-resize-vertical"></span>');
            break;
        case "resize-horizontal":
            return AddElement('<span class="glyphicon glyphicon-resize-horizontal"></span>');
            break;
        case "hdd":
            return AddElement('<span class="glyphicon glyphicon-hdd"></span>');
            break;
        case "bullhorn":
            return AddElement('<span class="glyphicon glyphicon-bullhorn"></span>');
            break;
        case "bell":
            return AddElement('<span class="glyphicon glyphicon-bell"></span>');
            break;
        case "certificate":
            return AddElement('<span class="glyphicon glyphicon-certificate"></span>');
            break;
        case "thumbs-up":
            return AddElement('<span class="glyphicon glyphicon-thumbs-up"></span>');
            break;
        case "thumbs-down":
            return AddElement('<span class="glyphicon glyphicon-thumbs-down"></span>');
            break;
        case "hand-right":
            return AddElement('<span class="glyphicon glyphicon-hand-right"></span>');
            break;
        case "hand-left":
            return AddElement('<span class="glyphicon glyphicon-hand-left"></span>');
            break;
        case "hand-up":
            return AddElement('<span class="glyphicon glyphicon-hand-up"></span>');
            break;
        case "hand-down":
            return AddElement('<span class="glyphicon glyphicon-hand-down"></span>');
            break;
        case "circle-arrow-right":
            return AddElement('<span class="glyphicon glyphicon-circle-arrow-right"></span>');
            break;
        case "circle-arrow-left":
            return AddElement('<span class="glyphicon glyphicon-circle-arrow-left"></span>');
            break;
        case "circle-arrow-up":
            return AddElement('<span class="glyphicon glyphicon-circle-arrow-up"></span>');
            break;
        case "circle-arrow-down":
            return AddElement('<span class="glyphicon glyphicon-circle-arrow-down"></span>');
            break;
        case "globe":
            return AddElement('<span class="glyphicon glyphicon-globe"></span>');
            break;
        case "wrench":
            return AddElement('<span class="glyphicon glyphicon-wrench"></span>');
            break;
        case "tasks":
            return AddElement('<span class="glyphicon glyphicon-tasks"></span>');
            break;
        case "filter":
            return AddElement('<span class="glyphicon glyphicon-filter"></span>');
            break;
        case "briefcase":
            return AddElement('<span class="glyphicon glyphicon-briefcase"></span>');
            break;
        case "fullscreen":
            return AddElement('<span class="glyphicon glyphicon-fullscreen"></span>');
            break;
        case "dashboard":
            return AddElement('<span class="glyphicon glyphicon-dashboard"></span>');
            break;
        case "paperclip":
            return AddElement('<span class="glyphicon glyphicon-paperclip"></span>');
            break;
        case "heart-empty":
            return AddElement('<span class="glyphicon glyphicon-heart-empty"></span>');
            break;
        case "link":
            return AddElement('<span class="glyphicon glyphicon-link"></span>');
            break;
        case "phone":
            return AddElement('<span class="glyphicon glyphicon-phone"></span>');
            break;
        case "pushpin":
            return AddElement('<span class="glyphicon glyphicon-pushpin"></span>');
            break;
        case "usd":
            return AddElement('<span class="glyphicon glyphicon-usd"></span>');
            break;
        case "sort-by-attributes":
            return AddElement('<span class="glyphicon glyphicon-sort-by-attributes"></span>');
            break;
        case "sort-by-attributes-alt":
            return AddElement('<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>');
            break;
        case "unchecked":
            return AddElement('<span class="glyphicon glyphicon-unchecked"></span>');
            break;
        case "expand":
            return AddElement('<span class="glyphicon glyphicon-expand"></span>');
            break;
        case "collapse-down":
            return AddElement('<span class="glyphicon glyphicon-collapse-down"></span>');
            break;
        case "collapse-up":
            return AddElement('<span class="glyphicon glyphicon-collapse-up"></span>');
            break;
        case "log-in":
            return AddElement('<span class="glyphicon glyphicon-log-in"></span>');
            break;
        case "flash":
            return AddElement('<span class="glyphicon glyphicon-flash"></span>');
            break;
        case "gbp":
            return AddElement('<span class="glyphicon glyphicon-gbp"></span>');
            break;
        case "sort":
            return AddElement('<span class="glyphicon glyphicon-sort"></span>');
            break;
        case "sort-by-alphabet":
            return AddElement('<span class="glyphicon glyphicon-sort-by-alphabet"></span>');
            break;
        case "sort-by-alphabet-alt":
            return AddElement('<span class="glyphicon glyphicon-sort-by-alphabet-alt"></span>');
            break;
        case "sort-by-order":
            return AddElement('<span class="glyphicon glyphicon-sort-by-order"></span>');
            break;
        case "sort-by-order-alt":
            return AddElement('<span class="glyphicon glyphicon-sort-by-order-alt"></span>');
            break;
        case "log-out":
            return AddElement('<span class="glyphicon glyphicon-log-out"></span>');
            break;
        case "new-window":
            return AddElement('<span class="glyphicon glyphicon-new-window"></span>');
            break;
        case "record":
            return AddElement('<span class="glyphicon glyphicon-record"></span>');
            break;
        case "save":
            return AddElement('<span class="glyphicon glyphicon-save"></span>');
            break;
        case "open":
            return AddElement('<span class="glyphicon glyphicon-open"></span>');
            break;
        case "saved":
            return AddElement('<span class="glyphicon glyphicon-saved"></span>');
            break;
        case "upload":
            return AddElement('<span class="glyphicon glyphicon-upload"></span>');
            break;
        case "export":
            return AddElement('<span class="glyphicon glyphicon-export"></span>');
            break;
        case "send":
            return AddElement('<span class="glyphicon glyphicon-send"></span>');
            break;
        case "floppy-disk":
            return AddElement('<span class="glyphicon glyphicon-floppy-disk"></span>');
            break;
        case "floppy-saved":
            return AddElement('<span class="glyphicon glyphicon-floppy-saved"></span>');
            break;
        case "floppy-remove":
            return AddElement('<span class="glyphicon glyphicon-floppy-remove"></span>');
            break;
        case "floppy-save":
            return AddElement('<span class="glyphicon glyphicon-floppy-save"></span>');
            break;
        case "floppy-open":
            return AddElement('<span class="glyphicon glyphicon-floppy-open"></span>');
            break;
        case "credit-card":
            return AddElement('<span class="glyphicon glyphicon-credit-card"></span>');
            break;
        case "transfer":
            return AddElement('<span class="glyphicon glyphicon-transfer"></span>');
            break;
        case "cutlery":
            return AddElement('<span class="glyphicon glyphicon-cutlery"></span>');
            break;
        case "upload":
            return AddElement('<span class="glyphicon glyphicon-upload"></span>');
            break;
        case "compressed":
            return AddElement('<span class="glyphicon glyphicon-compressed"></span>');
            break;
        case "earphone":
            return AddElement('<span class="glyphicon glyphicon-earphone"></span>');
            break;
        case "phone-alt":
            return AddElement('<span class="glyphicon glyphicon-phone-alt"></span>');
            break;
        case "tower":
            return AddElement('<span class="glyphicon glyphicon-tower"></span>');
            break;
        case "stats":
            return AddElement('<span class="glyphicon glyphicon-stats"></span>');
            break;
        case "sd-video":
            return AddElement('<span class="glyphicon glyphicon-sd-video"></span>');
            break;
        case "hd-video":
            return AddElement('<span class="glyphicon glyphicon-hd-video"></span>');
            break;
        case "subtitles":
            return AddElement('<span class="glyphicon glyphicon-subtitles"></span>');
            break;
        case "sound-stereo":
            return AddElement('<span class="glyphicon glyphicon-sound-stereo"></span>');
            break;
        case "sound-dolby":
            return AddElement('<span class="glyphicon glyphicon-sound-dolby"></span>');
            break;
        case "sound-5-1":
            return AddElement('<span class="glyphicon glyphicon-sound-5-1"></span>');
            break;
        case "sound-6-1":
            return AddElement('<span class="glyphicon glyphicon-sound-6-1"></span>');
            break;
        case "sound-7-1":
            return AddElement('<span class="glyphicon glyphicon-sound-7-1"></span>');
            break;
        case "copyright-mark":
            return AddElement('<span class="glyphicon glyphicon-copyright-mark"></span>');
            break;
        case "registration-mark":
            return AddElement('<span class="glyphicon glyphicon-registration-mark"></span>');
            break;
        case "cloud-download":
            return AddElement('<span class="glyphicon glyphicon-cloud-download"></span>');
            break;
        case "cloud-upload":
            return AddElement('<span class="glyphicon glyphicon-cloud-upload"></span>');
            break;
        case "tree-conifer":
            return AddElement('<span class="glyphicon glyphicon-tree-conifer"></span>');
            break;
        case "tree-deciduous":
            return AddElement('<span class="glyphicon glyphicon-tree-deciduous"></span>');
            break;
        case "cd":
            return AddElement('<span class="glyphicon glyphicon-cd"></span>');
            break;
        case "save-file":
            return AddElement('<span class="glyphicon glyphicon-save-file"></span>');
            break;
        case "open-file":
            return AddElement('<span class="glyphicon glyphicon-open-file"></span>');
            break;
        case "level-up":
            return AddElement('<span class="glyphicon glyphicon-level-up"></span>');
            break;
        case "copy":
            return AddElement('<span class="glyphicon glyphicon-copy"></span>');
            break;
        case "paste":
            return AddElement('<span class="glyphicon glyphicon-paste"></span>');
            break;
        case "alert":
            return AddElement('<span class="glyphicon glyphicon-alert"></span>');
            break;
        case "equalizer":
            return AddElement('<span class="glyphicon glyphicon-equalizer"></span>');
            break;
        case "king":
            return AddElement('<span class="glyphicon glyphicon-king"></span>');
            break;
        case "queen":
            return AddElement('<span class="glyphicon glyphicon-queen"></span>');
            break;
        case "pawn":
            return AddElement('<span class="glyphicon glyphicon-pawn"></span>');
            break;
        case "bishop":
            return AddElement('<span class="glyphicon glyphicon-bishop"></span>');
            break;
        case "knight":
            return AddElement('<span class="glyphicon glyphicon-knight"></span>');
            break;
        case "baby-formula":
            return AddElement('<span class="glyphicon glyphicon-baby-formula"></span>');
            break;
        case "tent":
            return AddElement('<span class="glyphicon glyphicon-tent"></span>');
            break;
        case "blackboard":
            return AddElement('<span class="glyphicon glyphicon-blackboard"></span>');
            break;
        case "bed":
            return AddElement('<span class="glyphicon glyphicon-bed"></span>');
            break;
        case "apple":
            return AddElement('<span class="glyphicon glyphicon-apple"></span>');
            break;
        case "erase":
            return AddElement('<span class="glyphicon glyphicon-erase"></span>');
            break;
        case "hourglass":
            return AddElement('<span class="glyphicon glyphicon-hourglass"></span>');
            break;
        case "lamp":
            return AddElement('<span class="glyphicon glyphicon-lamp"></span>');
            break;
        case "duplicate":
            return AddElement('<span class="glyphicon glyphicon-duplicate"></span>');
            break;
        case "piggy-bank":
            return AddElement('<span class="glyphicon glyphicon-piggy-bank"></span>');
            break;
        case "scissors":
            return AddElement('<span class="glyphicon glyphicon-scissors"></span>');
            break;
        case "bitcoin":
            return AddElement('<span class="glyphicon glyphicon-bitcoin"></span>');
            break;
        case "yen":
            return AddElement('<span class="glyphicon glyphicon-yen"></span>');
            break;
        case "ruble":
            return AddElement('<span class="glyphicon glyphicon-ruble"></span>');
            break;
        case "scale":
            return AddElement('<span class="glyphicon glyphicon-scale"></span>');
            break;
        case "ice-lolly":
            return AddElement('<span class="glyphicon glyphicon-ice-lolly"></span>');
            break;
        case "ice-lolly-tasted":
            return AddElement('<span class="glyphicon glyphicon-ice-lolly-tasted"></span>');
            break;
        case "education":
            return AddElement('<span class="glyphicon glyphicon-education"></span>');
            break;
        case "option-horizontal":
            return AddElement('<span class="glyphicon glyphicon-option-horizontal"></span>');
            break;
        case "option-vertical":
            return AddElement('<span class="glyphicon glyphicon-option-vertical"></span>');
            break;
        case "menu-hamburger":
            return AddElement('<span class="glyphicon glyphicon-menu-hamburger"></span>');
            break;
        case "modal-window":
            return AddElement('<span class="glyphicon glyphicon-modal-window"></span>');
            break;
        case "oil":
            return AddElement('<span class="glyphicon glyphicon-oil"></span>');
            break;
        case "grain":
            return AddElement('<span class="glyphicon glyphicon-grain"></span>');
            break;
        case "sunglasses":
            return AddElement('<span class="glyphicon glyphicon-sunglasses"></span>');
            break;
        case "text-size":
            return AddElement('<span class="glyphicon glyphicon-text-size"></span>');
            break;
        case "text-color":
            return AddElement('<span class="glyphicon glyphicon-text-color"></span>');
            break;
        case "text-background":
            return AddElement('<span class="glyphicon glyphicon-text-background"></span>');
            break;
        case "object-align-top":
            return AddElement('<span class="glyphicon glyphicon-object-align-top"></span>');
            break;
        case "object-align-bottom":
            return AddElement('<span class="glyphicon glyphicon-object-align-bottom"></span>');
            break;
        case "object-align-horizontal":
            return AddElement('<span class="glyphicon glyphicon-object-align-horizontal"></span>');
            break;
        case "object-align-left":
            return AddElement('<span class="glyphicon glyphicon-object-align-left"></span>');
            break;
        case "object-align-vertical":
            return AddElement('<span class="glyphicon glyphicon-object-align-vertical"></span>');
            break;
        case "object-align-right":
            return AddElement('<span class="glyphicon glyphicon-object-align-right"></span>');
            break;
        case "triangle-right":
            return AddElement('<span class="glyphicon glyphicon-triangle-right"></span>');
            break;
        case "triangle-left":
            return AddElement('<span class="glyphicon glyphicon-triangle-left"></span>');
            break;
        case "triangle-bottom":
            return AddElement('<span class="glyphicon glyphicon-triangle-bottom"></span>');
            break;
        case "triangle-top":
            return AddElement('<span class="glyphicon glyphicon-triangle-top"></span>');
            break;
        case "superscript":
            return AddElement('<span class="glyphicon glyphicon-superscript"></span>');
            break;
        case "subscript":
            return AddElement('<span class="glyphicon glyphicon-subscript"></span>');
            break;
        case "menu-left":
            return AddElement('<span class="glyphicon glyphicon-menu-left"></span>');
            break;
        case "menu-right":
            return AddElement('<span class="glyphicon glyphicon-menu-right"></span>');
            break;
        case "menu-down":
            return AddElement('<span class="glyphicon glyphicon-menu-down"></span>');
            break;
        case "menu-up":
            return AddElement('<span class="glyphicon glyphicon-menu-up"></span>');
            break;
    };
};

function BadgesLabels(type) {
    switch (type) {
        case 1:
            return AddElement('<span class="badge">10</span>');
            break;
        case 2:
            return AddElement('<span class="label label-default">Default Label</span>');
            break;
        case 3:
            return AddElement('<span class="label label-primary">Primary Label</span>');
            break;
        case 4:
            return AddElement('<span class="label label-success">Success Label</span>');
            break;
        case 5:
            return AddElement('<span class="label label-info">Info Label</span>');
            break;
        case 6:
            return AddElement('<span class="label label-warning">Warning Label</span>');
            break;
        case 7:
            return AddElement('<span class="label label-danger">Danger Label</span>');
            break;
    }
}

function ProgressBars(type) {
    switch (type) {
        case 1:
            return AddElement('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">30% Complete (primary)</div></div>');
            break;
        case 2:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">40% Complete (success)</div></div>');
            break;
        case 3:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% Complete (info)</div></div>');
            break;
        case 4:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">60% Complete (warning)</div></div>');
            break;
        case 5:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">70% Complete (danger)</div></div>');
            break;
        case 6:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">30% Complete (primary)</div></div>');
            break;
        case 7:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">40% Complete (success)</div></div>');
            break;
        case 8:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% Complete (info)</div></div>');
            break;
        case 9:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">60% Complete (warning)</div></div>');
            break;
        case 10:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">70% Complete (danger)</div></div>');
            break;
        case 11:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">30% Complete (primary)</div></div>');
            break;
        case 12:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">40% Complete (success)</div></div>');
            break;
        case 13:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% Complete (info)</div></div>');
            break;
        case 14:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">60% Complete (warning)</div></div>');
            break;
        case 15:
            return AddElement('<div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">70% Complete (danger)</div></div>');
            break;
    };
};

function Paginations(type) {
    switch (type) {
        case 1:
            return AddElement('<ul class="pagination pagination-sm"><li><a href="#">1</a></li><li class="active"><a href="#">2</a></li><li><a href="#">3</a></li><li class="disabled"><a href="#">4</a></li><li><a href="#">5</a></li></ul>');
            break;
        case 2:
            return AddElement('<ul class="pagination"><li><a href="#">1</a></li><li class="active"><a href="#">2</a></li><li><a href="#">3</a></li><li class="disabled"><a href="#">4</a></li><li><a href="#">5</a></li></ul>');
            break;
        case 3:
            return AddElement('<ul class="pagination pagination-lg"><li><a href="#">1</a></li><li class="active"><a href="#">2</a></li><li><a href="#">3</a></li><li class="disabled"><a href="#">4</a></li><li><a href="#">5</a></li></ul>');
            break;
        case 4:
            return AddElement('<ul class="breadcrumb"><li><a href="#">Home</a></li><li><a href="#">Private</a></li><li><a href="#">Pictures</a></li><li class="active">Vacation</li></ul>');
            break;
        case 5:
            return AddElement('<ul class="pager"><li><a href="#">Previous</a></li><li><a href="#">Next</a></li></ul>');
            break;
        case 6:
            return AddElement('<ul class="pager"><li class="previous"><a href="#">Previous</a></li><li class="next"><a href="#">Next</a></li></ul>');
            break;
    };
};

function ListGroups(type) {
    switch (type) {
        case 1:
            return AddElement('<ul class="list-group"><li class="list-group-item active">First item</li><li class="list-group-item">Second item</li><li class="list-group-item disabled">Third item</li><li class="list-group-item">Fourth item</li></ul>');
            break;
        case 2:
            return AddElement('<div class="list-group"><a href="#" class="list-group-item active">First item</a><a href="#" class="list-group-item">Second item</a><a href="#" class="list-group-item disabled">Third item</a><a href="#" class="list-group-item">Fourth item</a></div>');
            break;
    };
};

function Panels(type) {
    switch (type) {
        case 1:
            return AddElement('<div class="panel panel-default"><div class="panel-heading">Panel Heading</div><div class="panel-body">Panel Content</div><div class="panel-footer">Panel Footer</div></div>');
            break;
        case 2:
            return AddElement('<div class="panel panel-primary"><div class="panel-heading">Panel Heading</div><div class="panel-body">Panel Content</div><div class="panel-footer">Panel Footer</div></div>');
            break;
        case 3:
            return AddElement('<div class="panel panel-success"><div class="panel-heading">Panel Heading</div><div class="panel-body">Panel Content</div><div class="panel-footer">Panel Footer</div></div>');
            break;
        case 4:
            return AddElement('<div class="panel panel-info"><div class="panel-heading">Panel Heading</div><div class="panel-body">Panel Content</div><div class="panel-footer">Panel Footer</div></div>');
            break;
        case 5:
            return AddElement('<div class="panel panel-warning"><div class="panel-heading">Panel Heading</div><div class="panel-body">Panel Content</div><div class="panel-footer">Panel Footer</div></div>');
            break;
        case 6:
            return AddElement('<div class="panel panel-danger"><div class="panel-heading">Panel Heading</div><div class="panel-body">Panel Content</div><div class="panel-footer">Panel Footer</div></div>');
            break;
    };
};

function Dropdowns(type) {
    switch (type) {
        case 1:
            return AddElement('<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dropdowns <span class="caret"></span></button><ul class="dropdown-menu"><li class="dropdown-header">Dropdown header 1</li><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li><li><a href="#">Item 3</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header 2</li><li><a href="#">Item 4</a></li></ul></div>');
            break;
        case 2:
            return AddElement('<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdowns <span class="caret"></span></button><ul class="dropdown-menu"><li class="dropdown-header">Dropdown header 1</li><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li><li><a href="#">Item 3</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header 2</li><li><a href="#">Item 4</a></li></ul></div>');
            break;
        case 3:
            return AddElement('<div class="dropdown"><button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Dropdowns <span class="caret"></span></button><ul class="dropdown-menu"><li class="dropdown-header">Dropdown header 1</li><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li><li><a href="#">Item 3</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header 2</li><li><a href="#">Item 4</a></li></ul></div>');
            break;
        case 4:
            return AddElement('<div class="dropdown"><button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">Dropdowns <span class="caret"></span></button><ul class="dropdown-menu"><li class="dropdown-header">Dropdown header 1</li><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li><li><a href="#">Item 3</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header 2</li><li><a href="#">Item 4</a></li></ul></div>');
            break;
        case 5:
            return AddElement('<div class="dropdown"><button class="btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown">Dropdowns <span class="caret"></span></button><ul class="dropdown-menu"><li class="dropdown-header">Dropdown header 1</li><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li><li><a href="#">Item 3</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header 2</li><li><a href="#">Item 4</a></li></ul></div>');
            break;
        case 6:
            return AddElement('<div class="dropdown"><button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown">Dropdowns <span class="caret"></span></button><ul class="dropdown-menu"><li class="dropdown-header">Dropdown header 1</li><li><a href="#">Item 1</a></li><li><a href="#">Item 2</a></li><li><a href="#">Item 3</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header 2</li><li><a href="#">Item 4</a></li></ul></div>');
            break;
    };
};

function Collapses(type) {
    switch (type) {
        case 1:
            return AddElement('<button class="btn btn-info btn-lg" data-toggle="collapse" data-target="#demo">Collapsible</button><div id="demo" class="collapse">Lorem ipsum dolor text....</div>');
            break;
        case 2:
            return AddElement('<div class="panel-group"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapsePanel">Collapsible panel</a></h4></div><div id="collapsePanel" class="panel-collapse collapse"><div class="panel-body">Panel Body</div><div class="panel-footer">Panel Footer</div></div></div></div>');
            break;
        case 3:
            return AddElement('<div class="panel-group"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapseListGroup">Collapsible list group</a></h4></div><div id="collapseListGroup" class="panel-collapse collapse"><ul class="list-group"><li class="list-group-item">One</li><li class="list-group-item">Two</li><li class="list-group-item">Three</li></ul><div class="panel-footer">Footer</div></div></div></div>');
            break;
        case 4:
            return AddElement('<div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Collapsible Group 1</a></h4></div><div id="collapse1" class="panel-collapse collapse in"><div class="panel-body">Lorem ipsum dolor sit amet ...</div></div></div><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Collapsible Group 2</a></h4></div><div id="collapse2" class="panel-collapse collapse"><div class="panel-body">Lorem ipsum dolor sit amet ...</div></div></div><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Collapsible Group 3</a></h4></div><div id="collapse3" class="panel-collapse collapse"><div class="panel-body">Lorem ipsum dolor sit amet ...</div></div></div></div>');
            break;
    };
};

function TabsPills(type) {
    switch (type) {
        case 1:
            return AddElement('<ul><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 2:
            return AddElement('<ul class="list-inline"><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 3:
            return AddElement('<ul class="nav nav-tabs"><li class="active"><a href="#">Home</a></li><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 4:
            return AddElement('<ul class="nav nav-tabs"><li class="active"><a href="#">Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Submenu 1-1</a></li><li><a href="#">Submenu 1-2</a></li><li><a href="#">Submenu 1-3</a></li></ul></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 5:
            return AddElement('<ul class="nav nav-pills"><li class="active"><a href="#">Home</a></li><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 6:
            return AddElement('<ul class="nav nav-pills nav-stacked"><li class="active"><a href="#">Home</a></li><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 7:
            return AddElement('<ul class="nav nav-pills nav-stacked"><li class="active"><a href="#">Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Submenu 1-1</a></li><li><a href="#">Submenu 1-2</a></li><li><a href="#">Submenu 1-3</a></li></ul></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 8:
            return AddElement('<ul class="nav nav-tabs nav-justified"><li class="active"><a href="#">Home</a></li><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 9:
            return AddElement('<ul class="nav nav-pills nav-justified"><li class="active"><a href="#">Home</a></li><li><a href="#">Menu 1</a></li><li><a href="#">Menu 2</a></li><li><a href="#">Menu 3</a></li></ul>');
            break;
        case 10:
            return AddElement('<ul class="nav nav-tabs"><li class="active"><a data-toggle="tab" href="#home">Home</a></li><li><a data-toggle="tab" href="#menu1">Menu 1</a></li><li><a data-toggle="tab" href="#menu2">Menu 2</a></li></ul><div class="tab-content"><div id="home" class="tab-pane fade in active"><h3>HOME</h3><p>Some content.</p></div><div id="menu1" class="tab-pane fade"><h3>Menu 1</h3><p>Some content in menu 1.</p></div><div id="menu2" class="tab-pane fade"><h3>Menu 2</h3><p>Some content in menu 2.</p></div></div>');
            break;
        case 11:
            return AddElement('<ul class="nav nav-pills"><li class="active"><a data-toggle="pill" href="#home">Home</a></li><li><a data-toggle="pill" href="#menu1">Menu 1</a></li><li><a data-toggle="pill" href="#menu2">Menu 2</a></li></ul><div class="tab-content"><div id="home" class="tab-pane fade in active"><h3>HOME</h3><p>Some content.</p></div><div id="menu1" class="tab-pane fade"><h3>Menu 1</h3><p>Some content in menu 1.</p></div><div id="menu2" class="tab-pane fade"><h3>Menu 2</h3><p>Some content in menu 2.</p></div></div>');
            break;
    };
};

function NavBar(type) {
    switch (type) {
        case 1:
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            };
            break;
        case 2:
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default navbar-fixed-top"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            };
            break;
        case 3:
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default navbar-fixed-bottom"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse navbar-fixed-bottom"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            };
            break;
        case 4:
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Page 1-1</a></li><li><a href="#">Page 1-2</a></li><li><a href="#">Page 1-3</a></li></ul></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Page 1-1</a></li><li><a href="#">Page 1-2</a></li><li><a href="#">Page 1-3</a></li></ul></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></div></div></nav>');
            };
            break;
        case 5:
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li><li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li></ul></div></div></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">WebSiteName</a></div><div><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li><li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li></ul></div></div></nav>');
            };
            break;
        case 6:
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">WebSiteName</a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li><li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li></ul></div></div></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">WebSiteName</a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li><li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li></ul></div></div></nav>');
            };
            break;
        case 7:
            AddStyle('.affix {top: 0; width: 100%;} .affix + * {padding-top: 70px;}');
            if ($("#navbarDefault").is(":checked")) {
                return AddElement('<nav class="navbar navbar-default" data-spy="affix" data-offset-top="197"><ul class="nav navbar-nav"><li class="active"><a href="#">Basic Topnav</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></nav>');
            } else {
                return AddElement('<nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197"><ul class="nav navbar-nav"><li class="active"><a href="#">Basic Topnav</a></li><li><a href="#">Page 1</a></li><li><a href="#">Page 2</a></li><li><a href="#">Page 3</a></li></ul></nav>');
            };
            break;
    };
};

function Forms(type) {
    switch (type) {
        case 1:
            return AddElement('<form role="form"></form>');
        case 2:
            return AddElement('<form class="form-horizontal" role="form"></form>');
        case 3:
            return AddElement('<form class="form-inline" role="form"></form>');
        case 4:
            return AddElement('<div class="form-group"><label for="text">Textbox:</label><input type="text" class="form-control" id="text"></div>');
        case 5:
            return AddElement(' <div class="form-group"><label for="textarea">Textarea:</label><textarea class="form-control" rows="5" id="textarea"></textarea></div>');
        case 6:
            return AddElement('<div class="checkbox"><label><input type="checkbox" value="">Option</label></div>');
        case 7:
            return AddElement('<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label><label class="checkbox-inline"><input type="checkbox" value="">Option 2</label><label class="checkbox-inline"><input type="checkbox" value="">Option 3</label>');
        case 8:
            return AddElement('<div class="radio"><label><input type="radio" name="optradio">Option</label></div>');
        case 9:
            return AddElement('<label class="radio-inline"><input type="radio" name="optradio">Option 1</label><label class="radio-inline"><input type="radio" name="optradio">Option 2</label><label class="radio-inline"><input type="radio" name="optradio">Option 3</label> ');
        case 10:
            return AddElement('<div class="form-group"><label for="sel1">Select list:</label><select class="form-control" id="sel1"><option>1</option><option>2</option><option>3</option><option>4</option></select></div>');
        case 11:
            return AddElement('<span class="help-block">This is some help text...</span>');
        case 12:
            return AddElement('<button type="submit" class="btn btn-default">Submit</button>');
    }
}

function Carousel(type) {
    switch (type) {
        case 1:
            return AddElement('<div id="myCarousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img src="img1.jpg" alt="Chania"></div><div class="item"><img src="img2.jpg" alt="Chania"></div><div class="item"><img src="img3.jpg" alt="Flower"></div><div class="item"><img src="img4.jpg" alt="Flower"></div></div><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>');
            break;
        case 2:
            return AddElement('<div id="myCarousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img src="img1.jpg" alt="Coffie"><div class="carousel-caption"><h3>Coffie</h3><p>A cup of coffie on the desk.</p></div></div><div class="item"><img src="img2.jpg" alt="Butterflies"><div class="carousel-caption"><h3>Butterflies</h3><p>The tow butterfly on a flower</p></div></div><div class="item"><img src="img3.jpg" alt="Watch"><div class="carousel-caption"><h3>The Watch</h3><p>A classic watch with a long chain</p></div></div><div class="item"><img src="img4.jpg" alt="Autumn"><div class="carousel-caption"><h3>Autumn</h3><p>The leafs that is sign for begin autumn</p></div></div></div><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>');
            break;
    };
};

function Modals(type) {
    switch (type) {
        case 1:
            return AddElement('<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button><div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the small modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
            break;
        case 2:
            return AddElement('<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button><div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the medium modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
            break;
        case 3:
            return AddElement('<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button><div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the large modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
            break;
    };
};

function Tooltip(type) {
    AddScript('$(\'[data-toggle="tooltip"]\').tooltip();');
    switch (type) {
        case 1:
            return AddElement('<a href="#" data-toggle="tooltip" data-placement="top" title="Hooray!">Hover</a>');
            break;
        case 2:
            return AddElement('<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hooray!">Hover</a>');
            break;
        case 3:
            return AddElement('<a href="#" data-toggle="tooltip" data-placement="left" title="Hooray!">Hover</a>');
            break;
        case 4:
            return AddElement('<a href="#" data-toggle="tooltip" data-placement="right" title="Hooray!">Hover</a>');
            break;
    };
};

function Popover(type) {
    AddScript('$(\'[data-toggle="popover"]\').popover();');
    switch (type) {
        case 1:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-placement="top" data-content="Content">Click</a>');
            break;
        case 2:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-placement="bottom" data-content="Content">Click</a>');
            break;
        case 3:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-placement="left" data-content="Content">Click</a>');
            break;
        case 4:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-placement="right" data-content="Content">Click</a>');
            break;
        case 5:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="Content">Click</a>');
            break;
        case 6:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Content">Click</a>');
            break;
        case 7:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Content">Click</a>');
            break;
        case 8:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="focus" data-placement="right" data-content="Content">Click</a>');
            break;
        case 9:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="Content">Click</a>');
            break;
        case 10:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="Content">Click</a>');
            break;
        case 11:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Content">Click</a>');
            break;
        case 12:
            return AddElement('<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="Content">Click</a>');
            break;
    };
};