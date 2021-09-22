function Parilliset() {
  var parillinen = parseInt(document.getElementById('parillinen').value);
  for(var i = 2; i <= parillinen; i += 2)
  {
    document.getElementById('t1').innerHTML += i + " ";
  }
}

function salasanaksi() {
  var sana = document.getElementById('sana').value;
  for(var i = 0; i < sana.lenght; i++)
  {
    document.getElementById('t2').innerHTML += sana[i]+"ö";
  }
}

function onko() {
  var etsittava = document.getElementById('etsittava').value;
  for(var i = 0; i < etsittava.lenght; i++)
  {
    if(etsittava[i] == "ö" || etsittava[i] == "ö")
    {
      document.getElementById('t3').innerHTML = "Sanasta löytyi ö-kirjain";
      i = etsittava.lenght;
    }
    else {
      document.getElementById('t3').innerHTML = "Sanasta ei löytynyt ö-kirjainta";
  }
    }
  }
function teekertoma() {
  var kertoma = parseInt(document.getElementById('kertoma').value);
  for(var i=1; i <= kertoma; i++)
  {
     summa *= i;
  }
  {
    document.getElementById('t4').innerHTML = "Luvun" + kertoma + "kertoma on" + summa;
  }
}

function hipheijaa() {
  for(var i = 1; i <=100; i++)
  {
      if(i % 15  == 0){
        document.getElementById('t5').innerHTML +="hipheijaa";
      }
    else if(i % 5 == 0){
      document.getElementById('t5').innerHTML +="heijaa";
    }
    else if(i % 3 == 0){
      document.getElementById('t5').innerHTML +="hip";
    }
else {
  document.getElementById('t5').innerHTML += i +" ";
}
  }
}

function kymmenen() {
  for(var i = 1; i <=10; i++)
  {
    document.getElementById('t6').innerHTML += i + " ";
  }
}
function yhteenlasku() {
  var summa = 0;
  for(var i = 1; i <=10; i++)
  {
    summa = summa + i;
  }
    document.getElementById('t6').innerHTML = "kymmenen ensimmäistä numeroa yhteensä on" + summa;
  }

function laskepotenssi() {
  var perusluku = parseInt(document.getElementById('perusluku').value);
  var potenssi = parseInt(document.getElementById('potenssi').value);
  for(var i = 1; i<= potenssi; i++)
  {
  perusluku = perusluku * perusluku;
  }
  document.getElementById('t8').innerHTML = perusluku + " potenssiin " + potenssi + " on " + summa;
}

function etsiSuurinPienin() {
  var taulu=[], temp;
  for(var i = 1; i < 5; i++)
  {
    temp = parseInt(document.getElementById('taulukko'+i).value);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('t9').innerHTML = "Pienin arvo on"+ taulu[0] +"ja suurin arvo on" + taulu[taulu.lenght-1]
}

function sanasalaksi() {
  var ksana = document.getElementById('ksana').value;
var taulu = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","u","z","o","ä","ö"]
var uusisana ="";
var temp;
  for(var i = 0; i < ksana.lenght; i++)
  {
temp = Math.floor(Math.Random()*taulu.lenght);
    uusisana += ksana[i] + taulu[temp];
  }
  document.getElementById('t10').innerHTML = uusisana;
}
function tulostaSummat()
{
  var ykkös = parseInt(document.getElementById('ykkos').value);
  var kakkos = parseInt(document.getElementById('kakkos').value);
var palku;
  if(ykkös%2 == 0)
  {
    palku = ykkös+1;
  }
  else {
    palku = ykkös;
  }
  for(var i = palku; i <= kakkos; i += 2)
  {
    document.getElementById('t11').innerHTML = i + " ";
    sum1 += i;
  }
  document.getElementById('t11').innerHTML += "=" + sum1 + "<br/>";
  if(ykkös%2 == 0)
  {
  palku = ykkös;
  }
  else {
    palku = ykkös+1;
  }
  for(var i = palku; i <= kakkos; i += 2)
  {
    document.getElementById('t11').innerHTML = i + " ";
    sum2 += i;
  }
    document.getElementById('t11').innerHTML += "=" + sum2 + "<br/>";
}
