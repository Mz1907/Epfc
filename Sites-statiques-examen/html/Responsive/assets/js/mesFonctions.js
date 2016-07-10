/* Assigne une feuille css differente sur event onclick  */
function switchTheme() {
    var themes = {
        "default": "assets/css/bootstrap.css",
        "journal": "assets/css/flatly.css",
    }
    $(function () {
        var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
        themesheet.appendTo('head');
        $('.theme-link').click(function () {
            var themeurl = themes[$(this).attr('data-theme')];
            themesheet.attr('href', themeurl);
        });
    });
}

/* Insère une valeur par défaut à l'attribut value du inut type="date" 
 * Est utilisé sur la page inscription.html au champ input type="time" */
function dateHtmlInput() {
    $(function () {
        var d = new Date;
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $("input[type='time']").attr("value", hour + ":" + minutes + ":" + seconds);
    })
}

/* Vérifie si le mot de passe contient bien au moins une majuscule et un chiffre */
function mdpValidation() {
    $(function () {
        var $pass1 = $("#pass1");
        var $pass2 = $("#pass2");
        var pass1Length = 0;
        var cptMaj = 0; // cpt majuscules dans le mdp choisi par user
        var cptInt = 0; //  cpt numbers dans le mdp choisi par user
        var code; // code de la clé pressée
		var keyCode
        
        $pass1.on({
            keyup: function (e) {
                keyCode = e.which;
                if (keyCode != 8 && keyCode != 46) {
                    pass1Length = $pass1.val().length;
                    cptInt = countIntInString($pass1.val());
                    cptMaj = countMajInString($pass1.val());

                    if (pass1Length >= 8 && cptInt >= 1 && cptMaj >= 1) {
                        $("#mdp1").removeClass("has-error");
                        $("#mdp1").addClass("has-success");
                        if ($pass2.attr("disabled"))
                            $pass2.removeAttr("disabled");
                    } else if (pass1Length < 8 || cptInt < 1 || cptMaj < 1) {
                        if (!($("#mdp1").hasClass("has-error"))) {
                            $("#mdp1").addClass("has-error");
                        }
                    }
                }
            }
        }).on('keyup', function (e) { //Gestion de la touche backspace et delete
            keyCode = e.which;
            pass1Length = $pass1.val().length;
            if ((keyCode == 8 || keyCode == 46) && (pass1Length > 0)) {
                cptMaj = countMajInString($pass1.val());
                cptInt = countIntInString($pass1.val());
            }
            if (pass1Length < 8 || cptInt < 1 || cptMaj < 1) {
                //donne un style de bordure rouge pour dire qu'il y a un problème
                if ($("#mdp1").hasClass("has-success")) {
                    $("#mdp1").removeClass("has-success");

                    if (!($("#mdp1").hasClass("has-error")))
                        $("#mdp1").addClass("has-error")
                }
                //désactive le champ de confirmation du mot de passe
                if (!($pass2.attr("disabled")))
                    $pass2.attr("disabled", "disabled");
            }
        });
    })
}

/*@param{String} s: une chaîne de caractère dans laquelle on va compter le nombre de majuscules  */
function countMajInString(s) {
    var cptMaj = 0;
    var arrayChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    var arrayS = s.split("");
    $.each(arrayS, function (k, v) {
        if (arrayChar.indexOf(v) != -1)
            cptMaj++;
    })
    return cptMaj;
}
/*@param{String} s: une chaîne de caractère dans laquelle on va compter le nombre de valeur int  */
function countIntInString(s) {
    var cptInt = 0;
    var arrayS = s.split("");
    $.each(arrayS, function (k, v) {
        if ($.isNumeric(v))
            cptInt++;
    })
    return cptInt;
}

/* Compare 2 mots de passe.
 * Est utilsé pour valider la confirmation du mot de passe choisi lors de l'inscription utilisateur
 */
function mdpCompare() {
    $(function () {
        var $mdp1 = $("#pass1");
        var $mdp2 = $("#pass2");

        $mdp2.on({
            keyup: function () {
                if ($mdp1.val() == $mdp2.val()) {
                    if ($("#mdp2").hasClass("has-error"))
                        $("#mdp2").removeClass("has-error")
                    if (!($("#mdp2").hasClass("has-success")))
                        $("#mdp2").addClass("has-success");
                }
                if ($mdp1.val() != $mdp2.val()) {
                    if ($("#mdp2").hasClass("has-success"))
                        $("#mdp2").removeClass("has-success");
                    if (!($("#mdp2").hasClass("has-error")))
                        $("#mdp2").addClass("has-error");
                }
            }
        })
    })
}

/* Modifie l'attribut background color des zones de saisie de type textuel */
function focusEvent() {
    $(function () {
        var arrayZonesText = [
            $("#form_inscription input[type='text']"),
            $("#form_inscription input[type='email']"),
            $("#form_inscription input[type='password']"),
            $("#form_inscription input[type='tel']"),
            $("#form_inscription input[type='url']"),
            $("#form_inscription input[type='search']"),
            $("#form_inscription input[type='date']"),
            $("#form_inscription input[type='datetime-local']"),
            $("#form_inscription input[type='time']"),
            $("#form_inscription input[type='number']"),
            $("#form_inscription input[type='week']"),
            $("#form_inscription input[type='month']")
        ];
        $.each(arrayZonesText, function (k, v) {
            arrayZonesText[k].each(function (k, v) {
                $(this).on({
                    focus: function () {
                        $(this).css("background-color", "#FAFFBD")
                    },
                    blur: function () {
                        $(this).css("background-color", "")
                    }
                })
            })
        })
    })
}