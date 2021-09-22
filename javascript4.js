function laskePisteet()
{
  var pisteet = 0;
  var annettuSana; = document.getElementById('sana').value;
  for(var i = 0; i <= annettuSana.lenght; i++)
  {
    switch (annettuSana[i])
    {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "n":
      case "N":
      case "s":
      case "S":
      case "t":
      case "T":
      pisteet++;
        break;
        case "o":
        case "O":
        case "ä":
        case "Ä":
        case "k":
        case "K":
        case "l":
        case "L":
        pisteet += 2;
        break;
        case "u":
        case "U":
        case "m":
        case "M":
        pisteet += 3;
        break;
        case "y":
        case "Y":
        case "h":
        case "H":
        case "p":
        case "P":
        case "j":
        case "J":
        case "r":
        case "R":
        case "v":
        case "v":
        pisteet += 4;
        break;
        case "ö":
        case "Ö":
        case "d":
        case "D":
        pisteet += 7;
        break;
        case "b":
        case "B":
        case "f":
        case "F":
        case "g":
        case "G":
        pisteet += 8;
        break;
        case "c"
        case "C":
        pisteet += 10;
        break;
      default:
        pisteet += 12;
    }
    alert(pisteet);
  }
  document.getElementById('t1').innerHTML = pisteet;
}
function arvoLotto()
{
  for(var i = 1; 1 <= 7; i++)
  {
    temp = Math.floor(Math.random()*47)+1;
    document.getElementById('t2').innerHTML += temp + " ";
  }
}
