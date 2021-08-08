import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from '@material-ui/core';

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#93F100',
      color: '#000000',
      fontWeight: 'bold',
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export const getImage = (name: string, type: string) => {
  const URL = type === 'state' ? StateImageUrl[name] : districts[name];
  return (
    <>
      <img alt={name} src={URL} height="30px" />
      <br />
    </>
  );
};

export const StateImageUrl: any = {
  'Baden-Württemberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Grosses_Landeswappen_Baden-W%C3%BCrttemberg.png/120px-Grosses_Landeswappen_Baden-W%C3%BCrttemberg.png',
  Berlin:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Berlin.svg/65px-Coat_of_arms_of_Berlin.svg.png',
  Brandenburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Brandenburg_Wappen.svg/90px-Brandenburg_Wappen.svg.png',
  Bayern:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Coat_of_arms_of_Bavaria.svg/110px-Coat_of_arms_of_Bavaria.svg.png',
  Bremen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bremen_Wappen%28Mittel%29.svg/220px-Bremen_Wappen%28Mittel%29.svg.png',
  Hamburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DEU_Hamburg_COA.svg/300px-DEU_Hamburg_COA.svg.png',
  Hessen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Coat_of_arms_of_Hesse.svg/110px-Coat_of_arms_of_Hesse.svg.png',
  'Mecklenburg-Vorpommern':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_Mecklenburg-Western_Pomerania_%28great%29.svg/100px-Coat_of_arms_of_Mecklenburg-Western_Pomerania_%28great%29.svg.png',
  Niedersachsen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Coat_of_arms_of_Lower_Saxony.svg/523px-Coat_of_arms_of_Lower_Saxony.svg.png',
  'Nordrhein-Westfalen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Coat_of_arms_of_North_Rhine-Westfalia.svg/110px-Coat_of_arms_of_North_Rhine-Westfalia.svg.png',
  'Rheinland-Pfalz':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Coat_of_arms_of_Rhineland-Palatinate.svg/110px-Coat_of_arms_of_Rhineland-Palatinate.svg.png',
  Saarland:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Coa_de-saarland.svg/80px-Coa_de-saarland.svg.png',
  'Sachsen-Anhalt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wappen_Sachsen-Anhalt.svg/110px-Wappen_Sachsen-Anhalt.svg.png',
  'Schleswig-Holstein':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Landeswappen_Schleswig-Holstein.png/518px-Landeswappen_Schleswig-Holstein.png',
  Thüringen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Thuringia.svg/110px-Coat_of_arms_of_Thuringia.svg.png',
  Sachsen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coat_of_arms_of_Saxony.svg/110px-Coat_of_arms_of_Saxony.svg.png',
};

export const districts: any = {
  'Regionalverband Saarbrücken':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wappen_Stadtverband_Saarbruecken.svg/111px-Wappen_Stadtverband_Saarbruecken.svg.png',
  'Merzig-Wadern':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Wappen_Landkreis_Merzig-Wadern.svg/106px-Wappen_Landkreis_Merzig-Wadern.svg.png',
  Neunkirchen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wappen_Landkreis_Neunkirchen.svg/111px-Wappen_Landkreis_Neunkirchen.svg.png',
  Saarlouis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Wappen_Landkreis_Saarlouis.svg/111px-Wappen_Landkreis_Saarlouis.svg.png',
  'Saarpfalz-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wappen_Saarpfalz-Kreis.svg/104px-Wappen_Saarpfalz-Kreis.svg.png',
  'St. Wendel':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wappen_Landkreis_St_Wendel.svg/111px-Wappen_Landkreis_St_Wendel.svg.png',
  'Berlin Mitte':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Coat_of_arms_of_borough_Mitte.svg/81px-Coat_of_arms_of_borough_Mitte.svg.png',
  'Berlin Friedrichshain-Kreuzberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coat_of_arms_of_borough_Friedrichshain-Kreuzberg.svg/81px-Coat_of_arms_of_borough_Friedrichshain-Kreuzberg.svg.png',
  'Berlin Pankow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coat_of_arms_of_borough_Pankow.svg/81px-Coat_of_arms_of_borough_Pankow.svg.png',
  'Berlin Charlottenburg-Wilmersdorf':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Coat_of_arms_de-be_char-wilm.png/83px-Coat_of_arms_de-be_char-wilm.png',
  'Berlin Spandau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coat_of_arms_of_borough_Spandau.svg/81px-Coat_of_arms_of_borough_Spandau.svg.png',
  'Berlin Steglitz-Zehlendorf':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Coat_of_arms_of_borough_Steglitz-Zehlendorf.svg/81px-Coat_of_arms_of_borough_Steglitz-Zehlendorf.svg.png',
  'Berlin Tempelhof-Schöneberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Coat_of_arms_of_borough_Tempelhof-Schoeneberg.svg/81px-Coat_of_arms_of_borough_Tempelhof-Schoeneberg.svg.png',
  'Berlin Neukölln':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Coat_of_arms_of_borough_Neukoelln.svg/81px-Coat_of_arms_of_borough_Neukoelln.svg.png',
  'Berlin Treptow-Köpenick':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coat_of_arms_of_borough_Treptow-Koepenick.svg/81px-Coat_of_arms_of_borough_Treptow-Koepenick.svg.png',
  'Berlin Marzahn-Hellersdorf':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coat_of_arms_of_borough_Marzahn-Hellersdorf.svg/81px-Coat_of_arms_of_borough_Marzahn-Hellersdorf.svg.png',
  'Berlin Lichtenberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Coat_of_arms_of_borough_Lichtenberg.svg/81px-Coat_of_arms_of_borough_Lichtenberg.svg.png',
  'Berlin Reinickendorf':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_arms_of_borough_Reinickendorf.svg/81px-Coat_of_arms_of_borough_Reinickendorf.svg.png',
  'Brandenburg an der Havel':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Wappen_Brandenburg_an_der_Havel.png/120px-Wappen_Brandenburg_an_der_Havel.png',
  Cottbus:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Wappen_Cottbus.png/108px-Wappen_Cottbus.png',
  'Frankfurt (Oder)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wappen_Frankfurt_%28Oder%29.png/108px-Wappen_Frankfurt_%28Oder%29.png',
  Potsdam:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/DEU_Potsdam_COA.svg/82px-DEU_Potsdam_COA.svg.png',
  Barnim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wappen_Landkreis_Barnim.png/96px-Wappen_Landkreis_Barnim.png',
  'Dahme-Spreewald':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Wappen_Landkreis_Dahme-Spreewald.svg/103px-Wappen_Landkreis_Dahme-Spreewald.svg.png',
  'Elbe-Elster':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wappen_des_Landkreises_Elbe-Elster.svg/103px-Wappen_des_Landkreises_Elbe-Elster.svg.png',
  Havelland:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wappen_Landkreis_Havelland.png/108px-Wappen_Landkreis_Havelland.png',
  'Märkisch-Oderland':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wappen_Landkreis_Maerkisch-Oderland.png/107px-Wappen_Landkreis_Maerkisch-Oderland.png',
  Oberhavel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wappen_Landkreis_Oberhavel.png/107px-Wappen_Landkreis_Oberhavel.png',
  'Oberspreewald-Lausitz':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wappen_Landkreis_Oberspreewald-Lausitz.png/110px-Wappen_Landkreis_Oberspreewald-Lausitz.png',
  'Oder-Spree':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wappen_Landkreis_Oder-Spree.svg/110px-Wappen_Landkreis_Oder-Spree.svg.png',
  'Ostprignitz-Ruppin':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Wappen_des_Landkreises_Ostprignitz-Ruppin.svg/100px-Wappen_des_Landkreises_Ostprignitz-Ruppin.svg.png',
  'Potsdam-Mittelmark':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wappen_Landkreis_Potsdam-Mittelmark.png/108px-Wappen_Landkreis_Potsdam-Mittelmark.png',
  Prignitz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wappen_Landkreis_Prignitz.png/104px-Wappen_Landkreis_Prignitz.png',
  'Spree-Neiße':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wappen_Landkreis_Spree-Neisse.png/108px-Wappen_Landkreis_Spree-Neisse.png',
  'Teltow-Fläming':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Wappen_Landkreis_Teltow-Flaeming.png/97px-Wappen_Landkreis_Teltow-Flaeming.png',
  Uckermark:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Wappen_Landkreis_Uckermark.png/107px-Wappen_Landkreis_Uckermark.png',
  'Rostock (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Rostock_Wappen.svg/200px-Rostock_Wappen.svg.png',
  Schwerin:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Wappen_Schwerin.svg/115px-Wappen_Schwerin.svg.png',
  'Mecklenburgische Seenplatte':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wappen_Mecklenburgische_Seenplatte.svg/100px-Wappen_Mecklenburgische_Seenplatte.svg.png',
  'Rostock (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DEU_Landkreis_Rostock_COA.svg/140px-DEU_Landkreis_Rostock_COA.svg.png',
  'Vorpommern-Rügen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wappen_des_Landkreises_Vorpommern-R%C3%BCgen.svg/140px-Wappen_des_Landkreises_Vorpommern-R%C3%BCgen.svg.png',
  Nordwestmecklenburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/DEU_Nordwestmecklenburg_COA.svg/140px-DEU_Nordwestmecklenburg_COA.svg.png',
  'Vorpommern-Greifswald':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Wappen_Landkreis_Vorpommern-Greifswald.svg/140px-Wappen_Landkreis_Vorpommern-Greifswald.svg.png',
  'Ludwigslust-Parchim':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/DEU_Landkreis_Ludwigslust-Parchim_COA.svg/140px-DEU_Landkreis_Ludwigslust-Parchim_COA.svg.png',
  Chemnitz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Coat_of_arms_of_Chemnitz.svg/102px-Coat_of_arms_of_Chemnitz.svg.png',
  Erzgebirgskreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Wappen_Erzgebirgskreis.svg/135px-Wappen_Erzgebirgskreis.svg.png',
  Mittelsachsen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wappen_Mittelsachsen.svg/135px-Wappen_Mittelsachsen.svg.png',
  Vogtlandkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Wappen_Vogtlandkreis.svg/129px-Wappen_Vogtlandkreis.svg.png',
  Zwickau:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DEU_Zwickau_COA.svg/106px-DEU_Zwickau_COA.svg.png',
  Dresden:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dresden_Stadtwappen.svg/116px-Dresden_Stadtwappen.svg.png',
  Bautzen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Coat_of_arm_Bautzen.svg/101px-Coat_of_arm_Bautzen.svg.png',
  Görlitz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wappen_Goerlitz_vector.svg/107px-Wappen_Goerlitz_vector.svg.png',
  Meißen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wappen_mei%C3%9Fen.png/112px-Wappen_mei%C3%9Fen.png',
  'Sächsische Schweiz-Osterzgebirge':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Wappen_Landkreis_Saechsische_Schweiz-Osterzgebirge.svg/126px-Wappen_Landkreis_Saechsische_Schweiz-Osterzgebirge.svg.png',
  'Leipzig (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Coat_of_arms_of_Leipzig.svg/106px-Coat_of_arms_of_Leipzig.svg.png',
  'Leipzig (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Coat_of_arms_of_Leipzig.svg/106px-Coat_of_arms_of_Leipzig.svg.png',
  Nordsachsen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wappen_vom_Landkreis_Nordsachsen.svg/120px-Wappen_vom_Landkreis_Nordsachsen.svg.png',
  'Dessau-Roßlau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wappen_Dessau-Rosslau.svg/92px-Wappen_Dessau-Rosslau.svg.png',
  'Halle (Saale)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Coat_of_arms_of_Halle_%28Saale%29.svg/99px-Coat_of_arms_of_Halle_%28Saale%29.svg.png',
  Magdeburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Wappen_Magdeburg.svg/100px-Wappen_Magdeburg.svg.png',
  'Altmarkkreis Salzwedel':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wappen_Altmarkkreis_Salzwedel.svg/106px-Wappen_Altmarkkreis_Salzwedel.svg.png',
  'Anhalt-Bitterfeld':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wappen_Landkreis_Anhalt-Bitterfeld.svg/107px-Wappen_Landkreis_Anhalt-Bitterfeld.svg.png',
  Börde:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wappen_Landkreis_Boerde.png/107px-Wappen_Landkreis_Boerde.png',
  Burgenlandkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Wappen_Burgenlandkreis.png/107px-Wappen_Burgenlandkreis.png',
  Harz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Wappen_Landkreis_Harz.svg/106px-Wappen_Landkreis_Harz.svg.png',
  'Jerichower Land':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Wappen_Landkreis_Jerichower_Land.svg/106px-Wappen_Landkreis_Jerichower_Land.svg.png',
  'Mansfeld-Südharz':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wappen_Landkreis_Mansfeld-Suedharz.svg/106px-Wappen_Landkreis_Mansfeld-Suedharz.svg.png',
  Saalekreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Wappen_Saalekreis.svg/106px-Wappen_Saalekreis.svg.png',
  Salzlandkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Wappen_Salzlandkreis.svg/106px-Wappen_Salzlandkreis.svg.png',
  Stendal:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wappen_Landkreis_Stendal.svg/106px-Wappen_Landkreis_Stendal.svg.png',
  Wittenberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wappen_Landkreis_Wittenberg.svg/106px-Wappen_Landkreis_Wittenberg.svg.png',
  Erfurt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/DEU_Erfurt_COA.svg/102px-DEU_Erfurt_COA.svg.png',
  Gera: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Wappen_Gera.svg/120px-Wappen_Gera.svg.png',
  Jena: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wappen_Jena.svg/100px-Wappen_Jena.svg.png',
  Suhl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Wappen_Suhl.svg/100px-Wappen_Suhl.svg.png',
  Weimar:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wappen_Weimar.svg/101px-Wappen_Weimar.svg.png',
  Eisenach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Wappen_Eisenach.svg/88px-Wappen_Eisenach.svg.png',
  Eichsfeld:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/DEU_Landkreis_Eichsfeld_1995_COA.svg/101px-DEU_Landkreis_Eichsfeld_1995_COA.svg.png',
  Nordhausen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wappen_Landkreis_Nordhausen.svg/94px-Wappen_Landkreis_Nordhausen.svg.png',
  Wartburgkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Wappen_Wartburgkreis.svg/98px-Wappen_Wartburgkreis.svg.png',
  'Unstrut-Hainich-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Wappen_Unstrut-Hainich-Kreis.svg/103px-Wappen_Unstrut-Hainich-Kreis.svg.png',
  Kyffhäuserkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Wappen_Kyffh%C3%A4userkreis.svg/102px-Wappen_Kyffh%C3%A4userkreis.svg.png',
  'Schmalkalden-Meiningen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wappen_Landkreis_Schmalkalden-Meiningen.svg/105px-Wappen_Landkreis_Schmalkalden-Meiningen.svg.png',
  Gotha:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Wappen_Landkreis_Gotha.svg/110px-Wappen_Landkreis_Gotha.svg.png',
  Sömmerda:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wappen_Landkreis_S%C3%B6mmerda.svg/102px-Wappen_Landkreis_S%C3%B6mmerda.svg.png',
  Hildburghausen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Wappen_Landkreis_Hildburghausen.svg/107px-Wappen_Landkreis_Hildburghausen.svg.png',
  'Ilm-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wappen_Ilm-Kreis.svg/108px-Wappen_Ilm-Kreis.svg.png',
  'Weimarer Land':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Wappen_Landkreis_Weimarer_Land.svg/116px-Wappen_Landkreis_Weimarer_Land.svg.png',
  Sonneberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wappen_Landkreis_Sonneberg.svg/105px-Wappen_Landkreis_Sonneberg.svg.png',
  'Saalfeld-Rudolstadt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Wappen_Landkreis_Saalfeld-Rudolstadt.svg/106px-Wappen_Landkreis_Saalfeld-Rudolstadt.svg.png',
  'Saale-Holzland-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Wappen_Saale-Holzland-Kreis.svg/100px-Wappen_Saale-Holzland-Kreis.svg.png',
  'Saale-Orla-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wappen_Saale-Orla-Kreis.svg/115px-Wappen_Saale-Orla-Kreis.svg.png',
  Greiz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Wappen_Landkreis_Greiz.svg/113px-Wappen_Landkreis_Greiz.svg.png',
  'Altenburger Land':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Wappen_Landkreis_Altenburger_Land.svg/115px-Wappen_Landkreis_Altenburger_Land.svg.png',
  Flensburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/DEU_Flensburg_COA.svg/103px-DEU_Flensburg_COA.svg.png',
  Kiel: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wappen_Kiel.svg/115px-Wappen_Kiel.svg.png',
  Lübeck:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/DEU_Luebeck_COA.svg/104px-DEU_Luebeck_COA.svg.png',
  Neumünster:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wappen_neumuenster.svg/92px-Wappen_neumuenster.svg.png',
  Dithmarschen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Wappen_Kreis_Dithmarschen.svg/129px-Wappen_Kreis_Dithmarschen.svg.png',
  'Herzogtum Lauenburg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Wappen_Herzogtum_Lauenburg_alt.svg/86px-Wappen_Herzogtum_Lauenburg_alt.svg.png',
  Nordfriesland:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/DEU_Kreis_Nordfriesland_COA.svg/128px-DEU_Kreis_Nordfriesland_COA.svg.png',
  Ostholstein:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wappen_Kreis_Ostholstein.svg/114px-Wappen_Kreis_Ostholstein.svg.png',
  Pinneberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wappen_Pinneberg.svg/109px-Wappen_Pinneberg.svg.png',
  Plön: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wappen_von_Ploen.png/109px-Wappen_von_Ploen.png',
  'Rendsburg-Eckernförde':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wappen_Kreis_Rendsburg-Eckernfoerde.svg/139px-Wappen_Kreis_Rendsburg-Eckernfoerde.svg.png',
  'Schleswig-Flensburg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wappen_Kreis_Schleswig-Flensburg.svg/138px-Wappen_Kreis_Schleswig-Flensburg.svg.png',
  Segeberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coa_Kreis_Segeberg.svg/125px-Coa_Kreis_Segeberg.svg.png',
  Steinburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/DEU_Kreis_Steinburg_COA.svg/150px-DEU_Kreis_Steinburg_COA.svg.png',
  Stormarn:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Wappen_Kreis_Stormarn.svg/131px-Wappen_Kreis_Stormarn.svg.png',
  Hamburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DEU_Hamburg_COA.svg/171px-DEU_Hamburg_COA.svg.png',
  Braunschweig:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wappen_Braunschweig.svg/280px-Wappen_Braunschweig.svg.png',
  Salzgitter:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coat_of_arms_of_Salzgitter.svg/280px-Coat_of_arms_of_Salzgitter.svg.png',
  Wolfsburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/DEU_Wolfsburg_COA.svg/280px-DEU_Wolfsburg_COA.svg.png',
  Gifhorn:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Wappen_Landkreis_Gifhorn.svg/109px-Wappen_Landkreis_Gifhorn.svg.png',
  Goslar:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wappen_Landkreis_Goslar.svg/115px-Wappen_Landkreis_Goslar.svg.png',
  Helmstedt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Stadtwappen_Helmstedt.png/140px-Stadtwappen_Helmstedt.png',
  Northeim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Wappen_Landkreis_Northeim.svg/109px-Wappen_Landkreis_Northeim.svg.png',
  Peine:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wappen_Landkreis_Peine.svg/106px-Wappen_Landkreis_Peine.svg.png',
  Wolfenbüttel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wappen_Landkreis_Wolfenb%C3%BCttel.svg/109px-Wappen_Landkreis_Wolfenb%C3%BCttel.svg.png',
  Göttingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wappen_Landkreis_G%C3%B6ttingen.svg/106px-Wappen_Landkreis_G%C3%B6ttingen.svg.png',
  'Hannover (Region)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wappen_der_Region_Hannover.svg/96px-Wappen_der_Region_Hannover.svg.png',
  Diepholz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wappen_Landkreis_Diepholz.png/96px-Wappen_Landkreis_Diepholz.png',
  'Hameln-Pyrmont':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wappen_Landkreis_Hameln-Pyrmont.svg/109px-Wappen_Landkreis_Hameln-Pyrmont.svg.png',
  Hildesheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Wappen_Landkreis_Hildesheim.png/101px-Wappen_Landkreis_Hildesheim.png',
  Holzminden:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/DE_Landkreis_Holzminden_COA.svg/94px-DE_Landkreis_Holzminden_COA.svg.png',
  'Nienburg (Weser)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Nienburg_wappen.jpg/140px-Nienburg_wappen.jpg',
  Schaumburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wappen_Landkreis_Schaumburg.svg/104px-Wappen_Landkreis_Schaumburg.svg.png',
  Celle:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Wappen_Landkreis_Celle.svg/96px-Wappen_Landkreis_Celle.svg.png',
  Cuxhaven:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Wappen_Landkreis_Cuxhaven.svg/106px-Wappen_Landkreis_Cuxhaven.svg.png',
  Harburg:
    'https://raw.githubusercontent.com/v-braun/corona-wiki/master/src/static-data/wappen/harburg2.png',
  'Lüchow-Dannenberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Wappen_Landkreis_L%C3%BCchow-Dannenberg.svg/106px-Wappen_Landkreis_L%C3%BCchow-Dannenberg.svg.png',
  Lüneburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/DEU_L%C3%BCneburg_COA.svg/140px-DEU_L%C3%BCneburg_COA.svg.png',
  Osterholz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/DEU_Osterholz_COA.svg/111px-DEU_Osterholz_COA.svg.png',
  'Rotenburg (Wümme)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/DEU_Rotenburg_%28W%C3%BCmme%29_COA.svg/140px-DEU_Rotenburg_%28W%C3%BCmme%29_COA.svg.png',
  Heidekreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Wappen_des_Heidekreises.svg/140px-Wappen_des_Heidekreises.svg.png',
  Stade:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Wappen_Landkreis_Stade.svg/109px-Wappen_Landkreis_Stade.svg.png',
  Uelzen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Wappen_Landkreis_Uelzen.svg/112px-Wappen_Landkreis_Uelzen.svg.png',
  Verden:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Wappen_Landkreis_Verden.png/98px-Wappen_Landkreis_Verden.png',
  Delmenhorst:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/DEU_Delmenhorst_COA.svg/140px-DEU_Delmenhorst_COA.svg.png',
  Emden:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/DEU_Emden_COA.svg/140px-DEU_Emden_COA.svg.png',
  'Oldenburg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DEU_Oldenburg_COA.svg/140px-DEU_Oldenburg_COA.svg.png',
  'Osnabrück (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/DEU_Landkreis_Osnabr%C3%BCck_COA.svg/111px-DEU_Landkreis_Osnabr%C3%BCck_COA.svg.png',
  Wilhelmshaven:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/DEU_Wilhelmshaven_COA.svg/140px-DEU_Wilhelmshaven_COA.svg.png',
  Ammerland:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Wappen_Landkreis_Ammerland.svg/94px-Wappen_Landkreis_Ammerland.svg.png',
  Aurich:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wappen_Landkreis_Aurich.svg/106px-Wappen_Landkreis_Aurich.svg.png',
  Cloppenburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/DEU_Cloppenburg_COA.svg/140px-DEU_Cloppenburg_COA.svg.png',
  Emsland:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Wappen_Landkreis_Emsland.svg/100px-Wappen_Landkreis_Emsland.svg.png',
  Friesland:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/DEU_Landkreis_Friesland_COA.svg/100px-DEU_Landkreis_Friesland_COA.svg.png',
  'Grafschaft Bentheim':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/DEU_Landkreis_Grafschaft_Bentheim_COA.svg/104px-DEU_Landkreis_Grafschaft_Bentheim_COA.svg.png',
  Leer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Wappen_Landkreis_Leer.png/94px-Wappen_Landkreis_Leer.png',
  'Oldenburg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Wappen_landkreis_oldenburg.svg/107px-Wappen_landkreis_oldenburg.svg.png',
  'Osnabrück (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/DEU_Landkreis_Osnabr%C3%BCck_COA.svg/111px-DEU_Landkreis_Osnabr%C3%BCck_COA.svg.png',
  Vechta:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/DE_Landkreis_Vechta_COA.svg/107px-DE_Landkreis_Vechta_COA.svg.png',
  Wesermarsch:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Wappen_Landkreis_Wesermarsch.svg/109px-Wappen_Landkreis_Wesermarsch.svg.png',
  Wittmund:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/DEU_Landkreis_Wittmund_COA.svg/106px-DEU_Landkreis_Wittmund_COA.svg.png',
  Bremen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bremen_Wappen%28Mittel%29.svg/82px-Bremen_Wappen%28Mittel%29.svg.png',
  Bremerhaven:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Wappen_Bremerhaven.svg/115px-Wappen_Bremerhaven.svg.png',
  Düsseldorf:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/DEU_D%C3%BCsseldorf_COA.svg/100px-DEU_D%C3%BCsseldorf_COA.svg.png',
  Duisburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/DEU_Duisburg_COA.svg/110px-DEU_Duisburg_COA.svg.png',
  Essen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/DEU_Essen_COA.svg/120px-DEU_Essen_COA.svg.png',
  Krefeld:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/DEU_Krefeld_COA.svg/110px-DEU_Krefeld_COA.svg.png',
  Mönchengladbach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/DEU_Moenchengladbach_COA.svg/96px-DEU_Moenchengladbach_COA.svg.png',
  'Mülheim an der Ruhr':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/DEU_Muelheim_an_der_Ruhr_COA.svg/74px-DEU_Muelheim_an_der_Ruhr_COA.svg.png',
  Oberhausen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/DEU_Oberhausen_COA.svg/79px-DEU_Oberhausen_COA.svg.png',
  Remscheid:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/DEU_Remscheid_COA.svg/104px-DEU_Remscheid_COA.svg.png',
  Solingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/DEU_Solingen_COA.svg/84px-DEU_Solingen_COA.svg.png',
  Wuppertal:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/DEU_Wuppertal_COA.svg/109px-DEU_Wuppertal_COA.svg.png',
  Kleve:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/DEU_Kreis_Kleve_COA.svg/105px-DEU_Kreis_Kleve_COA.svg.png',
  Mettmann:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kreiswappen_des_Kreises_Mettmann.png/118px-Kreiswappen_des_Kreises_Mettmann.png',
  'Rhein-Kreis Neuss':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Kreiswappen_des_Rhein-Kreises_Neuss.svg/101px-Kreiswappen_des_Rhein-Kreises_Neuss.svg.png',
  Viersen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kreiswappen_des_Kreises_Viersen.png/120px-Kreiswappen_des_Kreises_Viersen.png',
  Wesel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kreiswappen_des_Kreises_Wesel.svg/120px-Kreiswappen_des_Kreises_Wesel.svg.png',
  Bonn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/DEU_Bonn_COA.svg/105px-DEU_Bonn_COA.svg.png',
  Köln: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/DEU_Koeln_COA.svg/120px-DEU_Koeln_COA.svg.png',
  Leverkusen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/DEU_Leverkusen_COA.svg/104px-DEU_Leverkusen_COA.svg.png',
  'Städteregion Aachen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/DEU_Staedteregion_Aachen_COA.svg/102px-DEU_Staedteregion_Aachen_COA.svg.png',
  Düren:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Wappen_Kreis_D%C3%BCren.svg/110px-Wappen_Kreis_D%C3%BCren.svg.png',
  'Rhein-Erft-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/DEU_Rhein-Erft-Kreis_COA.svg/105px-DEU_Rhein-Erft-Kreis_COA.svg.png',
  Euskirchen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/DEU_Euskirchen_COA.svg/110px-DEU_Euskirchen_COA.svg.png',
  Heinsberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kreiswappen_des_Kreises_Heinsberg.png/98px-Kreiswappen_des_Kreises_Heinsberg.png',
  'Oberbergischer Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Wappen-oberberg-k.png/101px-Wappen-oberberg-k.png',
  'Rheinisch-Bergischer Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kreiswappen_des_Rheinisch-Bergischen_Kreises.png/109px-Kreiswappen_des_Rheinisch-Bergischen_Kreises.png',
  'Rhein-Sieg-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rhein-Sieg-Kreis-Wappen.png/101px-Rhein-Sieg-Kreis-Wappen.png',
  Bottrop:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/DEU_Bottrop_COA.svg/107px-DEU_Bottrop_COA.svg.png',
  Gelsenkirchen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/DEU_Gelsenkirchen_COA.svg/96px-DEU_Gelsenkirchen_COA.svg.png',
  Münster:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DEU_Muenster_COA.svg/96px-DEU_Muenster_COA.svg.png',
  Borken:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DEU_Borken_%28Westf.%29_COA.svg/109px-DEU_Borken_%28Westf.%29_COA.svg.png',
  Coesfeld:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/DEU_Kreis_Coesfeld_COA.svg/106px-DEU_Kreis_Coesfeld_COA.svg.png',
  Recklinghausen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/DEU_Recklinghausen_COA.svg/63px-DEU_Recklinghausen_COA.svg.png',
  Steinfurt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/DEU_Kreis_Steinfurt_COA.svg/99px-DEU_Kreis_Steinfurt_COA.svg.png',
  Warendorf:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/DE_Warendorf_COA.svg/100px-DE_Warendorf_COA.svg.png',
  Bielefeld:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/DEU_Bielefeld_COA.svg/103px-DEU_Bielefeld_COA.svg.png',
  Gütersloh:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/DEU_G%C3%BCtersloh_COA.svg/110px-DEU_G%C3%BCtersloh_COA.svg.png',
  Herford:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wappen_von_Herford.svg/70px-Wappen_von_Herford.svg.png',
  Höxter:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wappen_H%C3%B6xter.svg/113px-Wappen_H%C3%B6xter.svg.png',
  Lippe:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DEU_Kreis_Lippe_COA.svg/139px-DEU_Kreis_Lippe_COA.svg.png',
  'Minden-Lübbecke':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/DEU_Kreis_Minden-Luebbecke_COA.svg/105px-DEU_Kreis_Minden-Luebbecke_COA.svg.png',
  Paderborn:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/DEU_Paderborn_COA.svg/100px-DEU_Paderborn_COA.svg.png',
  Bochum:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stadtwappen_der_kreisfreien_Stadt_Bochum.svg/100px-Stadtwappen_der_kreisfreien_Stadt_Bochum.svg.png',
  Dortmund:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/DEU_Dortmund_COA.svg/120px-DEU_Dortmund_COA.svg.png',
  Hagen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/DEU_Hagen_COA.svg/95px-DEU_Hagen_COA.svg.png',
  Hamm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/DEU_Hamm_COA.svg/100px-DEU_Hamm_COA.svg.png',
  Herne:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DEU_Herne_COA.svg/101px-DEU_Herne_COA.svg.png',
  'Ennepe-Ruhr-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wappen_des_Ennepe-Ruhr-Kreises.svg/100px-Wappen_des_Ennepe-Ruhr-Kreises.svg.png',
  Hochsauerlandkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/DEU_Hochsauerlandkreis_COA.svg/103px-DEU_Hochsauerlandkreis_COA.svg.png',
  'Märkischer Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kreiswappen_des_M%C3%A4rkischen_Kreises.svg/95px-Kreiswappen_des_M%C3%A4rkischen_Kreises.svg.png',
  Olpe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/DEU_Kreis_Olpe_COA.svg/100px-DEU_Kreis_Olpe_COA.svg.png',
  'Siegen-Wittgenstein':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/DEU_Kreis_Siegen-Wittgenstein_COA.svg/97px-DEU_Kreis_Siegen-Wittgenstein_COA.svg.png',
  Soest:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/DEU_Kreis_Soest_COA.svg/105px-DEU_Kreis_Soest_COA.svg.png',
  Unna: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Wappen_Kreis_Unna.png/105px-Wappen_Kreis_Unna.png',
  Darmstadt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Wappen_Darmstadt.svg/82px-Wappen_Darmstadt.svg.png',
  'Frankfurt am Main':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Wappen_Frankfurt_am_Main.svg/110px-Wappen_Frankfurt_am_Main.svg.png',
  'Offenbach am Main':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wappen_Offenbach_am_Main.svg/111px-Wappen_Offenbach_am_Main.svg.png',
  Wiesbaden:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wappen_Wiesbaden.svg/103px-Wappen_Wiesbaden.svg.png',
  Bergstraße:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/DEU_Kreis_Bergstrasse_COA.svg/126px-DEU_Kreis_Bergstrasse_COA.svg.png',
  'Darmstadt-Dieburg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/DEU_Landkreis_Darmstadt-Dieburg_COA.svg/141px-DEU_Landkreis_Darmstadt-Dieburg_COA.svg.png',
  'Groß-Gerau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/DEU_Gross-Gerau_COA.png/71px-DEU_Gross-Gerau_COA.png',
  Hochtaunuskreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wappen_Hochtaunuskreis.svg/140px-Wappen_Hochtaunuskreis.svg.png',
  'Main-Kinzig-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/DEU_Main-Kinzig-Kreis_COA.svg/141px-DEU_Main-Kinzig-Kreis_COA.svg.png',
  'Main-Taunus-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wappen_Main-Taunus-Kreis.svg/140px-Wappen_Main-Taunus-Kreis.svg.png',
  Odenwaldkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DEU_Odenwaldkreis_COA.svg/140px-DEU_Odenwaldkreis_COA.svg.png',
  Offenbach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wappen_Offenbach_am_Main.svg/111px-Wappen_Offenbach_am_Main.svg.png',
  'Rheingau-Taunus-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Wappen_Rheingau-Taunus-Kreis.svg/140px-Wappen_Rheingau-Taunus-Kreis.svg.png',
  Wetteraukreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wappen_Wetteraukreis.svg/140px-Wappen_Wetteraukreis.svg.png',
  Gießen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Wappen_Gie%C3%9Fen.svg/111px-Wappen_Gie%C3%9Fen.svg.png',
  'Lahn-Dill-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Wappen_Lahn-Dill-Kreis.svg/140px-Wappen_Lahn-Dill-Kreis.svg.png',
  'Limburg-Weilburg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DEU_Landkreis_Limburg-Weilburg_COA.svg/140px-DEU_Landkreis_Limburg-Weilburg_COA.svg.png',
  'Marburg-Biedenkopf':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DEU_Landkreis_Marburg-Biedenkopf_COA.svg/125px-DEU_Landkreis_Marburg-Biedenkopf_COA.svg.png',
  Vogelsbergkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wappen_Vogelsbergkreis.svg/140px-Wappen_Vogelsbergkreis.svg.png',
  'Kassel (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_Kassel.svg/103px-Coat_of_arms_of_Kassel.svg.png',
  Fulda:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wappen_Fulda.svg/80px-Wappen_Fulda.svg.png',
  'Hersfeld-Rotenburg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wappen_Landkreis_Hersfeld-Rotenburg.svg/140px-Wappen_Landkreis_Hersfeld-Rotenburg.svg.png',
  'Kassel (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_Kassel.svg/103px-Coat_of_arms_of_Kassel.svg.png',
  'Schwalm-Eder-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Wappen_Schwalm-Eder-Kreis.svg/140px-Wappen_Schwalm-Eder-Kreis.svg.png',
  'Waldeck-Frankenberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Wappen_Landkreis_Waldeck-Frankenberg.svg/140px-Wappen_Landkreis_Waldeck-Frankenberg.svg.png',
  'Werra-Meißner-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wappen_Werra-Meissner-Kreis.svg/138px-Wappen_Werra-Meissner-Kreis.svg.png',
  Koblenz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/DEU_Koblenz_COA.svg/102px-DEU_Koblenz_COA.svg.png',
  Ahrweiler:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Landkreiswappen_des_Landkreises_Ahrweiler.png/105px-Landkreiswappen_des_Landkreises_Ahrweiler.png',
  'Altenkirchen (Westerwald)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Wappen_Landkreis_Altenkirchen.png/104px-Wappen_Landkreis_Altenkirchen.png',
  'Bad Kreuznach':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Wappen_Landkreis_Bad_Kreuznach.png/87px-Wappen_Landkreis_Bad_Kreuznach.png',
  Birkenfeld:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Wappen_Landkreis_Birkenfeld.png/110px-Wappen_Landkreis_Birkenfeld.png',
  'Cochem-Zell':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wappen_Landkreis_Cochem-Zell.png/105px-Wappen_Landkreis_Cochem-Zell.png',
  'Mayen-Koblenz':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wappen_Landkreis_Mayen-Koblenz.png/98px-Wappen_Landkreis_Mayen-Koblenz.png',
  Neuwied:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wappen_Landkreis_Neuwied.png/113px-Wappen_Landkreis_Neuwied.png',
  'Rhein-Hunsrück-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wappen_Rhein-Hunsrueck-Kreis.png/95px-Wappen_Rhein-Hunsrueck-Kreis.png',
  'Rhein-Lahn-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Wappen_Rhein-Lahn-Kreis.png/104px-Wappen_Rhein-Lahn-Kreis.png',
  Westerwaldkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wappen_Westerwaldkreis.png/105px-Wappen_Westerwaldkreis.png',
  Trier:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DEU_Trier_COA.svg/96px-DEU_Trier_COA.svg.png',
  'Bernkastel-Wittlich':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Wappen_Landkreis_Bernkastel-Wittlich.png/92px-Wappen_Landkreis_Bernkastel-Wittlich.png',
  'Eifelkreis Bitburg-Prüm':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wappen_Eifelkreis_Bitburg-Pr%C3%BCm.png/107px-Wappen_Eifelkreis_Bitburg-Pr%C3%BCm.png',
  Vulkaneifel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wappen_Landkreis_Vulkaneifel.png/102px-Wappen_Landkreis_Vulkaneifel.png',
  'Trier-Saarburg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wappen_Landkreis_Trier-Saarburg.png/111px-Wappen_Landkreis_Trier-Saarburg.png',
  'Frankenthal (Pfalz)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/DEU_Frankenthal_COA.svg/99px-DEU_Frankenthal_COA.svg.png',
  'Kaiserslautern (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kaiserslautern-Stadtwappen.svg/100px-Kaiserslautern-Stadtwappen.svg.png',
  'Landau in der Pfalz':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/DEU_Landau_in_der_Pfalz_COA.svg/105px-DEU_Landau_in_der_Pfalz_COA.svg.png',
  'Ludwigshafen am Rhein':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DEU_Ludwigshafen_COA.svg/110px-DEU_Ludwigshafen_COA.svg.png',
  Mainz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_Mainz-2008_new.svg/99px-Coat_of_arms_of_Mainz-2008_new.svg.png',
  'Neustadt an der Weinstraße':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/DEU_Neustadt_an_der_Weinstrasse_COA.svg/105px-DEU_Neustadt_an_der_Weinstrasse_COA.svg.png',
  Pirmasens:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Wappen_Pirmasens.svg/111px-Wappen_Pirmasens.svg.png',
  Speyer:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/DEU_Speyer_COA.svg/100px-DEU_Speyer_COA.svg.png',
  Worms:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/DEU_Worms_COA.svg/111px-DEU_Worms_COA.svg.png',
  Zweibrücken:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Wappen_Zweibr%C3%BCcken.svg/97px-Wappen_Zweibr%C3%BCcken.svg.png',
  'Alzey-Worms':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wappen_Landkreis_Alzey-Worms.png/92px-Wappen_Landkreis_Alzey-Worms.png',
  'Bad Dürkheim':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wappen_lk_duew.png/106px-Wappen_lk_duew.png',
  Donnersbergkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Wappen_Donnersbergkreis.png/103px-Wappen_Donnersbergkreis.png',
  Germersheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Wappen_Landkreis_Germersheim.png/104px-Wappen_Landkreis_Germersheim.png',
  'Kaiserslautern (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wappen_Landkreis_Kaiserslautern.png/112px-Wappen_Landkreis_Kaiserslautern.png',
  Kusel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wappen_Landkreis_Kusel.png/108px-Wappen_Landkreis_Kusel.png',
  'Südliche Weinstraße':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wappen_lk_suew.png/110px-Wappen_lk_suew.png',
  'Rhein-Pfalz-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Wappen_rheinpfalzkreis.png/110px-Wappen_rheinpfalzkreis.png',
  'Mainz-Bingen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wappen_Landkreis_Mainz-Bingen.png/105px-Wappen_Landkreis_Mainz-Bingen.png',
  Südwestpfalz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DEU_Landkreis_Suedwestpfalz_COA.svg/102px-DEU_Landkreis_Suedwestpfalz_COA.svg.png',
  Stuttgart:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_arms_of_Stuttgart.svg/233px-Coat_of_arms_of_Stuttgart.svg.png',
  Böblingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Wappen_Landkreis_Boeblingen.svg/195px-Wappen_Landkreis_Boeblingen.svg.png',
  Esslingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Wappen_Landkreis_Esslingen.svg/223px-Wappen_Landkreis_Esslingen.svg.png',
  Göppingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wappen_Landkreis_Goeppingen.svg/214px-Wappen_Landkreis_Goeppingen.svg.png',
  Ludwigsburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Wappen_Landkreis_Ludwigsburg.svg/233px-Wappen_Landkreis_Ludwigsburg.svg.png',
  'Rems-Murr-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Wappen_Rems-Murr-Kreis.svg/211px-Wappen_Rems-Murr-Kreis.svg.png',
  'Heilbronn (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wappen_Heilbronn.svg/204px-Wappen_Heilbronn.svg.png',
  'Heilbronn (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Wappen_Landkreis_Heilbronn.svg/204px-Wappen_Landkreis_Heilbronn.svg.png',
  Hohenlohekreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wappen_Hohenlohekreis.png/223px-Wappen_Hohenlohekreis.png',
  'Schwäbisch Hall':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wappen_Landkreis_Schwaebisch_Hall.png/198px-Wappen_Landkreis_Schwaebisch_Hall.png',
  'Main-Tauber-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/c/c8/Wappen_Main-Tauber-Kreis.png',
  Heidenheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wappen_Landkreis_Heidenheim.svg/227px-Wappen_Landkreis_Heidenheim.svg.png',
  Ostalbkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Wappen_Ostalbkreis.svg/224px-Wappen_Ostalbkreis.svg.png',
  'Baden-Baden':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Stadtwappen_der_Stadt_Baden-Baden.svg/184px-Stadtwappen_der_Stadt_Baden-Baden.svg.png',
  'Karlsruhe (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/DEU_Karlsruhe_COA.svg/200px-DEU_Karlsruhe_COA.svg.png',
  'Karlsruhe (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/DEU_Landkreis_Karlsruhe_COA.svg/207px-DEU_Landkreis_Karlsruhe_COA.svg.png',
  Rastatt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Wappen_Landkreis_Rastatt.svg/202px-Wappen_Landkreis_Rastatt.svg.png',
  Heidelberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Wappen_Heidelbergn.png/218px-Wappen_Heidelbergn.png',
  Mannheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wappen_Mannheim.svg/229px-Wappen_Mannheim.svg.png',
  'Neckar-Odenwald-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/c/c4/Wappen_Neckar-Odenwald-Kreis.png',
  'Rhein-Neckar-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wappen_Rhein-Neckar-Kreis.png/200px-Wappen_Rhein-Neckar-Kreis.png',
  Pforzheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Wappen_Pforzheim.svg/228px-Wappen_Pforzheim.svg.png',
  Calw: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wappen_Landkreis_Calw.svg/229px-Wappen_Landkreis_Calw.svg.png',
  Enzkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wappen_Enzkreis.svg/200px-Wappen_Enzkreis.svg.png',
  Freudenstadt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Wappen_Landkreis_Freudenstadt.svg/188px-Wappen_Landkreis_Freudenstadt.svg.png',
  'Freiburg im Breisgau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/DEU_Freiburg_im_Breisgau_COA.svg/233px-DEU_Freiburg_im_Breisgau_COA.svg.png',
  'Breisgau-Hochschwarzwald':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wappen_Landkreis_Breisgau-Hochschwarzwald.png/234px-Wappen_Landkreis_Breisgau-Hochschwarzwald.png',
  Emmendingen:
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wappen_Landkreis_Emmendingen.png',
  Ortenaukreis:
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Wappen_Ortenaukreis.png',
  Rottweil:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Wappen_Landkreis_Rottweil.svg/199px-Wappen_Landkreis_Rottweil.svg.png',
  'Schwarzwald-Baar-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wappen_Schwarzwald-Baar-Kreis.svg/214px-Wappen_Schwarzwald-Baar-Kreis.svg.png',
  Tuttlingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wappen_Landkreis_Tuttlingen.svg/233px-Wappen_Landkreis_Tuttlingen.svg.png',
  Konstanz:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Wappen_Landkreis_Konstanz.png/230px-Wappen_Landkreis_Konstanz.png',
  Lörrach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wappen_Landkreis_Loerrach.png/200px-Wappen_Landkreis_Loerrach.png',
  Waldshut:
    'https://upload.wikimedia.org/wikipedia/commons/9/92/Wappen_Landkreis_Waldshut.png',
  Reutlingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wappen_Landkreis_Reutlingen.svg/233px-Wappen_Landkreis_Reutlingen.svg.png',
  Tübingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wappen_Landkreis_Tuebingen.svg/223px-Wappen_Landkreis_Tuebingen.svg.png',
  Zollernalbkreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Wappen_Zollernalbkreis.svg/228px-Wappen_Zollernalbkreis.svg.png',
  Ulm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coat_of_arms_of_Ulm.svg/233px-Coat_of_arms_of_Ulm.svg.png',
  'Alb-Donau-Kreis':
    'https://upload.wikimedia.org/wikipedia/commons/9/98/Landkreiswappen_des_Landkreises_Alb-Donau-Kreis.png',
  Biberach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Wappen_Landkreis_Biberach.svg/201px-Wappen_Landkreis_Biberach.svg.png',
  Bodenseekreis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bodenseekreis_Wappen.svg/221px-Bodenseekreis_Wappen.svg.png',
  Ravensburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Wappen_Landkreis_Ravensburg.svg/224px-Wappen_Landkreis_Ravensburg.svg.png',
  Sigmaringen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wappen_Landkreis_Sigmaringen.svg/214px-Wappen_Landkreis_Sigmaringen.svg.png',
  Ingolstadt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Wappen_Ingolstadt.svg/280px-Wappen_Ingolstadt.svg.png',
  'München (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Muenchen_Kleines_Stadtwappen.svg/96px-Muenchen_Kleines_Stadtwappen.svg.png',
  'Rosenheim (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wappen_Rosenheim_Neu.svg/112px-Wappen_Rosenheim_Neu.svg.png',
  Altötting:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wappen_Landkreis_Altoetting.png/111px-Wappen_Landkreis_Altoetting.png',
  'Berchtesgadener Land':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Wappen_Landkreis_Berchtesgadener_Land.png/114px-Wappen_Landkreis_Berchtesgadener_Land.png',
  'Bad Tölz-Wolfratshausen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wappen_Landkreis_Bad_Toelz-Wolfratshausen.svg/115px-Wappen_Landkreis_Bad_Toelz-Wolfratshausen.svg.png',
  Dachau:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Wappen_Landkreis_Dachau.svg/110px-Wappen_Landkreis_Dachau.svg.png',
  Ebersberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wappen_Landkreis_Ebersberg.png/112px-Wappen_Landkreis_Ebersberg.png',
  Eichstätt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Wappen_Landkreis_Eichstaett.png/112px-Wappen_Landkreis_Eichstaett.png',
  Erding:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wappen_Landkreis_Erding.png/120px-Wappen_Landkreis_Erding.png',
  Freising:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wappen_Landkreis_Freising.png/110px-Wappen_Landkreis_Freising.png',
  Fürstenfeldbruck:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Wappen_Landkreis_Fuerstenfeldbruck.png/112px-Wappen_Landkreis_Fuerstenfeldbruck.png',
  'Garmisch-Partenkirchen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Wappen_Landkreis_Garmisch-Partenkirchen.png/116px-Wappen_Landkreis_Garmisch-Partenkirchen.png',
  'Landsberg am Lech':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wappen_Landkreis_Landsberg_am_Lech.png/110px-Wappen_Landkreis_Landsberg_am_Lech.png',
  Miesbach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wappen_Landkreis_Miesbach.png/116px-Wappen_Landkreis_Miesbach.png',
  'Mühldorf a. Inn':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Wappen_M%C3%BChldorf_am_Inn.svg/280px-Wappen_M%C3%BChldorf_am_Inn.svg.png',
  'München (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Muenchen_Kleines_Stadtwappen.svg/96px-Muenchen_Kleines_Stadtwappen.svg.png',
  'Neuburg-Schrobenhausen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wappen_Landkreis_Neuburg-Schrobenhausen.svg/108px-Wappen_Landkreis_Neuburg-Schrobenhausen.svg.png',
  'Pfaffenhofen a.d. Ilm':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Wappen_Pfaffenhofen_an_der_Ilm.svg/280px-Wappen_Pfaffenhofen_an_der_Ilm.svg.png',
  'Rosenheim (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wappen_LandkreisRosenheim.png/106px-Wappen_LandkreisRosenheim.png',
  Starnberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wappen_Landkreis_Starnberg.svg/104px-Wappen_Landkreis_Starnberg.svg.png',
  Traunstein:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Wappen_LandkreisTraunstein.png/137px-Wappen_LandkreisTraunstein.png',
  'Weilheim-Schongau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Wappen_Landkreis_Weilheim-Schongau.svg/113px-Wappen_Landkreis_Weilheim-Schongau.svg.png',
  'Landshut (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/DEU_Landshut_COA.svg/280px-DEU_Landshut_COA.svg.png',
  'Passau (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Wappen_Passau.svg/280px-Wappen_Passau.svg.png',
  Straubing:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/DEU_Straubing_COA.svg/280px-DEU_Straubing_COA.svg.png',
  Deggendorf:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Wappen_Landkreis_Deggendorf.png/106px-Wappen_Landkreis_Deggendorf.png',
  'Freyung-Grafenau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wappen_Landkreis_Freyung-Grafenau.png/106px-Wappen_Landkreis_Freyung-Grafenau.png',
  Kelheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Wappen_Landkreis_Kelheim.png/111px-Wappen_Landkreis_Kelheim.png',
  'Landshut (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wappen_Landkreis_Landshut.svg/110px-Wappen_Landkreis_Landshut.svg.png',
  'Passau (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wappen_Landkreis_Passau.png/105px-Wappen_Landkreis_Passau.png',
  Regen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Wappen_Landkreis_Regen.png/106px-Wappen_Landkreis_Regen.png',
  'Rottal-Inn':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Wappen_Landkreis_Rottal-Inn.png/113px-Wappen_Landkreis_Rottal-Inn.png',
  'Straubing-Bogen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Wappen_Landkreis_Straubing-Bogen.png/106px-Wappen_Landkreis_Straubing-Bogen.png',
  'Dingolfing-Landau':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wappen_Landkreis_Dingolfing-Landau.svg/111px-Wappen_Landkreis_Dingolfing-Landau.svg.png',
  Amberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DEU_Amberg_COA.svg/280px-DEU_Amberg_COA.svg.png',
  'Regensburg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Wappen_Regensburg.svg/280px-Wappen_Regensburg.svg.png',
  'Weiden i.d. OPf.':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/DEU_Weiden_in_der_Oberpfalz_COA.svg/280px-DEU_Weiden_in_der_Oberpfalz_COA.svg.png',
  'Amberg-Sulzbach':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Wappen_Landkreis_Amberg-Sulzbach.png/110px-Wappen_Landkreis_Amberg-Sulzbach.png',
  Cham: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wappen_Landkreis_Cham.png/114px-Wappen_Landkreis_Cham.png',
  'Neumarkt i.d. OPf.':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wappen_Landkreis_Neumarkt_in_der_Oberpfalz.png/220px-Wappen_Landkreis_Neumarkt_in_der_Oberpfalz.png',
  'Neustadt a.d. Waldnaab':
    'https://upload.wikimedia.org/wikipedia/commons/5/5b/Wappen_Landkreis_Neustadt_an_der_Waldnaab.png',
  'Regensburg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wappen_Landkreis_Regensburg.svg/111px-Wappen_Landkreis_Regensburg.svg.png',
  Schwandorf:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wappen_Landkreis_Schwandorf.png/110px-Wappen_Landkreis_Schwandorf.png',
  Tirschenreuth:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Wappen_Landkreis_Tirschenreuth.png/110px-Wappen_Landkreis_Tirschenreuth.png',
  'Bamberg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wappen_Bamberg.svg/280px-Wappen_Bamberg.svg.png',
  'Bayreuth (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wappen_von_Bayreuth.svg/280px-Wappen_von_Bayreuth.svg.png',
  'Coburg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/DEU_Coburg_COA.svg/280px-DEU_Coburg_COA.svg.png',
  'Hof (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/DEU_Hof_COA.svg/280px-DEU_Hof_COA.svg.png',
  'Bamberg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Wappen_Landkreis_Bamberg.png/101px-Wappen_Landkreis_Bamberg.png',
  'Bayreuth (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Wappen_Landkreis_Bayreuth2.svg/110px-Wappen_Landkreis_Bayreuth2.svg.png',
  'Coburg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wappen_Landkreis_Coburg.png/108px-Wappen_Landkreis_Coburg.png',
  Forchheim:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wappen_Landkreis_Forchheim.png/108px-Wappen_Landkreis_Forchheim.png',
  'Hof (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wappen_Landkreis_Hof.svg/100px-Wappen_Landkreis_Hof.svg.png',
  Kronach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Wappen_Landkreis_Kronach.png/111px-Wappen_Landkreis_Kronach.png',
  Kulmbach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Wappen_Landkreis_Kulmbach.png/108px-Wappen_Landkreis_Kulmbach.png',
  Lichtenfels:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Wappen_Landkreis_Lichtenfels.png/112px-Wappen_Landkreis_Lichtenfels.png',
  'Wunsiedel i. Fichtelgebirge':
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/Wappen_Landkreis_Wunsiedel_im_Fichtelgebirge.png',
  'Ansbach (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Wappen_von_Ansbach.svg/280px-Wappen_von_Ansbach.svg.png',
  Erlangen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wappen_Erlangen.svg/280px-Wappen_Erlangen.svg.png',
  'Fürth (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/DEU_F%C3%BCrth_COA.svg/280px-DEU_F%C3%BCrth_COA.svg.png',
  Nürnberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/DEU_N%C3%BCrnberg_COA_%28klein%29.svg/280px-DEU_N%C3%BCrnberg_COA_%28klein%29.svg.png',
  Schwabach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DEU_Schwabach_COA.svg/280px-DEU_Schwabach_COA.svg.png',
  'Ansbach (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Wappen_Landkreis_Ansbach.png/106px-Wappen_Landkreis_Ansbach.png',
  'Erlangen-Höchstadt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wappen_Landkreis_Erlangen-Hoechstadt.png/107px-Wappen_Landkreis_Erlangen-Hoechstadt.png',
  'Fürth (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wappen_Landkreis_Fuerth.png/108px-Wappen_Landkreis_Fuerth.png',
  'Nürnberger Land':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wappen_Landkreis_N%C3%BCrnberger_Land.svg/111px-Wappen_Landkreis_N%C3%BCrnberger_Land.svg.png',
  'Neustadt a.d. Aisch-Bad Windsheim':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Wappen_Landkreis_Neustadt_an_der_Aisch-Bad_Windsheim.png/218px-Wappen_Landkreis_Neustadt_an_der_Aisch-Bad_Windsheim.png',
  Roth: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wappen_Landkreis_Roth.png/103px-Wappen_Landkreis_Roth.png',
  'Weißenburg-Gunzenhausen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wappen_Landkreis_Weissenburg-Gunzenhausen.svg/212px-Wappen_Landkreis_Weissenburg-Gunzenhausen.svg.png',
  'Aschaffenburg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wappen_Aschaffenburg.svg/280px-Wappen_Aschaffenburg.svg.png',
  'Schweinfurt (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/DEU_Schweinfurt_COA.svg/280px-DEU_Schweinfurt_COA.svg.png',
  'Würzburg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Wappen_von_Wuerzburg.svg/280px-Wappen_von_Wuerzburg.svg.png',
  'Aschaffenburg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Wappen_Landkreis_Aschaffenburg.svg/280px-Wappen_Landkreis_Aschaffenburg.svg.png',
  'Bad Kissingen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Landkreis_Bad_Kissingen.svg/112px-Wappen_Landkreis_Bad_Kissingen.svg.png',
  'Rhön-Grabfeld':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Landkreis_Rhoen-Grabfeld.png/106px-Wappen_Landkreis_Rhoen-Grabfeld.png',
  Haßberge:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wappen_Landkreis_Hassberge.png/108px-Wappen_Landkreis_Hassberge.png',
  Kitzingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Wappen_Landkreis_Kitzingen.png/112px-Wappen_Landkreis_Kitzingen.png',
  Miltenberg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Wappen_Landkreis_Miltenberg.png/109px-Wappen_Landkreis_Miltenberg.png',
  'Main-Spessart':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wappen_Landkreis_Main-Spessart.png/106px-Wappen_Landkreis_Main-Spessart.png',
  'Schweinfurt (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wappen_Landkreis_Schweinfurt.png/111px-Wappen_Landkreis_Schweinfurt.png',
  'Würzburg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Wappen_Landkreis_Wuerzburg.png/131px-Wappen_Landkreis_Wuerzburg.png',
  'Augsburg (Stadt)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Augsburg_wappen.svg/280px-Augsburg_wappen.svg.png',
  Kaufbeuren:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Wappen_Kaufbeuren.svg/280px-Wappen_Kaufbeuren.svg.png',
  'Kempten (Allgäu)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/DEU_Kempten_%28Allg%C3%A4u%29_COA.svg/280px-DEU_Kempten_%28Allg%C3%A4u%29_COA.svg.png',
  Memmingen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Wappen_Memmingen.svg/280px-Wappen_Memmingen.svg.png',
  'Aichach-Friedberg':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Landkreiswappen_des_Landkreises_Aichach-Friedberg.png/113px-Landkreiswappen_des_Landkreises_Aichach-Friedberg.png',
  'Augsburg (Landkreis)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Landkreis_Augsburg_Wappen.svg/107px-Landkreis_Augsburg_Wappen.svg.png',
  'Dillingen a.d. Donau':
    'https://upload.wikimedia.org/wikipedia/commons/5/59/Wappen_Landkreis_Dillingen.png',
  Günzburg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wappen_Landkreis_Guenzburg.svg/109px-Wappen_Landkreis_Guenzburg.svg.png',
  'Neu-Ulm':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wappen_Landkreis_Neu-Ulm.svg/102px-Wappen_Landkreis_Neu-Ulm.svg.png',
  'Lindau (Bodensee)':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wappen_Landkreis_Lindau_Bodensee.png/109px-Wappen_Landkreis_Lindau_Bodensee.png',
  Ostallgäu:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wappen_Landkreis_Ostallgaeu.svg/103px-Wappen_Landkreis_Ostallgaeu.svg.png',
  Unterallgäu:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Wappen_Landkreis_Unterallgaeu.svg/112px-Wappen_Landkreis_Unterallgaeu.svg.png',
  'Donau-Ries':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Wappen_des_Landkreises_Donau-Ries.png/106px-Wappen_des_Landkreises_Donau-Ries.png',
  Oberallgäu:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Wappen_Landkreis_Oberallgaeu.svg/115px-Wappen_Landkreis_Oberallgaeu.svg.png',
};
