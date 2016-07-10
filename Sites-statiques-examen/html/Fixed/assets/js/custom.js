/* ux form authentification */
$(function () {
    $("#inputEmail").on({
        focus: function () {
            $(this).attr("placeholder", "");
        },
        blur: function () {
            $(this).attr("placeholder", "Votre e-mail");
        }
    });
    $("#inputPassword").on({
        focus: function () {
            $(this).attr("placeholder", "");
        },
        blur: function () {
            $(this).attr("placeholder", "Votre mot de passe");
        }
    });
})

/* Calcul prix tickets */
$(function () {
    var cptTickets;
    var prixUnitaire;
    var total;

    $selected = $("select#vente").on({
        change: function () {
            //récuperation des données de calcul
            cptTickets = $(this).find("option:selected").val();
            prixUnitaire = $("#groupe-prix").find(".active").attr("data-prix");
            total = cptTickets * prixUnitaire;
            //affichage du résultat
            $("#prixSpan").html(total);
        }
    })
})