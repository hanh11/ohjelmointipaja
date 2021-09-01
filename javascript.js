function Jarjesta()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.write("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + "<br>");
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        document.write("Lukujen jÃ¤rjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        document.write("Lukujen jÃ¤rjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);
}

}

}
function Etsisuurin()
{
var luku01, luku02, luku03, luku04, luku05 suurin = -9999;


  luku01 = parseInt(document.getElementById('nro1').value);
  luku02 = parseInt(document.getElementById('nro2').value);
  luku03 = parseInt(document.getElementById('nro3').value);
  luku04 = parseInt(document.getElementById('nro4').value);
  luku05 = parseInt(document.getElementById('nro5').value);
  if(luku01 > suurin)
  {
    suurin > luku01;
  }
if(luku02 > suurin)
{
  suurin > luku02;
}
 if(luku03 > suurin)
{
  suurin > luku03;
}
 if(luku04 > suurin)
{
  suurin > luku04;
}
else if(luku05 > suurin;)
{
  suurin > luku05;
}
document.getElementById('t2').innerHTML = "Suurin luku on" + suurin;
}
function tarkasta()
{
  var luku;
  luku = parseInt(document.getElementById('luku').value);
  if(luku2==0)
  {
    document.getElementById('t3').innerHTML = "Luku on parillinen";
  }
  else {
    document.getElementById('t3').innerHTML = "Luku on pariton";
  }
}
function Näyttääajoneuvo()
{
  var ika = parseInt(document.getElementById('ika').value);
  if(ika <16)
  {
    document.getElementById('t4').innerHTML ="Saat ajaa polkupyörää";
  }
  else if (ika <18)
  {
    document.getElementById('t4').innerHTML ="Saat ajaa mopoa";
  }
  else {
    document.getElementById('t4').innerHTML ="Saat ajaa autoa";
  }
}
function kaanna()
{
  var kieli = document.getElementById('kieli').value;
var x = document.getElementById('kieli');
  if(kieli) == "Hello world")
  {
    document.getElementById('t5').innerHTML = document.getElementById('kieli').
  }
}
