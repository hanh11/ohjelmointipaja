function Tarkista() {
var luku = ParseInt(document.getElementById('luku').value);
if(luku < 0)
{
  document.getElementById('t1').innerHTML ="Luku on negatiivinen";
}
  else {
    document.getElementById('t1').innerHTML ="Luku on positiivinen";
  }
}

function Muutasanaksi()
{
  var viikonpaiva = document.getElementById('viikonpv').value);
  switch (viikonpaiva) {
    case 1:
      document.getElementById('t2').innerHTML ="maanantai";
      break;
      case 2:
        document.getElementById('t2').innerHTML ="tiistai";
        break;
        case 3:
          document.getElementById('t2').innerHTML ="keskiviikko";
          break;
          case 4:
            document.getElementById('t2').innerHTML ="torstai";
            break;
            case 5:
              document.getElementById('t2').innerHTML ="perjantai";
              break;
              case 6:
                document.getElementById('t2').innerHTML ="lauantai";
                break;
                case 7:
                  document.getElementById('t2').innerHTML ="sunnuntai";
                  break;
    default:
      document.getElementById('t2').innerHTML ="Annappa oikea luku (1-7)";
  }
}
function TarkistaKarkaus()
{
  var vuosi = ParseInt(document.getElementById('vuosi').value);
  if(vuosi % 4 == 0 && vuosi % 100 != 0)
{
  document.getElementById('t3').innerHTML = "Vuosi on karkausvuosi";
}
else if(vuosi % 400 = 0)
{
  document.getElementById('t3').innerHTML = "Vuosi on karkausvuosi";
}
else {
  document.getElementById('t3').innerHTML = "Vuosi ei ole karkausvuosi";
}
}
function laskekeskiarvo()
{
  var luku1 = ParseInt(document.getElementById('luku1').value);
  var luku2 = ParseInt(document.getElementById('luku2').value);
  var luku3 = ParseInt(document.getElementById('luku3').value);
  var luku4 = ParseInt(document.getElementById('luku4').value);
  var luku5 = ParseInt(document.getElementById('luku5').value);
  var summa, keskiarvo;
  summa = luku1 + luku2 + luku3 + luku4 + luku5;
  keskiarvo = summa / 5;
  document.getElementById('t4').innerHTML = "Lukujen summa on;" + summa +" ja keskiarvo on: " + keskiarvo;
}
function Teekertotaulu()
{
var kerrottava = ParseInt(document.getElementById('kerrottava').value);
var tuloste = "";
for(var i = 1; i < 11; i++)
{
  tuloste += kerrottava + " * " + i + " = " + kerrottava * i + "<br/>";
}
document.getElementById('t5').innerHTML = tuloste;
}
