<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
         
        <html>
            <head>
                <title>agence.xsl</title>
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
                <link rel="stylesheet" type="text/css" href="css/custom.css"/>
            </head>
            <body>
                <div class="container">
                <ol class="list-group">
                    <xsl:for-each select="agence/bien">
                        <xsl:sort select="commune" data-type="text" order="ascending" />
                        <xsl:sort select="number(translate(surface,'m²','') )" data-type="number" order="ascending" />
                        <xsl:if test="(@bienType='maison') and (number(translate(prix,'€','') )  >= 200000) and (number(translate(prix,'€','') )  &lt;= 300000) and (chambres>=3) and (jardin='oui')">
                            <li class="list-item">
                                <ul class="list-group-item">
                                    <li class="list-group-item">
                                        <xsl:value-of select="prix" />
                                    </li>                
                                    <li class="list-group-item">
                                        <xsl:value-of select="surface" />
                                    </li>
                                    <li class="list-group-item">
                                        <xsl:value-of select="chambres" />
                                    </li>
                                    <li class="list-group-item">
                                        <xsl:value-of select="bains" />
                                    </li>
                                    <li class="list-group-item">
                                        <xsl:value-of select="chauffageCentrale/@chauffageType" />
                                    </li>
                                    <li class="list-group-item">
                                        <xsl:value-of select="vitrage" />
                                    </li>
                                    <!-- prix, surface, nbchambres, nbSale de bains, type de chaufage , type de vitrage -->
                                    <xsl:if test="chauffageCentrale = 'non'">
                                        <p class="message">Attention pas de chauffage central !</p>
                                    </xsl:if>
                                    <!-- En cas d’absence de chauffage central la chaîne de caractères 
                                    « ATTENTION : pas de chauffage central ! » en gras et colorée devra apparaître-->
                                </ul>
                            </li>
                        </xsl:if>
                    </xsl:for-each>
                </ol>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
