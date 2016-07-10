<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">         
        <html>
            <head>
                <title>agence.xsl</title>
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
                <link rel="stylesheet" type="text/css" href="css/custom.css"/>
                <style>
                </style>
            </head>
            <body>
                <div class="container">
                    <table class="table-bordered">
                        <caption>Appartements en location</caption>
                        <thead>
                            <tr>
                                <th>Situation géographique</th>
                                <th>Prix de location</th>
                                <th>Nombre de chambres</th>
                                <th>Garage disponible</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="agence/bien">
                                <xsl:sort select="number(translate(prix,'€',''))" data-type="number" order="descending" />                            
                               
                                <xsl:if test="(@bienType='appartement') and (prix/@transactionType='location') and ((commune='Anderlecht') or (commune='Ixelles') or (commune='Schaerbeek'))">
                                    <tr>
                                        <xsl:choose>
                                            <xsl:when test="garage='oui'">   
                                                <td class="ownGarage">
                                                    <xsl:value-of select="commune" />
                                                </td>
                                                <td class="ownGarage">
                                                    <xsl:value-of select="prix" />
                                                </td>
                                                <td class="ownGarage">
                                                    <xsl:value-of select="chambres" />
                                                </td>
                                                <td class="ownGarage">
                                                    <xsl:value-of select="garage" />
                                                </td>                                            
                                                <xsl:choose>
                                                    <xsl:when test="not(number(translate(prix,'€','')) >= 1000)">
                                                        <td class="danger">Super affaire !</td>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                        <td>Coup de cœur assuré !</td>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:when>
                                        </xsl:choose>
                                        <xsl:choose>
                                            <xsl:when test="garage='non'">   
                                                <td>
                                                    <xsl:value-of select="commune" />
                                                </td>
                                                <td>
                                                    <xsl:value-of select="prix" />
                                                </td>
                                                <td>
                                                    <xsl:value-of select="chambres" />
                                                </td>
                                                <td>
                                                    <xsl:value-of select="garage" />
                                                </td>                                            
                                                <xsl:choose>
                                                    <xsl:when test="not(number(translate(prix,'€','')) >= 1000)">
                                                        <td class="message">Super affaire !</td>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                        <td>Coup de cœur assuré !</td>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:when>
                                        </xsl:choose>
                                    </tr>
                                </xsl:if>                              
                            </xsl:for-each>
                        </tbody>
                    </table>
                
                
                    <table class="table-bordered">
                        <caption>Maisons en location</caption>
                        <thead>
                            <tr>
                                <th>Prix de location</th>
                                <th>Nombre de chambres</th>
                                <th>Nombre de sales de bain</th>
                                <th>Nombre d'étages</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="agence/bien">
                                <xsl:sort select="number(facades)" data-type="number" order="ascending" />                           
                                <xsl:if test="(@bienType='maison') and (number(facades) >= 2) and (prix/@transactionType='location') and ((commune='Anderlecht') or (commune='Ixelles') or (commune='Schaerbeek'))">
                                    <tr>
                                        <td>
                                            <xsl:value-of select="prix" />
                                        </td>
                                        <td>
                                            <xsl:value-of select="chambres" />
                                        </td>
                                        <td>
                                            <xsl:value-of select="bains" />
                                        </td>
                                        <td>
                                            <xsl:value-of select="etages" />
                                        </td>                                            
                                    </tr>
                                </xsl:if>                              
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>